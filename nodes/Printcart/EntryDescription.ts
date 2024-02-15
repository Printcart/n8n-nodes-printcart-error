import type { INodeProperties } from 'n8n-workflow';

/* -------------------------------------------------------------------------- */
/*                        ACCOUNT                                             */
/* -------------------------------------------------------------------------- */
export const accountOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['account'],
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
				name: 'Create Account',
				value: 'createAccount',
				description: 'Create an account',
				action: 'Create an account',
			},
		],
		default: 'getAccountInfo',
	},
];
// entry
export const accountFields: INodeProperties[] = [
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
				resource: ['account'],
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
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Name that you want to change into',
	},
	/* -------------------------------------------------------------------------- */
	/*                                entry:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['createAccount'],
			},
		},
		description: 'Name that you want to create',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['createAccount'],
			},
		},
		description: 'Email that you want to create',
	},

	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['createAccount'],
			},
		},
		description: 'Password include',
	},
];
/* -------------------------------------------------------------------------- */
/*                                STORE                                       */
/* -------------------------------------------------------------------------- */
export const storesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['store'],
			},
		},
		options: [
			{
				name: 'Create Store',
				value: 'createStore',
				description: 'Create a Store',
				action: 'Create an store',
			},
			{
				name: 'Delete Store',
				value: 'deleteStore',
				description: 'Delete a Store',
				action: 'Delete a store',
			},
			{
				name: 'Get Store Detail',
				value: 'getStoreDetail',
				description: 'Get details of store',
				action: 'Get stores deetail',
			},
			{
				name: 'Get Store Info',
				value: 'getStore',
				description: 'Get stores of account',
				action: 'Get stores ',
			},
			{
				name: 'Renew UnAuth Token',
				value: 'renewUnAuthToken',
				description: 'Renew unauth token by',
				action: 'Renew unauth token by',
			},
			{
				name: 'Update Store Detail',
				value: 'updateStore',
				description: 'Update a store',
				action: 'Update a store',
			},
		],
		default: 'getStore',
	},
];
// entry
export const storeFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                entry:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Store Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['createStore'],
			},
		},
		description: 'Name that you want to create',
	},
	{
		displayName: 'Google_font_api',
		name: 'google_font_api',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['createStore'],
			},
		},
		description: 'Google_font_api that you want to create',
	},
	{
		displayName: 'Unsplash',
		name: 'unsplash',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['createStore'],
			},
		},
		description: 'Unsplash include',
	},
	{
		displayName: 'Pixabay',
		name: 'pixabay',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['createStore'],
			},
		},
		description: 'Pixabay include',
	},
	{
		displayName: 'Pexels',
		name: 'pexels',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['createStore'],
			},
		},
		description: 'Pexels include',
	},
	/* -------------------------------------------------------------------------- */
	/*                                entry:update                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Update Store Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['updateStore'],
			},
		},
		description: 'Name that you want to update',
	},
	{
		displayName: 'Update Google_font_api',
		name: 'google_font_api',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['updateStore'],
			},
		},
		description: 'Google_font_api that you want to update',
	},
	{
		displayName: 'Update Unsplash',
		name: 'unsplash',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['updateStore'],
			},
		},
		description: 'Unsplash that you want to update',
	},
	{
		displayName: 'Update Pixabay',
		name: 'pixabay',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['updateStore'],
			},
		},
		description: 'Pixabay that you want to update',
	},
	{
		displayName: 'Update Pexels',
		name: 'pexels',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['updateStore'],
			},
		},
		description: 'Pexels that you want to update',
	},
	/* -------------------------------------------------------------------------- */
	/*                                entry:delete                               */
	/* -------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------- */
	/*                                entry:get store details                     */
	/* -------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------- */
	/*                                entry:Renew AuthToken                   */
	/* -------------------------------------------------------------------------- */
];

/* -------------------------------------------------------------------------- */
/*                                PRODUCTS                                    */
/* -------------------------------------------------------------------------- */
export const productsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['product'],
			},
		},
		options: [
			{
				name: 'Create Batch Product',
				value: 'createBatchProduct',
				description: 'Create a batch product',
				action: 'Create batch products ',
			},
			{
				name: 'Create Product',
				value: 'createProduct',
				description: 'Create a product',
				action: 'Create products ',
			},
			{
				name: 'Delete Product',
				value: 'deleteProduct',
				description: 'Delete a product',
				action: 'Delete product ',
			},
			{
				name: 'Get a Count of Designs by Product',
				value: 'getDesignCount',
				description: 'Get a Count of Designs',
				action: 'Get a count',
			},
			{
				name: 'Get a Count of Sides by Product',
				value: 'getASideCount',
				description: 'Get a Count of Sides',
				action: 'Get side count',
			},
			{
				name: 'Get List of Products',
				value: 'getListOfProduct',
				description: 'Get products of account',
				action: 'Get list products ',
			},
			{
				name: 'Get Product Detail',
				value: 'getProductDetail',
				description: 'Get detail of a product',
				action: 'Get product detail ',
			},
			{
				name: 'Update Product',
				value: 'updateProduct',
				description: 'Update a product',
				action: 'Update products with ',
			},
		],
		default: 'getListOfProduct',
	},
];
export const productFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                entry:Get list of products                  */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Limit',
		name: 'limitProduct',
		type: 'number',
		description: 'Max number of results to return',
		default: 10,
		typeOptions: {
			numberPrecision: 0,
			minValue: 10,
			numberStepSize: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getListOfProduct'],
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'collection',
		placeholder: 'Add the way you want to sort',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Desc',
						value: 'desc',
					},
					{
						name: 'Asc',
						value: 'asc',
					},
				],
				default: 'desc',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getListOfProduct'],
			},
		},
	},
	{
		displayName: 'Sort By',
		name: 'sortBy',
		type: 'string',
		default: 'id',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getListOfProduct'],
			},
		},
		description: 'Sort by a element of product',
	},
	{
		displayName: 'Get By Status',
		name: 'getByStatus',
		type: 'collection',
		placeholder: 'Choose Status',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Publish',
						value: 'publish',
					},
					{
						name: 'Draft',
						value: 'darft',
					},
					{
						name: 'Trashed',
						value: 'trashed',
					},
				],
				default: 'publish',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getListOfProduct'],
			},
		},
	},
	/* -------------------------------------------------------------------------- */
	/*   entry:List of sides,Get a count of designs by product ,getSideCount, Delete Product        */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: [
					'getListOfSides',
					'getASideCount',
					'getDesignCount',
					'deleteProduct',
					'updateProduct',
					'getProductDetail',
				],
			},
		},
		description: 'ID of product',
	},
	/* -------------------------------------------------------------------------- */
	/*                                entry:Create Product                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Product Name',
		name: 'productName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
		description: 'Name of the new product',
	},
	{
		displayName: 'Dynamic Side',
		name: 'dynamic_side',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Viewport Width',
		name: 'viewport_width',
		type: 'number',
		default: 50.5,
		typeOptions: {
			numberPrecision: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Viewport Height',
		name: 'viewport_height',
		type: 'number',
		default: 50.5,
		typeOptions: {
			numberPrecision: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Scale',
		name: 'scale',
		type: 'number',
		default: 50.5,
		typeOptions: {
			numberPrecision: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Dpi',
		name: 'dpi',
		type: 'number',
		default: 72,
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Demension Unit',
		name: 'dimension_unit',
		type: 'collection',
		placeholder: 'Add Demension Unit',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Cm',
						value: 'cm',
					},
					{
						name: 'Pixel',
						value: 'pixel',
					},
					{
						name: 'Inch',
						value: 'inch',
					},
				],
				default: 'cm',
			},
		],
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'collection',
		placeholder: 'Add Status',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Publish',
						value: 'publish',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
				],
				default: 'publish',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Allow File Types',
		name: 'allowed_file_types',
		type: 'multiOptions',
		placeholder: 'Add Types',
		options: [
			{
				name: 'Jpg',
				value: 'jpg',
			},
			{
				name: 'Png',
				value: 'png',
			},
			{
				name: 'Ai',
				value: 'ai',
			},
			{
				name: 'Pdf',
				value: 'pdf',
			},
		],
		default: [],
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Enable Design',
		name: 'enable_design',
		type: 'boolean',
		default: false,
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Enable Upload',
		name: 'enable_upload',
		type: 'boolean',
		default: false,
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Enable Pod',
		name: 'enable_pod',
		type: 'boolean',
		default: false,
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Type ID',
		name: 'type_id',
		type: 'options',
		placeholder: 'Add Types',
		options: [
			{
				name: 'Simple',
				value: 'simple',
			},
		],
		default: 'simple',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct', 'createBatchProduct'],
			},
		},
		description: 'Description of the new product',
	},
];
/* -------------------------------------------------------------------------- */
/*                                SIDES                                       */
/* -------------------------------------------------------------------------- */
export const sideOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['side'],
			},
		},
		options: [
			{
				name: 'Create Side',
				value: 'createSide',
				description: 'Create a side',
				action: 'Create a side',
			},
			{
				name: 'Delete Side',
				value: 'deleteSide',
				description: 'Delete a side',
				action: 'Delete a side',
			},
			{
				name: 'Get List of Side',
				value: 'getListSide',
				description: 'Get a list of side',
				action: 'Get a list of side',
			},
			{
				name: 'Get Side Detail',
				value: 'getSideDetail',
				description: 'Get a side',
				action: 'Get a side',
			},
			{
				name: 'Update Side Detail',
				value: 'updateSide',
				description: 'Update the side',
				action: 'Update the side',
			},
		],
		default: 'createSide',
	},
];
export const sideFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                entry: Get Side detail                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Side ID',
		name: 'sideId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['getSideDetail', 'updateSide', 'deleteSide'],
			},
		},
		description: 'ID of product',
	},
	/* -------------------------------------------------------------------------- */
	/*                                entry:Create Side                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'ID of product',
	},
	{
		displayName: 'Name of the Side',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Name of product',
	},
	{
		displayName: 'Background Type',
		name: 'bg_type',
		type: 'collection',
		placeholder: 'Add Status',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Color',
						value: 'color',
					},
					{
						name: 'Image',
						value: 'image',
					},
					{
						name: 'Transparent',
						value: 'transparent',
					},
				],
				default: 'image',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Background type of product',
	},
	{
		displayName: 'Background Color Value',
		name: 'bg_color_value',
		type: 'color',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Background color of side',
	},
	{
		displayName: 'Scale',
		name: 'scale',
		type: 'number',
		default: 100,
		required: true,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Scale of side',
	},
	{
		displayName: 'Add Width and Height to side image-size',
		name: 'imageSize-info',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		placeholder: 'Add Width-Size',
		default: 50,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Side image-size type of product',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		placeholder: 'Add Height-Size',
		default: 50,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Side image-size of product',
	},
	{
		displayName: 'Add Width, Height, Top, Left to Design Arena',
		name: 'designArena-info',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
	},
	{
		displayName: 'Width Arena',
		name: 'widthArena',
		type: 'number',
		placeholder: 'Add Width-Size',
		default: 50,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Arena-size of product',
	},
	{
		displayName: 'Height Arena',
		name: 'heightArena',
		type: 'number',
		placeholder: 'Add Height-Size',
		default: 50,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Arena-size of product',
	},
	{
		displayName: 'Top Arena',
		name: 'topArena',
		type: 'number',
		placeholder: 'Add Top-Size',
		default: 50,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Arena-size of product',
	},
	{
		displayName: 'Left Arena',
		name: 'leftArena',
		type: 'number',
		placeholder: 'Add Left-Size',
		default: 50,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Arena-size of product',
	},
	{
		displayName: 'Side Image ID',
		name: 'side_image_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Side Image ID that can take in GET Image',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'collection',
		placeholder: 'Add Status',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Publish',
						value: 'publish',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
					{
						name: 'Trashed',
						value: 'trashed',
					},
				],
				default: 'publish',
			},
		],
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['side'],
				operation: ['createSide', 'updateSide'],
			},
		},
		description: 'Status of side',
	},
];
/* -------------------------------------------------------------------------- */
/*                                Image                                       */
/* -------------------------------------------------------------------------- */
export const imageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['image'],
			},
		},
		options: [
			{
				name: 'Delete Image',
				value: 'deleteImage',
				description: 'Delete a image',
				action: 'Delete a image',
			},
			{
				name: 'Get List of Image',
				value: 'getListImage',
				description: 'Get a list of image',
				action: 'Get a list of image',
			},
			{
				name: 'Get Image Detail',
				value: 'getImageDetail',
				description: 'Get a image detail',
				action: 'Get a image detail',
			},
			{
				name: 'Count Image',
				value: 'countImage',
				description: 'Count images',
				action: 'Count number of image',
			},
		],
		default: 'getListImage',
	},
];

export const imageFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*            entry: Get,Delete image detail                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Image ID',
		name: 'imageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['image'],
				operation: ['getImageDetail', 'deleteImage'],
			},
		},
		description: 'ID of image',
	},
];
/* -------------------------------------------------------------------------- */
/*                                Clipart                                     */
/* -------------------------------------------------------------------------- */
export const clipartOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['clipart'],
			},
		},
		options: [
			{
				name: 'Count Clipart',
				value: 'countClipart',
				description: 'Count cliparts',
				action: 'Count number of clipart',
			},
			{
				name: 'Delete Clipart',
				value: 'deleteClipart',
				description: 'Delete a clipart',
				action: 'Delete a clipart',
			},
			{
				name: 'Get Clipart Detail',
				value: 'getClipartDetail',
				description: 'Get a clipart detail',
				action: 'Get a clipart detail',
			},
			{
				name: 'Get List of Clipart',
				value: 'getClipartList',
				description: 'Get a list of clipart',
				action: 'Get a list of clipart',
			},
			{
				name: 'Get List of Default Clipart',
				value: 'getClipartDefaultList',
				description: 'Get a list of default clipart',
				action: 'Get a list of default clipart',
			},
		],
		default: 'getClipartList',
	},
];

export const clipartFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*            entry: Get,Delete clipart detail                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Clipart ID',
		name: 'clipartId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['clipart'],
				operation: ['getClipartDetail', 'deleteClipart'],
			},
		},
		description: 'ID of image',
	},
];
/* -------------------------------------------------------------------------- */
/*                               Design                                       */
/* -------------------------------------------------------------------------- */
export const designsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['design'],
			},
		},
		options: [
			{
				name: 'Count Design',
				value: 'countDesign',
				description: 'Count designs',
				action: 'Count number of designs',
			},
			{
				name: 'Create Design',
				value: 'createDesign',
				description: 'Create a design',
				action: 'Create design',
			},
			{
				name: 'Delete Design',
				value: 'deleteDesign',
				description: 'Delete a design',
				action: 'Delete a design',
			},
			{
				name: 'Get Design Detail',
				value: 'getDesignDetail',
				description: 'Get a design detail',
				action: 'Get a design detail',
			},
			{
				name: 'Get List of Design',
				value: 'getDesignList',
				description: 'Get a list of design',
				action: 'Get a list of design',
			},
			{
				name: 'Get List of Font Design',
				value: 'getFontsLayer',
				description: 'Get a list of font design',
				action: 'Get a list of font design',
			},
			{
				name: 'Get List of Images Design',
				value: 'getImageDesign',
				description: 'Get list image design',
				action: 'Get list of image design',
			},
			{
				name: 'Update Design',
				value: 'updateDesign',
				description: 'Update a design',
				action: 'Update design',
			},
		],
		default: 'getDesignList',
	},
];
export const designFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*            entry: Get,Delete design detail                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Design ID',
		name: 'designId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['updateDesign', 'getDesignDetail', 'deleteDesign', 'getFontsLayer'],
			},
		},
		description: 'ID of design',
	},
	/* -------------------------------------------------------------------------- */
	/*                          entry: Create design                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Side ID',
		name: 'side_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
		description: 'ID of side to create design',
	},
	{
		displayName: 'Preview Image ID',
		name: 'preview_image_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
		description: 'ID image to create design',
	},
	{
		displayName: 'Design Image ID',
		name: 'design_image_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
		description: 'ID image to create design',
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
		description: 'Note when create design',
	},
	{
		displayName: 'Uploader',
		name: 'is_uploader',
		type: 'boolean',
		default: false,
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'collection',
		placeholder: 'Add Status',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Processing',
						value: 'processing',
					},
					{
						name: 'Accepted',
						value: 'accepted',
					},
					{
						name: 'Trashed',
						value: 'trashed',
					},
					{
						name: 'Declined',
						value: 'declined',
					},
				],
				default: 'processing',
			},
		],
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
		description: 'Status of design',
	},
	{
		displayName: 'Viewport Width',
		name: 'viewport_width',
		type: 'number',
		description: 'Number of viewport width',
		default: 50.5,
		typeOptions: {
			numberPrecision: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
	},
	{
		displayName: 'Viewport Height',
		name: 'viewport_height',
		type: 'number',
		description: 'Number of viewport height',
		default: 50.5,
		typeOptions: {
			numberPrecision: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['design'],
				operation: ['createDesign', 'updateDesign'],
			},
		},
	},
];
/* -------------------------------------------------------------------------- */
/*                                PROJECT                                     */
/* -------------------------------------------------------------------------- */
export const projectsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['project'],
			},
		},
		options: [
			{
				name: 'Count Project',
				value: 'countProject',
				description: 'Count projects',
				action: 'Count number of project',
			},
			{
				name: 'Create Project',
				value: 'createProject',
				description: 'Create a project',
				action: 'Create project',
			},
			{
				name: 'Delete Project',
				value: 'deleteProject',
				description: 'Delete a project',
				action: 'Delete a project',
			},
			{
				name: 'Get List of Project',
				value: 'getProjectList',
				description: 'Get a list of project',
				action: 'Get a list of project',
			},
			{
				name: 'Get Project Detail',
				value: 'getProjectDetail',
				description: 'Get a project detail',
				action: 'Get a project detail',
			},
			{
				name: 'Update Project',
				value: 'updateProject',
				description: 'Update a project',
				action: 'Update project',
			},
		],
		default: 'countProject',
	},
];
export const projectFields: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['updateProject', 'getProjectDetail', 'deleteProject'],
			},
		},
		description: 'ID of project',
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['createProject', 'updateProject'],
			},
		},
		description: 'Note when create or update project',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['createProject', 'updateProject'],
			},
		},
		description: 'Name when create or update project',
	},
	{
		displayName: 'Status',
		name: 'status',
		placeholder: 'Add status',
		type: 'collection',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Processing',
						value: 'processing',
					},
					{
						name: 'Accepted',
						value: 'accepted',
					},
					{
						name: 'Trashed',
						value: 'trashed',
					},
					{
						name: 'Reviewing',
						value: 'reviewing',
					},
				],
				default: 'processing',
			},
		],
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['createProject', 'updateProject'],
			},
		},
		description: 'Status of project',
	},
];
/* -------------------------------------------------------------------------- */
/*                                Template                                    */
/* -------------------------------------------------------------------------- */
export const templatesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['template'],
			},
		},
		options: [
			{
				name: 'Count Template',
				value: 'countTemplate',
				description: 'Count templates',
				action: 'Count number of template',
			},
			{
				name: 'Create Template',
				value: 'createTemplate',
				description: 'Create a template',
				action: 'Create template',
			},
			{
				name: 'Delete Template',
				value: 'deleteTemplate',
				description: 'Delete a template',
				action: 'Delete a template',
			},
			{
				name: 'Get List Fonts Layer by Template',
				value: 'getFontsByTemplate',
				description: 'Get a list of Fonts by template',
				action: 'Get a list',
			},
			{
				name: 'Get List of Template',
				value: 'getTemplateList',
				description: 'Get a list of template',
				action: 'Get a list of template',
			},
			{
				name: 'Get Template Detail',
				value: 'getTemplateDetail',
				description: 'Get a template detail',
				action: 'Get a template detail',
			},
			{
				name: 'Update Template',
				value: 'updateTemplate',
				description: 'Update a template',
				action: 'Update template',
			},
		],
		default: 'getTemplateList',
	},
];

export const templatesFields: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectID',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Side ID',
		name: 'sideId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Preview Image ID',
		name: 'preview_image_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Template Image ID',
		name: 'template_image_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Layer',
		name: 'layer',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Viewport Width',
		name: 'viewport_width',
		type: 'number',
		description: 'Number of viewport width',
		default: 50.5,
		typeOptions: {
			numberPrecision: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Viewport Height',
		name: 'viewport_height',
		type: 'number',
		description: 'Number of viewport height',
		default: 50.5,
		typeOptions: {
			numberPrecision: 1,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate', 'updateTemplate'],
			},
		},
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['updateTemplate', 'getTemplateDetail', 'deleteTemplate', 'getFontsByTemplate'],
			},
		},
		description: 'ID of tepmplate',
	},
];
/* -------------------------------------------------------------------------- */
/*                                Storages                                    */
/* -------------------------------------------------------------------------- */
export const storagesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['storage'],
			},
		},
		options: [
			{
				name: 'Count Storages',
				value: 'countStorages',
				description: 'Count number storages',
				action: 'Count number of storages',
			},
			{
				name: 'Create Storages',
				value: 'createStorages',
				description: 'Create a Storages',
				action: 'Create storages',
			},
			{
				name: 'Get List of Storages',
				value: 'getStorageList',
				description: 'Get a list of Storages',
				action: 'Get a list of storages',
			},
			{
				name: 'Get Storages Detail',
				value: 'getStoragesDetail',
				description: 'Get a Storages detail',
				action: 'Get a storages detail',
			},
			{
				name: 'Update Storages',
				value: 'updateStorages',
				description: 'Update a Storages',
				action: 'Update storages',
			},
		],
		default: 'getStorageList',
	},
];
export const storagesFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['storage'],
				operation: ['createStorages', 'updateStorages'],
			},
		},
	},
	{
		displayName: 'Parent ID',
		name: 'parent_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['storage'],
				operation: ['createStorages', 'updateStorages'],
			},
		},
	},
	{
		displayName: 'Storages ID',
		name: 'storages_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['storage'],
				operation: ['updateStorages', 'getStoragesDetail'],
			},
		},
	},
];

/* -------------------------------------------------------------------------- */
/*                                Font                                        */
/* -------------------------------------------------------------------------- */
export const fontsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['font'],
			},
		},
		options: [
			{
				name: 'Count Font',
				value: 'countFont',
				description: 'Count number Font',
				action: 'Count number of font',
			},
			{
				name: 'Create Font',
				value: 'createFont',
				description: 'Create a Font',
				action: 'Create font',
			},
			{
				name: 'Delete Font',
				value: 'deleteFont',
				description: 'Delete a font by ID',
				action: 'Delete a font by id',
			},
			{
				name: 'Get a List of Fonts Default',
				value: 'getDefaultFontList',
				description: 'Get a default Font detail',
				action: 'Get a default font detail',
			},
			{
				name: 'Get Font Detail',
				value: 'getFontDetail',
				description: 'Get a Font detail',
				action: 'Get a font detail',
			},
			{
				name: 'Get List of Font',
				value: 'getFontList',
				description: 'Get a list of Font',
				action: 'Get a list of font',
			},
			{
				name: 'Update Font',
				value: 'updateFont',
				description: 'Update a Font',
				action: 'Update font',
			},
		],
		default: 'getFontList',
	},
];
export const fontsFields: INodeProperties[] = [
	{
		displayName: 'Font ID',
		name: 'fontId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['font'],
				operation: ['updateFont', 'getFontDetail', 'deleteFont'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['font'],
				operation: ['createFont', 'updateFont'],
			},
		},
	},
	{
		displayName: 'Alias',
		name: 'alias',
		type: 'string',
		default: 'font example',
		required: true,
		displayOptions: {
			show: {
				resource: ['font'],
				operation: ['createFont', 'updateFont'],
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: 'https://example.com/font-example',
		displayOptions: {
			show: {
				resource: ['font'],
				operation: ['updateFont', 'createFont'],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		default: 'example',
		displayOptions: {
			show: {
				resource: ['font'],
				operation: ['createFont', 'updateFont'],
			},
		},
	},
	{
		displayName: 'Subset',
		name: 'subset',
		type: 'string',
		default: 'font example',
		required: true,
		displayOptions: {
			show: {
				resource: ['font'],
				operation: ['createFont', 'updateFont'],
			},
		},
	},
];
/* -------------------------------------------------------------------------- */
/*                                Webhook                                     */
/* -------------------------------------------------------------------------- */
export const webhooksOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['webhook'],
			},
		},
		options: [
			{
				name: 'Create Webhook',
				value: 'createWebhook',
				description: 'Create a Webhook',
				action: 'Create webhook',
			},
			{
				name: 'Delete Webhook',
				value: 'deleteWebhook',
				description: 'Delete a Webhook by ID',
				action: 'Delete a webhook by id',
			},
			{
				name: 'Get List of Webhook',
				value: 'getWebhookList',
				description: 'Get a list of Webhook',
				action: 'Get a list of webhook',
			},
			{
				name: 'Get Webhook Detail',
				value: 'getWebhookDetail',
				description: 'Get a Webhook detail',
				action: 'Get a webhook detail',
			},
			{
				name: 'Update Webhook',
				value: 'updateWebhook',
				description: 'Update webhook detail',
				action: 'Update webhook',
			},
		],
		default: 'getWebhookList',
	},
];
export const webhooksFields: INodeProperties[] = [
	{
		displayName: 'Webhok ID',
		name: 'webhookId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['updateWebhook', 'getWebhookDetail', 'deleteWebhook'],
			},
		},
	},
	{
		displayName: 'Event',
		name: 'event',
		placeholder: 'Add event',
		type: 'collection',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'DELETE',
						value: 'DELETE',
					},
					{
						name: 'DELETE BATCH',
						value: 'DELETE BATCH',
					},
					{
						name: 'POST',
						value: 'POST',
					},
					{
						name: 'POST BATCH',
						value: 'POST BATCH',
					},
					{
						name: 'PUT',
						value: 'PUT',
					},
					{
						name: 'PUT BATCH',
						value: 'PUT BATCH',
					},
				],
				default: 'POST',
			},
		],
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['createWebhook', 'updateWebhook'],
			},
		},
		description: 'Event of webhook',
	},
	{
		displayName: 'Callback Url',
		name: 'callback_url',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['createWebhook', 'updateWebhook'],
			},
		},
	},
	{
		displayName: 'Topic',
		name: 'topic',
		placeholder: 'Add topic',
		type: 'collection',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Designs',
						value: 'designs',
					},
					{
						name: 'Products',
						value: 'products',
					},
					{
						name: 'Projects',
						value: 'projects',
					},
					{
						name: 'Sides',
						value: 'sides',
					},
					{
						name: 'Template',
						value: 'templates',
					},
				],
				default: 'projects',
			},
		],
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['createWebhook', 'updateWebhook'],
			},
		},
		description: 'Topic of webhook',
	},
];
/* -------------------------------------------------------------------------- */
/*                          Clipart - Storage                                 */
/* -------------------------------------------------------------------------- */
export const clipart_storeageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['clipart_storeage'],
			},
		},
		options: [
			{
				name: 'Create New Clipart - Storage',
				value: 'createClipart_storage',
				description: 'Create a Clipart_storage',
				action: 'Create clipart storage',
			},
			{
				name: 'Delete Clipart_storage',
				value: 'deleteClipart_storage',
				description: 'Delete a Clipart_storage by ID',
				action: 'Delete clipart storage by id',
			},
			{
				name: 'Get List of Clipart by Storage',
				value: 'getClipartByStorage',
				description: 'Get a Clipart List by Storage',
				action: 'Get a clipart list by storage',
			},
			{
				name: 'Get List of Clipart_storage',
				value: 'getClipart_storageList',
				description: 'Get a list of Clipart_storage',
				action: 'Get a list of clipart storage',
			},
			{
				name: 'Get List of Storage by Clipart',
				value: 'getStorageByClipart',
				description: 'Get a Storage List by Clipart',
				action: 'Get a storage list by storage clipart',
			},
		],
		default: 'createClipart_storage',
	},
];
export const clipart_storeageFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['clipart_storeage'],
				operation: ['createClipart_storage'],
			},
		},
	},
	{
		displayName: 'Parent ID',
		name: 'parent_id',
		type: 'string',
		default: 'Storages id',
		displayOptions: {
			show: {
				resource: ['clipart_storeage'],
				operation: ['createClipart_storage'],
			},
		},
	},
	{
		displayName: 'Storages ID',
		name: 'storagesId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['clipart_storeage'],
				operation: ['deleteClipart_storage', 'getClipartByStorage'],
			},
		},
	},
	{
		displayName: 'Clipart ID',
		name: 'clipartId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['clipart_storeage'],
				operation: ['getStorageByClipart'],
			},
		},
	},
];
/* -------------------------------------------------------------------------- */
/*                          Project folder                                    */
/* -------------------------------------------------------------------------- */
export const project_folderOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: ['projectFolder'],
			},
		},
		options: [
			{
				name: 'Create New Project Folder',
				value: 'createProjectFolder',
				description: 'Create a Project folder',
				action: 'Create project folder',
			},
			{
				name: 'Delete Project Folder',
				value: 'deleteProjectFolder',
				description: 'Delete a Project Folder by ID',
				action: 'Delete project folder by id',
			},
			{
				name: 'Get List of Folder by Project',
				value: 'getFoldersByProject',
				description: 'Get a Folder List by Project',
				action: 'Get a folder list by project',
			},
			{
				name: 'Get List of Project by Folder',
				value: 'getProjectsByFolder',
				description: 'Get a Project List by Folder',
				action: 'Get a project list by folder',
			},
			{
				name: 'Get List of Project Folder',
				value: 'getProjectFolderList',
				description: 'Get a list of Project Folder',
				action: 'Get a list of project folder',
			},
		],
		default: 'createProjectFolder',
	},
];
export const project_folderFields: INodeProperties[] = [
	{
		displayName: 'Storage ID',
		name: 'storageId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['projectFolder'],
				operation: ['createProjectFolder','deleteProjectFolder','getProjectsByFolder'],
			},
		},
	},
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['projectFolder'],
				operation: ['createProjectFolder','getFoldersByProject'],
			},
		},
	},
];
