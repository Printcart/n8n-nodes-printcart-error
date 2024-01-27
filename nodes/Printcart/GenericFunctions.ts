import type { OptionsWithUri } from 'request';

import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IWebhookFunctions,
} from 'n8n-workflow';

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
	if (authenticationMethod === 'password') {
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

