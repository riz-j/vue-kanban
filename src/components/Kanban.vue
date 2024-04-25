<template>
	<v-main>
		<v-container class="d-flex" style="gap: 10px">
			<draggable
			:list="columns"
			class="d-flex" 
			animation="150"
			handle=".column-heading"
			>
				<template #item="{ element: column, index }">
					<v-card :key="column.id" class="kanban-container">
						<div class="column-heading mb-2 d-flex 
						justify-space-between align-center">
							<input type="text" v-model="column.name">	
							<v-icon 
							size="small" 
							color="red" 
							@click="handleDeleteColumn(column.id)"
							>mdi-delete-outline</v-icon>
						</div>
						<draggable
						:list="column.items"
						:id="column.id"
						item-key="id"
						group="list"
						tag="ul"
						animation="150"
						class="sortable-container"
						chosen-class="chosen"
						ghost-class="ghost"
						handle=".draggable-handle"
						@change="onchange"
						@start="onstart"
						@end="onend"
						@move="onmove"
						@add="onadd"
						@update="onupdate"
						@remove="onremove"
						>
							<template #item="{ element: color, index }">
								<div
								:id="color"
								:index="index" 
								class="draggable-card d-flex justify-space-between 
								align-center v-card v-card--variant-elevated"
								>
									<div class="d-flex align-center">
										<v-icon class="draggable-handle">mdi-drag-vertical</v-icon>
										<input type="text" v-model="column.items[index]">
									</div>
									<span>
										<v-icon size="small" style="opacity: 0.4">mdi-dots-vertical</v-icon>
									</span>
								</div>
							</template>
						</draggable>
						<div
						@click="handleAddItem(column.id)" 
						class="add-new-item d-flex align-center mt-3 mx-1" 
						style="gap: 5px"
						>
							<v-icon size="x-small">mdi-plus-circle-outline</v-icon>
							<p>Add Item</p>
						</div>
					</v-card>
				</template>
			</draggable>
			<v-card 
			@click="handleAddNewColumn" 
			class="add-new-column d-flex align-center" 
			style="gap: 5px"
			>
				<v-icon size="x-small">mdi-plus-circle-outline</v-icon>
				<span class="text-subtitle-2">Add New Column</span>
			</v-card>
		</v-container>
	</v-main>
</template>

<script setup>
import draggable from 'vuedraggable';
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const columns = ref([
	{
		id: 'b8a1d920-35e2-444d-a7f2-be2c064eb31c',
		name: 'First Column',
		items: ['red', 'green', 'blue']
	},
	{
		id: '627a641f-81b9-4835-9072-257267432bd5',
		name: 'Second Column',
		items: ['orange', 'purple', 'cyan']
	}
]);

const allItems = computed(() => columns.value.flatMap(column => column.items));

const onadd = (e) => { 
	console.log("onadd");
	console.log(e.item);
	console.log(`The ${e.item.id} card moved from column ${e.from.id} to column ${e.to.id}`);
}
const onstart = (e) => { console.log("onstart") }
const onend = (e) => { console.log("onend", e.item) }
const onchange = () => { console.log("onchange") }
const onmove = () => { console.log("onmove") }
const onupdate = () => { console.log("onupdate") }
const onremove = () => { console.log("onremove") }

const handleAddNewColumn = () => {
	columns.value = [...columns.value, { id: uuidv4(), name: 'New Column', items: [] }];
}

const handleDeleteColumn = (columnId) => {
	columns.value = columns.value.filter(column => column.id !== columnId);
}

const handleAddItem = (columnId) => {
	const column = columns.value.find(column => column.id === columnId);
	column.items = [...column.items, ''];
}
</script>

<style scoped>
	.column-heading {
		font-size: 15px;
		margin: 0px 5px;
		font-weight: bold;
		cursor: grabbing;
	}

	.kanban-container {
		padding: 10px 7px;
		margin: 0px 5px;
		background-color: #171616;
		min-width: 200px;
		height: fit-content
	}

	.sortable-container {
		display: flex;
		flex-direction: column;
		gap: 5px;

		background-color: #171616;
		min-width: 200px;
	}

	.draggable-handle {
		opacity: 0.3;
		cursor: grabbing;
	}

	.draggable-card {
		padding: 10px 3px;
		background-color: #222121;
		font-size: 0.875rem !important;
		cursor: default;
	}

	.chosen {
		box-shadow: none;
	}

	.ghost {
		background-color: green;
		border: 0;
		border-radius: 0;
		padding: 0;
		height: 4px !important;
		font-size: 1px !important;
	}

	.add-new-column {
		background-color: #171616;
		height: fit-content;
		padding: 7px 10px;
	}

	.add-new-item {
		font-size: 0.84rem !important;
		opacity: 0.8;
		cursor: pointer;
	}
</style>
