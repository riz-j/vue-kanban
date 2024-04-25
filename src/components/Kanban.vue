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
						<div class="column-heading mb-2 d-flex justify-space-between align-center">
							<p>{{ column.name }}</p>
							<v-icon size="small" color="red" @click="handleDeleteColumn(column.id)">mdi-delete-outline</v-icon>
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
										<p>{{ color }}</p>
									</div>
									<span>
										<v-icon size="small" style="opacity: 0.4">mdi-dots-vertical</v-icon>
									</span>
								</div>
							</template>
						</draggable>
					</v-card>
				</template>
			</draggable>
		</v-container>
	</v-main>
</template>

<script setup>
import draggable from 'vuedraggable';
import { ref } from 'vue';
import { computed } from 'vue';

const columns = ref([
	{
		id: 1,
		name: 'First Column',
		items: ['red', 'green', 'blue']
	},
	{
		id: 2,
		name: 'Second Column',
		items: ['orange', 'purple', 'cyan']
	}
])

const allItems = computed(() => columns.value.flatMap(column => column.items))

const onadd = (e) => { 
	console.log("onadd")
	console.log(e.item);
	console.log(`The ${e.item.id} card moved from column ${e.from.id} to column ${e.to.id}`) 
}
const onstart = (e) => { console.log("onstart") }
const onend = (e) => { console.log("onend", e.item) }
const onchange = () => { console.log("onchange") }
const onmove = () => { console.log("onmove") }
const onupdate = () => { console.log("onupdate") }
const onremove = () => { console.log("onremove") }

const handleDeleteColumn = (columnId) => {
	columns.value = columns.value.filter(column => column.id !== columnId);
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
		background-color: darkgreen;
	}
</style>
