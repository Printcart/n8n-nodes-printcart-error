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
			displayName: 'Secert',
			name: 'secert',
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
					url: '=https://{{$credentials.sid}}:{{$credentials.secert}}@api.printcart.com/v1/account'
				}
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://{{$credentials.sid }}:{{$credentials.secert}}@api.printcart.com',
			url: '/v1/account',
		},
	};
}
