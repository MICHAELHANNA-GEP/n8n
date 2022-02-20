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


export class DomainModel implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Domain Model',
		name: 'domainModel',
		group: ['transform'],
		icon: 'fa:table',
		version: 1,
		description: 'Consume GEP Data Model',
		defaults: {
			name: 'GEP Data Model',
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
		properties: []
	};

	methods = {
		loadOptions: {

		}
	}

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return [[]];
	}
}



