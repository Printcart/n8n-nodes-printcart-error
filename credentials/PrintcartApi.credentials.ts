import type {
	ICredentialType,
	INodeProperties,
	IAuthenticateGeneric,
	ICredentialTestRequest
 } from 'n8n-workflow';

export class PrintcartApi implements ICredentialType {
	name = 'printcartApi';

	displayName = 'Printcart API';

	documentationUrl = 'https://example.com/docs/auth';

	properties: INodeProperties[] = [
		{
			displayName: 'Make sure you are using a user account not an admin account',
			name: 'notice',
			type: 'notice',
			default: '',
		},
		{
			displayName: 'Sid',
			name: 'sid',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Secret',
			name: 'secret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				auth: {
					sid: '={{ $credentials.sid }}',
				  secret: '={{ $credentials.secret }}',
				},
				qs: {
					// Send this as part of the query string
					n8n: 'rocks',
				},
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			 baseURL: '=https://{{$credentials.sid}}:{{$credentials.secret}}@api.printcart.com',
			 url: '/v1/account',
		},
	};
}
