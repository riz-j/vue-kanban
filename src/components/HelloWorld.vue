<template>
	<v-main>
		<v-container class="d-flex" style="gap: 10px">
			<v-card class="kanban-container">
				<p class="text-heading-3 mb-2">Placeholder 1</p>
				<draggable
					v-model="colors"
					group="colors"
					tag="ul"
					animation="200"
					class="sortable-container"
				>
					<template #item="{ element }">
						<v-card class="draggable-card">
							{{ element.color }}
						</v-card>
					</template>
				</draggable>
			</v-card>
			<v-card class="kanban-container">
				<p class="text-heading-3 mb-2">Placeholder 2</p>
				<draggable
					v-model="colors2"
					group="colors"
					tag="ul"
					animation="200"
					class="sortable-container"
				>
					<template #item="{ element }">
						<v-card class="draggable-card">
							{{ element.color }}
						</v-card>
					</template>
				</draggable>
			</v-card>
			<v-card class="kanban-container">
				<p class="text-heading-3 mb-2">Placeholder 3</p>
			</v-card>
		</v-container>
	</v-main>
</template>

<script setup>
import draggable from 'vuedraggable';
import { ref } from 'vue';

const colors = ref([
	{ id: 1, color: 'red' },
	{ id: 2, color: 'green' },
	{ id: 3, color: 'blue' }
]);
const colors2 = ref([
	{ id: 1, color: 'red' },
	{ id: 2, color: 'green' },
	{ id: 3, color: 'blue' }
]);
</script>

<style scoped>
	.kanban-container {
		padding: 10px 7px;
		background-color: #171616;
		min-width: 200px;
	}

	.sortable-container {
		display: flex;
		flex-direction: column;
		gap: 5px;

		background-color: #171616;
		min-width: 200px;
	}

	.draggable-card {
		padding: 10px 10px;
		background-color: #222121;
		font-size: 0.875rem !important;
		cursor: grab;
	}
</style>
