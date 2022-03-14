import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class IdGenerator implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Id Generator',
		name: 'idGenerator',
		icon:"file:gep.png",
		group: ['transform'],
		version: 1,
		description: 'Generate ID or Number based on Regex format',
		defaults: {
			name: 'Id Generator',
			color: '#772244',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			// Node properties which the user gets displayed and
			// can change on the node.
			{
				displayName: 'My String',
				name: 'myString',
				type: 'string',
				default: '',
				placeholder: 'Placeholder value',
				description: 'The description text',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		let item: INodeExecutionData;
		let myString: string;

		// Itterates over all input items and add the key "myString" with the
		// value the parameter "myString" resolves to.
		// (This could be a different value for each item in case it contains an expression)
		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			myString = this.getNodeParameter('myString', itemIndex, '') as string;
			item = items[itemIndex];

			item.json.myString = myString;
		}

		return this.prepareOutputData(items);
	}
}