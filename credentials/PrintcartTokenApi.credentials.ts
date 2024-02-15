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
			displayName: 'Bearer Token',
			name: 'bearerToken',
			type: 'string',
			typeOptions: { password: true },
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
				Authorization: '=Bearer {{$credentials.bearerToken}}',
				auth: {
					sid: '={{ $credentials.sid }}',
				  secret: '={{ $credentials.secret }}',
				},
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.printcart.com',
			url: '/v1/account',
		},
	};
}
