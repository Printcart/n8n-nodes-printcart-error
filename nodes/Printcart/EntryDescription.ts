import type { INodeProperties } from 'n8n-workflow';

export const entryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['entry'],
			},
		},
		options: [
			{
				name: 'Create Account',
				value: 'createAnAccount',
				description: 'Create an account',
				action: 'Create an account',
			},
			{
				name: 'Get Account Info',
				value: 'getAccountinfo',
				description: 'Get an account',
				action: 'Get an account',
			},
			{
				name: 'GetStore',
				value: 'getStore',
				description: 'Get a sore',
				action: 'Get a sore ',
			},
			{
				name: 'Update Account Detail',
				value: 'update',
				description: 'Update an account',
				action: 'Update an account',
			},

		],
		default: 'getAccountinfo',
	},
];

export const entryFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                entry:create account                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: 'name',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['createAnAccount'],
			},
		},
		description: 'AccountName',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'discription',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['createAnAccount'],
			},
		},
		description: 'Email of Account',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['createAnAccount'],
			},
		},
		default: '',
		placeholder: 'none',
		description:
			'Enter the information',
	},

	/* -------------------------------------------------------------------------- */
	/*                                entry:delete                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Content Type',
		name: 'contentType',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['delete'],
			},
		},
		description: 'Name of the content type',
	},
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['delete'],
			},
		},
		description: 'The ID of the entry to delete',
	},

	/* -------------------------------------------------------------------------- */
	/*                                entry:get account info                                  */
	/* -------------------------------------------------------------------------- */


	/* -------------------------------------------------------------------------- */
	/*                                entry:getStore                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Content Type',
		name: 'contentType',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['get'],
			},
		},
		description: 'Name of the content type',
	},
	{
		displayName: 'Entry StoreID',
		name: 'entryStoreId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['get'],
			},
		},
		description: 'The ID of the entry to get',
	},

	/* -------------------------------------------------------------------------- */
	/*                                entry:update                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Content Type',
		name: 'contentType',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['update'],
			},
		},
		description: 'Name of the content type',
	},
	{
		displayName: 'Update Key',
		name: 'updateKey',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['update'],
			},
		},
		default: 'id',
		required: true,
		// eslint-disable-next-line n8n-nodes-base/node-param-description-miscased-id
		description:
			'Name of the property which decides which rows in the database should be updated. Normally that would be "id".',
	},
	{
		displayName: 'Columns',
		name: 'columns',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['update'],
			},
		},
		default: '',
		placeholder: 'id,name,description',
		description:
			'Comma-separated list of the properties which should used as columns for the new rows',
	},
];
