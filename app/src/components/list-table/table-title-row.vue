<template>
	<tr>
		<th class="manage-column column-cb check-column">
			<input @change="selectAll" type="checkbox" value="1" />
		</th>
		<th v-for="(value, key) in columns" :class="sortingClass(key)" :key="key" scope="col">
			<a @click.prevent="updateSorting(key)">
				<span>{{ value.label }}</span>
				<span class="sorting-indicator"></span>
			</a>
		</th>
	</tr>
</template>

<script>
export default {
	name: 'TableTitleRow',

	props: {
		columns: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			sortOrder: 'desc',
			sortKey: null
		}
	},

	methods: {
		/**
		 * Update sorting parameters.
		 *
		 * When sorting key is changed, emit an event.
		 *
		 * @since 4.0.0
		 */
		updateSorting(key) {
			this.sortKey = key

			// Interchange the order.
			if ('desc' === this.sortOrder) {
				this.sortOrder = 'asc'
			} else {
				this.sortOrder = 'desc'
			}

			// Emit order change event.
			this.$emit('changeOrder', {
				order: this.sortOrder,
				key: this.sortKey
			})
		},

		/**
		 * Select all items on the table list.
		 *
		 * @since 4.0.0
		 */
		selectAll(event) {
			// Emit all select event.
			this.$emit('allSelect', {
				checked: event.target.checked
			})
		},

		/**
		 * Get the sorting class based on the params.
		 *
		 * @since 4.0.0
		 *
		 * @returns {object}
		 */
		sortingClass(key) {
			// Check if current key is sorted.
			let sorted = this.sortKey === key

			return {
				column: true, // Default class.
				[key]: true, // Key as class.
				sortable: !sorted, // Check if current key is sortable.
				sorted: sorted, // Check if current key is sorted.
				[this.sortOrder]: true // Sort order class.
			}
		}
	}
}
</script>
