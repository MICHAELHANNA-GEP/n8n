import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData, INodeType, INodeTypeDescription, NodeOperationError } from 'n8n-workflow';

import {
	validateJSON,
} from './GenericFunctions';

export class DataValidation implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Data Validation',
		name: 'dataValidation',
		icon:"file:gep.png",
		group: ['transform'],
		version: 1,
		description: 'Validate payload via schema',
		defaults: {
			name: 'Data Validation',
			color: '#772244',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'JSON Location',
				name: 'jschemaLocation',
				type: 'string',
				default: '',
				required: true,
				description: 'JSON Schema',
			},
			{
				displayName: 'JSON Schema',
				name: 'jschema',
				type: 'json',
				typeOptions: {
					 editor: 'json'
				},
				default: '',
				required: true,
				description: 'JSON Schema',
			},
			{
				displayName: 'Payload',
				name: 'payload',
				type: 'json',
				typeOptions: {
					editor: 'json'
			 },
				default: '',
				required: true,
				description: 'The payload',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		let item: INodeExecutionData;
		let jschema: string;
		let payload: string;
		// Itterates over all input items and add the key "myString" with the
		// value the parameter "myString" resolves to.
		// (This could be a different value for each item in case it contains an expression)
		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			jschema = this.getNodeParameter('jschema', itemIndex, '') as string;
			payload = this.getNodeParameter('payload', itemIndex, '') as string;

			if(validateJSON(payload) === undefined)
			{
				throw new NodeOperationError(this.getNode(), 'payload must be a valid JSON');
			}
			if(validateJSON(jschema) === undefined)
			{
				throw new NodeOperationError(this.getNode(), 'Json Schema must be a valid JSON');
			}

			let validate = require('jsonschema').validate;
			let res = 	validate(payload, jschema)

			item = items[itemIndex];
			item.json = res;
		}

		return this.prepareOutputData(items);
	}
}
