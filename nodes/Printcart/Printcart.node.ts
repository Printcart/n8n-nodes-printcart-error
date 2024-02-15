import type { OptionsWithUri } from 'request';

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	accountFields,
	accountOperations,
	productsOperations,
	productFields,
	storesOperations,
	storeFields,
	sideOperations,
	sideFields,
	imageOperations,
	imageFields,
	clipartOperations,
	clipartFields,
	designsOperations,
	designFields,
	projectsOperations,
	projectFields,
	templatesOperations,
	templatesFields,
	storagesOperations,
	storagesFields,
	fontsOperations,
	fontsFields,
	webhooksOperations,
	webhooksFields,
	clipart_storeageOperations,
	clipart_storeageFields,
	project_folderOperations,
	project_folderFields
} from './EntryDescription';

export class Printcart implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Printcart',
		name: 'printcart',
		icon: 'file:printcart.svg',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Prinrcart API',
		defaults: {
			name: 'Printcart',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'printcartTokenApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['token'],
					},
				},
			},
		],
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'API Token',
						value: 'token',
					},
				],
				default: 'token',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				noDataExpression: true,
				type: 'options',
				options: [
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Clipart',
						value: 'clipart',
					},
					{
						name: 'Clipart Storage',
						value: 'clipart_storeage',
					},
					{
						name: 'Design',
						value: 'design',
					},
					{
						name: 'Font',
						value: 'font',
					},
					{
						name: 'Image',
						value: 'image',
					},
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Project Folder',
						value: 'projectFolder',
					},
					{
						name: 'Side',
						value: 'side',
					},
					{
						name: 'Storage',
						value: 'storage',
					},
					{
						name: 'Store',
						value: 'store',
					},
					{
						name: 'Template',
						value: 'template',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
				],
				default: 'account',
			},
			...accountOperations,
			...accountFields,
			...productsOperations,
			...productFields,
			...storesOperations,
			...storeFields,
			...sideOperations,
			...sideFields,
			...imageOperations,
			...imageFields,
			...clipartOperations,
			...clipartFields,
			...designsOperations,
			...designFields,
			...projectsOperations,
			...projectFields,
			...templatesOperations,
		  ...templatesFields,
			...storagesOperations,
			...storagesFields,
			...fontsOperations,
			...fontsFields,
			...webhooksOperations,
			...webhooksFields,
			...clipart_storeageOperations,
			...clipart_storeageFields,
			...project_folderOperations,
			...project_folderFields
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);
		const credentials = await this.getCredentials('printcartTokenApi');
		const sid = credentials.sid;
		const secret = credentials.secret;

		for (let i = 0; i < length; i++) {
			try {
				if (resource === 'account') {
					if (operation === 'createAccount') {
						const name = this.getNodeParameter('name', i) as string;
						const email = this.getNodeParameter('email', i) as string;
						const password = this.getNodeParameter('password', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'POST',
							body: {
								name: name,
								email: email,
								password: password,
							},
							uri: `https://api.printcart.com/v1/account`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getAccountInfo') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://api.printcart.com/v1/account`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'updateAccount') {
						const name = this.getNodeParameter('updateName', i) as string;
						const email = this.getNodeParameter('updateEmail', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'PUT',
							body: {
								name: name,
								email: email,
							},
							uri: `https://api.printcart.com/v1/account`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'deleteStore') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/stores`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'store') {
					if (operation === 'createStore') {
						const name = this.getNodeParameter('name', i) as string;
						const google_font_api = this.getNodeParameter('google_font_api', i) as string;
						const unsplash = this.getNodeParameter('unsplash', i) as string;
						const pixabay = this.getNodeParameter('pixabay', i) as string;
						const pexels = this.getNodeParameter('pexels', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'POST',
							body: {
								store_name: name,
								google_font_api: google_font_api,
								unsplash: unsplash,
								pixabay: pixabay,
								pexels: pexels,
							},
							uri: `https://api.printcart.com/v1/stores`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'getStoreDetail') {
						console.log(sid, secret);
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/stores/store-details`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'renewUnAuthToken') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/stores/token-revoke`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'updateStore') {
						const name = this.getNodeParameter('name', i) as string;
						const google_font_api = this.getNodeParameter('google_font_api', i) as string;
						const unsplash = this.getNodeParameter('unsplash', i) as string;
						const pixabay = this.getNodeParameter('pixabay', i) as string;
						const pexels = this.getNodeParameter('pexels', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'PUT',
							body: {
								store_name: name,
								google_font_api: google_font_api,
								unsplash: unsplash,
								pixabay: pixabay,
								pexels: pexels,
							},
							uri: `https://${sid}:${secret}@api.printcart.com/v1/stores`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'deleteStore') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/stores`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getStore') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://api.printcart.com/v1/stores`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
				}
				if (resource === 'product') {
					if (operation === 'getListOfProduct') {
						const limit = this.getNodeParameter('limitProduct', i) as string;
						const sortBy = (this.getNodeParameter('sortBy', i) as string) || 'default';
						let sort = 'default';
						let status = 'default';
						try {
							sort = this.getNodeParameter('sort.type', i) as string;
						} catch (error) {
							console.log('Sort parameter not found. Using default value.');
						}
						try {
							status = this.getNodeParameter('getByStatus.type', i) as string;
						} catch (error) {
							console.log('Status parameter not found. Using default value.');
						}
						console.log(status);
						let url1 = `https://${sid}:${secret}@api.printcart.com/v1/products?limit=${limit}`;
						if (sort !== 'default') {
							url1 += `&sort=${sort}`;
						}
						if (sortBy !== 'default') {
							url1 += `&sortBy=${sortBy}`;
						}
						if (status !== 'default') {
							url1 += `&status=${status}`;
						}
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: url1,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'createProduct') {
						const productName = this.getNodeParameter('productName', i) as string;
						const dynamic_side = this.getNodeParameter('dynamic_side', i) as string;
						const viewport_width = this.getNodeParameter('viewport_width', i) as string;
						const viewport_height = this.getNodeParameter('viewport_height', i) as string;
						const scale = this.getNodeParameter('scale', i) as string;
						const dpi = this.getNodeParameter('dpi', i) as string;
						const dimension_unit = this.getNodeParameter('viewport_height', i) as string;
						const status = this.getNodeParameter('status', i) as string;
						const allowed_file_types = this.getNodeParameter('allowed_file_types', i) as string;
						const enable_design = this.getNodeParameter('enable_design', i) as string;
						const enable_upload = this.getNodeParameter('enable_upload', i) as string;
						const enable_pod = this.getNodeParameter('enable_pod', i) as string;
						const type_id = this.getNodeParameter('type_id', i) as string;
						const description = this.getNodeParameter('description', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'POST',
							body: {
								name: productName,
								dynamic_side: dynamic_side,
								viewport_width: viewport_width,
								viewport_height: viewport_height,
								scale: scale,
								dpi: dpi,
								dimension_unit: dimension_unit.toLocaleLowerCase,
								status: status.toString,
								allowed_file_types: allowed_file_types,
								enable_design: enable_design,
								enable_upload: enable_upload,
								enable_pod: enable_pod,
								type_id: type_id,
								description: description,
							},
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'createBatchProduct') {
						const productName = this.getNodeParameter('productName', i) as string;
						const dynamic_side = this.getNodeParameter('dynamic_side', i) as string;
						const viewport_width = this.getNodeParameter('viewport_width', i) as string;
						const viewport_height = this.getNodeParameter('viewport_height', i) as string;
						const scale = this.getNodeParameter('scale', i) as string;
						const dpi = this.getNodeParameter('dpi', i) as string;
						const dimension_unit = this.getNodeParameter('viewport_height', i) as string;
						const status = this.getNodeParameter('status', i) as string;
						const allowed_file_types = this.getNodeParameter('allowed_file_types', i) as string;
						const enable_design = this.getNodeParameter('enable_design', i) as string;
						const enable_upload = this.getNodeParameter('enable_upload', i) as string;
						const enable_pod = this.getNodeParameter('enable_pod', i) as string;
						const type_id = this.getNodeParameter('type_id', i) as string;
						const description = this.getNodeParameter('description', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'POST',
							body: {
								name: productName,
								dynamic_side: dynamic_side,
								viewport_width: viewport_width,
								viewport_height: viewport_height,
								scale: scale,
								dpi: dpi,
								dimension_unit: dimension_unit.toLocaleLowerCase,
								status: status.toString,
								allowed_file_types: allowed_file_types,
								enable_design: enable_design,
								enable_upload: enable_upload,
								enable_pod: enable_pod,
								type_id: type_id,
								description: description,
							},
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products/batch`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'getProductDetail') {
						const productId = this.getNodeParameter('productId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products/${productId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateProduct') {
						const productId = this.getNodeParameter('productId', i) as string;
						const productName = this.getNodeParameter('productName', i) as string;
						const dynamic_side = this.getNodeParameter('dynamic_side', i) as string;
						const viewport_width = this.getNodeParameter('viewport_width', i) as string;
						const viewport_height = this.getNodeParameter('viewport_height', i) as string;
						const scale = this.getNodeParameter('scale', i) as string;
						const dpi = this.getNodeParameter('dpi', i) as string;
						const dimension_unit = this.getNodeParameter('viewport_height', i) as string;
						const status = this.getNodeParameter('status', i) as string;
						const allowed_file_types = this.getNodeParameter('allowed_file_types', i) as string;
						const enable_design = this.getNodeParameter('enable_design', i) as string;
						const enable_upload = this.getNodeParameter('enable_upload', i) as string;
						const enable_pod = this.getNodeParameter('enable_pod', i) as string;
						const type_id = this.getNodeParameter('type_id', i) as string;
						const description = this.getNodeParameter('description', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'PUT',
							body: {
								name: productName,
								dynamic_side: dynamic_side,
								viewport_width: viewport_width,
								viewport_height: viewport_height,
								scale: scale,
								dpi: dpi,
								dimension_unit: dimension_unit.toLocaleLowerCase,
								status: status.toString,
								allowed_file_types: allowed_file_types,
								enable_design: enable_design,
								enable_upload: enable_upload,
								enable_pod: enable_pod,
								type_id: type_id,
								description: description,
							},
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products/${productId}`,
							json: true,
						};
						responseData = await this.helpers.requestWithAuthentication.call(
							this,
							'printcartTokenApi',
							options,
						);
						returnData.push(responseData);
					}
					if (operation === 'deleteProduct') {
						const productId = this.getNodeParameter('productId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products/${productId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getListOfSides') {
						const productId = this.getNodeParameter('productId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products/${productId}/sides`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getDesignCount') {
						const productId = this.getNodeParameter('productId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products/${productId}/designs/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getASideCount') {
						const productId = this.getNodeParameter('productId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/products/${productId}/sides/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'side') {
					if (operation === 'createSide') {
						const product_id = this.getNodeParameter('productId', i);
						const name = this.getNodeParameter('name', i);
						const bg_type = this.getNodeParameter('bg_type.type', i) as string;
						const bg_color_value = this.getNodeParameter('bg_color_value', i) as string;
						const scale = this.getNodeParameter('scale', i) as string;
						const width = this.getNodeParameter('width', i) as string;
						const height = this.getNodeParameter('height', i) as string;
						const widthArena = this.getNodeParameter('widthArena', i) as string;
						const heightArena = this.getNodeParameter('heightArena', i) as string;
						const topArena = this.getNodeParameter('height', i) as string;
						const leftArena = this.getNodeParameter('widthArena', i) as string;
						const side_image_id = this.getNodeParameter('side_image_id', i);
						const status = this.getNodeParameter('status.type', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								product_id: product_id,
								name: name,
								bg_type: bg_type,
								bg_color_value: bg_color_value,
								scale: scale,
								side_image_size: {
									width: width,
									height: height,
								},
								design_area: {
									width: widthArena,
									height: heightArena,
									top: topArena,
									left: leftArena,
								},
								side_image_id: side_image_id,
								status: status,
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/sides`,
							json: true,
						};
						if (options.headers && options.headers.body) {
							console.log(JSON.stringify(options.headers.body));
						}
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getListSide') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/sides`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getSideDetail') {
						const sideId = this.getNodeParameter('sideId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/sides/${sideId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateSide') {
						const sideId = this.getNodeParameter('sideId', i) as string;
						const product_id = this.getNodeParameter('productId', i);
						const name = this.getNodeParameter('name', i);
						const bg_type = this.getNodeParameter('bg_type.type', i) as string;
						const bg_color_value = this.getNodeParameter('bg_color_value', i) as string;
						const scale = this.getNodeParameter('scale', i) as string;
						const width = this.getNodeParameter('width', i) as string;
						const height = this.getNodeParameter('height', i) as string;
						const widthArena = this.getNodeParameter('widthArena', i) as string;
						const heightArena = this.getNodeParameter('heightArena', i) as string;
						const topArena = this.getNodeParameter('height', i) as string;
						const leftArena = this.getNodeParameter('widthArena', i) as string;
						const side_image_id = this.getNodeParameter('side_image_id', i);
						const status = this.getNodeParameter('status.type', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								product_id: product_id,
								name: name,
								bg_type: bg_type,
								bg_color_value: bg_color_value,
								scale: scale,
								side_image_size: {
									width: width,
									height: height,
								},
								design_area: {
									width: widthArena,
									height: heightArena,
									top: topArena,
									left: leftArena,
								},
								side_image_id: side_image_id,
								status: status,
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/sides/${sideId}`,
							json: true,
						};
						if (options.headers && options.headers.body) {
							console.log(JSON.stringify(options.headers.body));
						}
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteSide') {
						const sideId = this.getNodeParameter('sideId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/sides/${sideId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'image') {
					if (operation === 'getListImage') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/images`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getImageDetail') {
						const imageId = this.getNodeParameter('imageId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/images/${imageId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteImage') {
						const imageId = this.getNodeParameter('imageId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/images/${imageId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'countImage') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/images/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'clipart') {
					if (operation === 'getClipartList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/cliparts`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getClipartDefaultList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/cliparts/default`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getClipartDetail') {
						const clipartId = this.getNodeParameter('clipartId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/cliparts/${clipartId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteClipart') {
						const clipartId = this.getNodeParameter('clipartId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/cliparts/${clipartId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'countClipart') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/cliparts/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'design') {
					if (operation === 'getDesignList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'countDesign') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getFontsLayer') {
						const designId = this.getNodeParameter('designId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs/${designId}/fonts`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getImageDesign') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs/images`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'createDesign') {
						const side_id = this.getNodeParameter('side_id', i) as string;
						const preview_image_id = this.getNodeParameter('preview_image_id', i) as string;
						const design_image_id = this.getNodeParameter('design_image_id', i) as string;
						const note = this.getNodeParameter('note', i) as string;
						const is_uploader = this.getNodeParameter('is_uploader', i);
						const status = this.getNodeParameter('status.type', i) as string;
						const viewport_width = this.getNodeParameter('viewport_width', i) as string;
						const viewport_height = this.getNodeParameter('viewport_height', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								side_id: side_id,
								preview_image_id: preview_image_id,
								design_image_id: design_image_id,
								note: note,
								is_uploader: is_uploader,
								status: status,
								viewport_width: viewport_width,
								viewport_height: viewport_height,
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateDesign') {
						const designId = this.getNodeParameter('designId', i) as string;
						const side_id = this.getNodeParameter('side_id', i) as string;
						const preview_image_id = this.getNodeParameter('preview_image_id', i) as string;
						const design_image_id = this.getNodeParameter('design_image_id', i) as string;
						const note = this.getNodeParameter('note', i) as string;
						const is_uploader = this.getNodeParameter('is_uploader', i) as string;
						const status = this.getNodeParameter('status.type', i) as string;
						const viewport_width = this.getNodeParameter('viewport_width', i) as string;
						const viewport_height = this.getNodeParameter('viewport_height', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								side_id: side_id,
								preview_image_id: preview_image_id,
								design_image_id: design_image_id,
								note: note,
								is_uploader: is_uploader,
								status: status,
								viewport_width: viewport_width,
								viewport_height: viewport_height,
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs/${designId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getDesignDetail') {
						const designId = this.getNodeParameter('designId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs/${designId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteDesign') {
						const designId = this.getNodeParameter('designId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/designs/${designId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'project') {
					if (operation === 'countProject') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/projects/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getProjectList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/projects`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'createProject') {
						const name = this.getNodeParameter('name', i) as string;
						const status = this.getNodeParameter('status.type', i) as string;
						const note = this.getNodeParameter('note', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body:{
								name: name,
								status: status,
								note: note
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/projects`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteProject') {
						const projectId = this.getNodeParameter('projectId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/projects/${projectId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateProject') {
						const projectId = this.getNodeParameter('projectId', i) as string;
						const name = this.getNodeParameter('name', i) as string;
						const status = this.getNodeParameter('status.type', i) as string;
						const note = this.getNodeParameter('note', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body:{
								name: name,
								status: status,
								note: note
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/projects/${projectId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getProjectDetail') {
						const projectId = this.getNodeParameter('projectId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/projects/${projectId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'template') {
					if (operation === 'getTemplateList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/templates`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteTemplate') {
						const templateId = this.getNodeParameter('templateId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/templates/${templateId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'countTemplate') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/templates/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'createTemplate') {
						const projectId = this.getNodeParameter('projectID', i) as string;
						const sideId = this.getNodeParameter('sideId', i) as string;
						const previewImageId = this.getNodeParameter('preview_image_id', i) as string;
						const templateImageId = this.getNodeParameter('template_image_id', i) as string;
						const note = this.getNodeParameter('note', i) as string;
						const layers = this.getNodeParameter('layer', i) as string;
						const viewportWidth = this.getNodeParameter('viewport_width', i) as string;
						const viewportHeight = this.getNodeParameter('viewport_height', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body:{
								project_id: projectId,
								side_id: sideId,
								preview_image_id: previewImageId,
								template_image_id: templateImageId,
								note: note,
								layers: layers,
								viewport_width: viewportWidth,
								viewport_height: viewportHeight
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/templates`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateTemplate') {
						const templateId = this.getNodeParameter('templateId', i) as string;
						const projectId = this.getNodeParameter('projectID', i) as string;
						const sideId = this.getNodeParameter('sideId', i) as string;
						const previewImageId = this.getNodeParameter('preview_image_id', i) as string;
						const templateImageId = this.getNodeParameter('template_image_id', i) as string;
						const note = this.getNodeParameter('note', i) as string;
						const layers = this.getNodeParameter('layer', i) as string;
						const viewportWidth = this.getNodeParameter('viewport_width', i) as string;
						const viewportHeight = this.getNodeParameter('viewport_height', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body:{
								project_id: projectId,
								side_id: sideId,
								preview_image_id: previewImageId,
								template_image_id: templateImageId,
								note: note,
								layers: layers,
								viewport_width: viewportWidth,
								viewport_height: viewportHeight
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/templates/${templateId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getTemplateDetail') {
						const templateId = this.getNodeParameter('templateId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/templates/${templateId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getFontsByTemplate') {
						const templateId = this.getNodeParameter('templateId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/templates/${templateId}/fonts`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'storage') {
					if (operation === 'createStorages') {
						const name = this.getNodeParameter('name',i) as string;
						const parent_id = this.getNodeParameter('parent_id',i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								name:name,
								parent_id:parent_id,
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/storages`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateStorages') {
						const storagesId = this.getNodeParameter('storages_id', i) as string;
						const name = this.getNodeParameter('name',i) as string;
						const parent_id = this.getNodeParameter('parent_id',i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								name:name,
								parent_id:parent_id,
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/storages/${storagesId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getStorageList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/storages`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getStoragesDetail') {
						const storagesId = this.getNodeParameter('storages_id', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/storages/${storagesId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'countStorages') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/storages/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'font') {
					if (operation === 'createFont') {
						const name = this.getNodeParameter('name',i) as string;
						const alias = this.getNodeParameter('alias',i) as string;
						const url = this.getNodeParameter('url',i) as string;
						const type = this.getNodeParameter('type',i) as string;
						const subset = this.getNodeParameter('subset',i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								name: name,
								alias: alias,
								url: url,
								type: type,
								subset: subset
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/fonts`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateFont') {
						const fontId = this.getNodeParameter('fontId', i) as string;
						const name = this.getNodeParameter('name',i) as string;
						const alias = this.getNodeParameter('alias',i) as string;
						const url = this.getNodeParameter('url',i) as string;
						const type = this.getNodeParameter('type',i) as string;
						const subset = this.getNodeParameter('subset',i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								name: name,
								alias: alias,
								url: url,
								type: type,
								subset: subset
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/fonts/${fontId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getDefaultFontList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/fonts/default`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getFontList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/fonts`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getFontDetail') {
						const fontId = this.getNodeParameter('fontId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/fonts/${fontId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'countFont') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/fonts/count`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteFont') {
						const fontId = this.getNodeParameter('fontId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/fonts/${fontId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'webhook') {
					if (operation === 'createWebhook') {
						const event = this.getNodeParameter('event.type',i) as string;
						const callback_url = this.getNodeParameter('callback_url',i) as string;
						const topic = this.getNodeParameter('topic.type',i) as string;
						console.log(event);
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								event: event,
								callback_url: callback_url,
								topic: topic
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/webhooks`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'updateWebhook') {
						const webhookId = this.getNodeParameter('webhookId', i) as string;
						const event = this.getNodeParameter('event.type',i) as string;
						const callback_url = this.getNodeParameter('callback_url',i) as string;
						const topic = this.getNodeParameter('topic.type',i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body: {
								event: event.toUpperCase,
								callback_url: callback_url,
								topic: topic
							},
							method: 'PUT',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/webhooks/${webhookId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getWebhookList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/webhooks`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getWebhookDetail') {
						const webhookId = this.getNodeParameter('webhookId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/webhooks/${webhookId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteWebhook') {
						const webhookId = this.getNodeParameter('webhookId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/webhooks/${webhookId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'clipart_storeage') {
					if (operation === 'createClipart_storage') {
						const name = this.getNodeParameter('name', i) as string;
						const parent_id = this.getNodeParameter('parent_id', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body:{
								name: name,
								parent_id: parent_id,
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/clipart-storages`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getClipart_storageList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/clipart-storages`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getClipartByStorage') {
						const storagesId = this.getNodeParameter('storagesId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/clipart-storages/${storagesId}/cliparts`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getStorageByClipart') {
						const clipartId = this.getNodeParameter('clipartId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/clipart-storages/${clipartId}/storages`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteClipart_storage') {
						const storagesId = this.getNodeParameter('storagesId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/clipart-storages/${storagesId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
				if (resource === 'projectFolder') {
					if (operation === 'createProjectFolder') {
						const storageId = this.getNodeParameter('storageId', i) as string;
						const projectId = this.getNodeParameter('projectId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							body:{
								category_id: storageId,
								project_id: projectId,
							},
							method: 'POST',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/project-folder`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getProjectFolderList') {
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/project-folder`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getProjectsByFolder') {
						const storageId = this.getNodeParameter('storageId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/project-folder/${storageId}/projects`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'getFoldersByProject') {
						const projectId = this.getNodeParameter('projectId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'GET',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/project-folder/${projectId}/folders`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
					if (operation === 'deleteProjectFolder') {
						const storageId = this.getNodeParameter('storageId', i) as string;
						const options: OptionsWithUri = {
							headers: {
								Accept: 'application/json',
							},
							method: 'DELETE',
							uri: `https://${sid}:${secret}@api.printcart.com/v1/project-folder/${storageId}`,
							json: true,
						};
						responseData = await this.helpers.request.call(this, options);
						returnData.push(responseData);
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionErrorData);
					continue;
				}
				throw error;
			}
		}
		return [this.helpers.returnJsonArray(returnData)];
	}
}

