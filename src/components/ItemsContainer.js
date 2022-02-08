import React, { useState } from 'react';
import { ItemType } from './ItemType.js';

export function ItemsContainer({items, selectedItems, handleSelectedItems}) {
	const typesArr = items.map((item) => item.type);
	// removing duplicates
	const typesSet = new Set(typesArr);
	// turn back to array so we can map
	const types = [...typesSet];

	function removeDuplicatedItems(type) {
		// filtering for type
		const itemsArr = items.filter((item) => item.type === type);
		// moving into an object so I can't have duplicates
		const itemsHash = {};
		itemsArr.map((item) => itemsHash[item.name] = item);
		// itemsHash.Fountain = {name: fountain, type: water, etc...}
		// pushing back into array
		const itemsForType = Object.values(itemsHash);

		return itemsForType;
	}

	const [expanded, setExpanded] = useState(false);

	const handleAccordian = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};


	return (
		<div>
			{
				// passing items for this tab(type)
				types.map((type, index) => {
					return (
						<ItemType 
							type={type} 
							key={index} 
							typeIndex={index} 
							items={removeDuplicatedItems(type)} 
							selectedItems={selectedItems} 
							expanded={expanded} 
							handleAccordian={handleAccordian} 
							handleSelectedItems={handleSelectedItems}
						/>
					)
				})
			}
		</div>
	);
}