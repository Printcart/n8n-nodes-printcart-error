import type { OptionsWithUri } from 'request';

import type {
	IExecuteFunctions,
	ICredentialsDecrypted,
	ICredentialTestFunctions,
	IDataObject,
	INodeCredentialTestResult,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

import { printcartApiRequest } from './GenericFunctions';

import { entryFields, entryOperations } from './EntryDescription';

export class Printcart implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Printcart',
		name: 'printcart',
		icon: 'file:printcart.svg',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Prinrcart API',
		defaults: {
			name: 'Printcart',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'printcartApi',
				required: true,
				testedBy: 'printcartApiTest',
				displayOptions: {
					show: {
						authentication: ['password'],
					},
				},
			},
			{
				name: 'printcartTokenApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['token'],
					},
				},
			},
		],
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'Username & Password',
						value: 'password',
					},
					{
						name: 'API Token',
						value: 'token',
					},
				],
				default: 'password',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				noDataExpression: true,
				type: 'options',
				options: [
					{
						name: 'Entry',
						value: 'entry',
					},
				],
				default: 'entry',
			},
			...entryOperations,
			...entryFields,
		],
	};

	methods = {
		credentialTest: {
			async printcartApiTest(
				this: ICredentialTestFunctions,
				credential: ICredentialsDecrypted,
			): Promise<INodeCredentialTestResult> {
				const credentials = credential.data as IDataObject;
				let options = {} as OptionsWithUri;
				options = {
					headers: {
						'content-type': 'application/json',
					},
					method: 'POST',
					body: {
						identifier: credentials.email,
						password: credentials.password,
					},
					uri: 'example.com',
					json: true,
				};

				try {
					await this.helpers.request(options);
					return {
						status: 'OK',
						message: 'Authentication successful',
					};
				} catch (error) {
					return {
						status: 'Error',
						message: `Auth settings are not valid: ${error}`,
					};
				}
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		const qs: IDataObject = {};
		const headers: IDataObject = {};
		let responseData;
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		const authenticationMethod = this.getNodeParameter('authentication', 0);

		let apiVersion: string;

		if (authenticationMethod === 'password') {
			apiVersion = (await this.getCredentials('printcartApi')).apiVersion as string;
			headers.Authorization = `Bearer `;
		} else {
			apiVersion = (await this.getCredentials('printcartTokenApi')).apiVersion as string;
		}

		for (let i = 0; i < length; i++) {
			try {
				if (resource === 'entry') {
					//Tạo tk mới
					if (operation === 'createAnAccount') {
						const headers: IDataObject = {};
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
							email: this.getNodeParameter('email', i) as string,
							password: this.getNodeParameter('password', i) as string,
						};
						responseData = await printcartApiRequest.call(
							this,
							'POST',
							`https://api.printcart.com/v1/account`,
							body,
							qs,
							`https://api.printcart.com/v1/account`,
							headers,
						);
							console.log(body);
							console.log(responseData);
							const executionData =	this.helpers.returnJsonArray(responseData as unknown as IDataObject);
							returnData.push(...executionData);
					}
					if (operation === 'deleteAccount') {
						const contentType = this.getNodeParameter('contentType', i) as string;

						const entryId = this.getNodeParameter('entryId', i) as string;

						responseData = await printcartApiRequest.call(
							this,
							'DELETE',
							`/${contentType}/${entryId}`,
							{},
							qs,
							undefined,
							headers,
						);
					}

					if (operation === 'getStore') {
						const returnAll = this.getNodeParameter('returnAll', i);

						const contentType = this.getNodeParameter('contentType', i) as string;

						const options = this.getNodeParameter('options', i);

						if (apiVersion === 'v4') {
						} else {
							// Sort Option
							if (options.sort && (options.sort as string[]).length !== 0) {
								const sortFields = options.sort as string[];
								qs._sort = sortFields.join(',');
							}
							// Filter Option
							if (options.where) {
								const query = validateJSON(options.where as string);
								if (query !== undefined) {
								} else {
									throw new NodeOperationError(this.getNode(), 'Query must be a valid JSON', {
										itemIndex: i,
									});
								}
							}
							// Publication Option
							if (options.publicationState) {
								qs._publicationState = options.publicationState as string;
							}
							// Limit Option
							if (returnAll) {
								responseData = await printcartApiRequest.call(
									this,
									'GET',
									`/${contentType}`,
									{},
									qs,
									apiVersion,
								);
							} else {
								qs._limit = this.getNodeParameter('limit', i);
								responseData = await printcartApiRequest.call(
									this,
									'GET',
									`/${contentType}`,
									{},
									qs,
									undefined,
									headers,
								);
							}
						}

						const executionData = this.helpers.constructExecutionMetaData(
							this.helpers.returnJsonArray(responseData as unknown as IDataObject),
							{ itemData: { item: i } },
						);

						returnData.push(...executionData);
					}
					// lấy thông tin
					if (operation === 'getAccount') {
						responseData = await printcartApiRequest.call(this, 'GET', ``, qs, undefined);

						const executionData = this.helpers.constructExecutionMetaData(
							this.helpers.returnJsonArray(responseData as unknown as IDataObject),
							{ itemData: { item: i } },
						);

						returnData.push(...executionData);
					}

					if (operation === 'updateAccount') {
						const body: IDataObject = {};

						const contentType = this.getNodeParameter('contentType', i) as string;

						const columns = this.getNodeParameter('columns', i) as string;

						const updateKey = this.getNodeParameter('updateKey', i) as string;

						const columnList = columns.split(',').map((column) => column.trim());

						const entryId = items[i].json[updateKey];

						for (const key of Object.keys(items[i].json)) {
							if (columnList.includes(key)) {
								apiVersion === 'v4'
									? (body.data = items[i].json)
									: (body[key] = items[i].json[key]);
							}
						}

						responseData = await printcartApiRequest.call(
							this,
							'PUT',
							`/${contentType}/${entryId}`,
							body,
							qs,
							undefined,
							headers,
						);

						const executionData = this.helpers.constructExecutionMetaData(
							this.helpers.returnJsonArray(responseData as unknown as IDataObject),
							{ itemData: { item: i } },
						);

						returnData.push(...executionData);
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionErrorData);
					continue;
				}
				throw error;
			}
		}
		return [returnData];
	}
}
function validateJSON(arg0: string) {
	// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
	throw new Error('Function not implemented.');
}
