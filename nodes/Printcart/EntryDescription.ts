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
				name: 'Get Account Info',
				value: 'getAccountInfo',
				description: 'Get an account',
				action: 'Get an account',
			},
			{
				name: 'Update Account Detail',
				value: 'updateAccount',
				description: 'Update an account',
				action: 'Update an account',
			},
			{
				name: 'GetProduct',
				value: 'getProduct',
				description: 'Get products of account',
				action: 'Get products ',
			},
		],
		default: 'getAccountInfo',
	},
];

export const entryFields: INodeProperties[] = [

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
		displayName: 'Update Email',
		name: 'updateEmail',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['updateAccount'],
			},
		},
		description: 'Email that you want to change into',
	},
	{
		displayName: 'Update Name',
		name: 'updateName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['entry'],
				operation: ['updateAccount'],
			},
		},
		description: 'Name that you want to change into',
	},
];
