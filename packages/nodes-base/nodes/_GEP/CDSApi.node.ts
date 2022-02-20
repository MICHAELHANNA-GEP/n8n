import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodeParameters,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';


export class CDSApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CDS API',
		name: 'CDSApi',
		group: ['transform'],
		icon: 'fa:server',
		version: 1,
		description: 'Interact with GEP CDS Apis',
		defaults: {
			name: 'GEP CDS API',
			color: '#772244',
		},
		// credentials:[
		// 	{
		// 		name: "cdsapi",
		// 		required: true
		// 	}
		// ],
		inputs: ['main'],
		outputs: ['main'],
		properties: [
		{
				displayName: 'Endpoint',
				name: 'endpoint',
				typeOptions: {
					loadOptionsMethod: 'getEndpoints',
				},
				options: [],
				type: 'options',
				required: true,
				default: '',
				description: 'CDS Endpoint Name',
			},
		],
	};

	methods = {
		loadOptions: {
			async getEndpoints(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			return [
				{
					name: "Supplier",
					value: "http://api.gep.com/v2/supplier"
				},
				{
					name: "Customer",
					value: "http://api.gep.com/v2/customer"
				},
				{
					name: "Users",
					value: "http://api.gep.com/v2/user"
				},
				{
					name: "XYZ",
					value: "http://api.gep.com/v2/XYZ"
				},
				{
					name: "ABC",
					value: "http://api.gep.com/v2/ABC"
				},
				{
					name: "123",
					value: "http://api.gep.com/v2/123"
				},
			];

				// let data;
				// try {
				// 	// loads first 1000 CDS
				// 	// data = await
				// } catch (error) {
				// 	throw new NodeApiError(this.getNode(), error);
				// }
				// let cds = data.cds.urls;
				// if(!cds){
				// 	return [];
				// }
				// if (!Array.isArray(cds)) {
				// 	// If user has only a single queue no array get returned so we make
				// 	// one manually to be able to process everything identically
				// 	cds = [cds];
				// }
				// return cds.map((cdsUrl: string) => {
				// 	const urlParts = cdsUrl.split('/');
				// 	const name = urlParts[urlParts.length - 1];
				// 	return {
				// 		name,
				// 		value: cdsUrl,
				// 	};
				// });
			}
		}
	}

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return [[]];
	}
}



