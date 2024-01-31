
import type { OptionsWithUri } from 'request';

import type {
	ICredentialDataDecryptedObject,
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IWebhookFunctions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export async function printcartApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions | IWebhookFunctions,
	method: string,
	resource: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
	headers: IDataObject = {},
) {
	const authenticationMethod = this.getNodeParameter('authentication', 0);
	let credentials: ICredentialDataDecryptedObject;

	if (authenticationMethod === 'secret') {
		credentials = await this.getCredentials('printcartApi');
	} else {
		credentials = await this.getCredentials('printcartTokenApi');
	}

	try {
		const options: OptionsWithUri = {
			headers: {},
			method,
			body,
			qs,
			uri: uri || credentials.apiVersion === 'v4' ? `${URL}/api${resource}` : `${URL}${resource}`,
			json: true,
			qsStringifyOptions: {
				arrayFormat: 'indice',
			},
		};
		if (Object.keys(headers).length !== 0) {
			options.headers = Object.assign({}, options.headers, headers);
		}
		if (Object.keys(body).length === 0) {
			delete options.body;
		}

		return await this.helpers.requestWithAuthentication.call(
			this,
			authenticationMethod === 'secret' ? 'printcartApi' : 'printcatTokenApi',
			options,
		);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function getToken(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions | IWebhookFunctions,
) {
	//const credentials = await this.getCredentials('printcartApi');
	let options = {} as OptionsWithUri;
	options = {
		headers: {
			'content-type': 'application/json',
		},
		method: 'POST',

		uri: '',
		json: true,
	};
	return await this.helpers.request(options);
}

