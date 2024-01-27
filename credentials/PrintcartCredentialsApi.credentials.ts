import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PrintcartCredentialsApi implements ICredentialType {
	name = 'printcartCredentialsApi';
	displayName = 'Printcart Credentials API';
	properties: INodeProperties[] = [
		// The credentials to get from user and save encrypted.
		// Properties can be defined exactly in the same way
		// as node properties.
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

	// This credential is currently not used by any node directly
	// but the HTTP Request node can use it to make requests.
	// The credential is also testable due to the `test` property below
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				auth: {
					url: 'https://{{ $credentials.sid }}:{{ $credentials.secert }}@api.printcart.com/v1/account'
				}
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://{{ $credentials.sid }}:{{ $credentials.secert }}@api.printcart.com',
			url: '/v1/account',
			method: "GET"
		},
	};
}
