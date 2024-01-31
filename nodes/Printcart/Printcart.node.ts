import type { OptionsWithUri } from 'request';

import type {
	IExecuteFunctions,
	//ICredentialsDecrypted,
	//ICredentialTestFunctions,
	//IDataObject,
	//INodeCredentialTestResult,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

//import { printcartApiRequest } from './GenericFunctions';

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
						authentication: ['sid','secret'],
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
						name: 'Sid & Secret',
						value: 'secret',
					},
					{
						name: 'API Token',
						value: 'token',
					},
				],
				default: 'secret',
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

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		//const qs: IDataObject = {};
		let responseData;
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);
		const credentials = await this.getCredentials('printcartApi');
		const sid = credentials.sid;
		const secret = credentials.secret;

		for (let i = 0; i < length; i++) {
			try {
				if (resource === 'entry') {
					if (operation === 'getAccountInfo') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/account`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'updateAccount') {
						const name = this.getNodeParameter('updateName', i) as string;
						const email = this.getNodeParameter('updateEmail', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'PUT',
							body:{
								name: name,
								email: email,
							},
							uri: `https://${sid}:${secret}@api.printcart.com/v1/account`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'getProduct') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartApi',
							options,
						);
						returnData.push(responseData);
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
		return [this.helpers.returnJsonArray(returnData)];
	}
}
