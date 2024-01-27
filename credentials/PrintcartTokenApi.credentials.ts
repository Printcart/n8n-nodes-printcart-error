import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PrintcartTokenApi implements ICredentialType {
	name = 'printcartTokenApi';

	displayName = 'Printcart Token API';

	documentationUrl = 'https://example.com/docs/auth';

	properties: INodeProperties[] = [
		{
			displayName: 'UnAuth Token',
			name: 'unAuthToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},

	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials.unAuthToken}}',
				'X-PrintCart-Unauth-Token': '={{$credentials.unAuthToken}}'
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.printcart.com',
			url: '/v1/products',
		},
	};
}
