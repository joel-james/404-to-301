<template>
	<div class="tablenav-pages">
		<span class="displaying-num">{{ sprintf( $i18n.labels.items, totalItems ) }}</span>
		<span class="pagination-links" v-if="canPaginate">
			<button
				class="tablenav-pages-navspan button"
				aria-hidden="true"
				:disabled="disableFirstPage"
				@click="gotoFirst"
			>«</button>
			<button
				class="tablenav-pages-navspan button"
				aria-hidden="true"
				:disabled="disablePrevPage"
				@click="gotoPrev"
			>‹</button>
			<span class="paging-input" v-if="isTop">
				<label for="current-page-selector" class="screen-reader-text">{{ $i18n.labels.current_page }}</label>
				<input
					@keyup.enter="gotoPage"
					class="current-page"
					min="1"
					:max="totalPages"
					id="current-page-selector"
					type="number"
					:value="page"
					size="1"
				/>
				<span class="tablenav-paging-text">
					{{ $i18n.labels.of }}
					<span class="total-pages">{{ totalPages }}</span>
				</span>
			</span>
			<span class="paging-input" v-else>
				<span class="tablenav-paging-text">
					{{ sprintf( $i18n.labels.page_of, page ) }}
					<span class="total-pages">{{ totalPages }}</span>
				</span>
			</span>
			<button
				class="tablenav-pages-navspan button"
				aria-hidden="true"
				:disabled="disableNextPage"
				@click="gotoNext"
			>›</button>
			<button
				class="tablenav-pages-navspan button"
				aria-hidden="true"
				:disabled="disableLastPage"
				@click="gotoLast"
			>»</button>
		</span>
	</div>
</template>

<script>
export default {
	name: 'Pagination',

	props: {
		totalItems: {
			type: Number,
			required: true
		},
		perPage: {
			type: Number,
			required: true
		},
		page: {
			type: Number,
			required: true
		},
		isTop: {
			type: Boolean,
			default: true
		}
	},

	computed: {
		/**
		 * Get the per page count for pagination.
		 *
		 * @since 4.0.0
		 *
		 * @returns {int}
		 */
		prevPage() {
			if (this.page < 1) {
				return 0
			}

			return this.page - 1
		},

		/**
		 * Get the next page number for pagination.
		 *
		 * @since 4.0.0
		 *
		 * @returns {int}
		 */
		nextPage() {
			return this.page + 1
		},

		/**
		 * Get the total number of pages in pagination.
		 *
		 * @since 4.0.0
		 *
		 * @returns {int}
		 */
		totalPages() {
			return Math.ceil(this.totalItems / this.perPage)
		},

		/**
		 * Check if we need to disable last page.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		disableLastPage() {
			return this.totalPages - this.page <= 1
		},

		/**
		 * Check if we need to disable first page.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		disableFirstPage() {
			return this.page <= 2
		},

		/**
		 * Check if we need to disable next page.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		disableNextPage() {
			return this.totalPages <= this.page
		},

		/**
		 * Check if we need to disable previous page.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		disablePrevPage() {
			return this.page <= 1
		},

		/**
		 * Check if we can show pagination.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		canPaginate() {
			return this.perPage < this.totalItems
		}
	},

	methods: {
		/**
		 * Go to next page of pagination.
		 *
		 * @since 4.0.0
		 */
		gotoNext() {
			this.paginate(this.nextPage)
		},

		/**
		 * Go to previous page of pagination.
		 *
		 * @since 4.0.0
		 */
		gotoPrev() {
			this.paginate(this.prevPage)
		},

		/**
		 * Go to first page of pagination.
		 *
		 * @since 4.0.0
		 */
		gotoFirst() {
			this.paginate(1)
		},

		/**
		 * Go to last page of pagination.
		 *
		 * @since 4.0.0
		 */
		gotoLast() {
			this.paginate(this.totalPages)
		},

		/**
		 * Go to a specific page of pagination.
		 *
		 * @param {object} event Event data.
		 *
		 * @since 4.0.0
		 */
		gotoPage(event) {
			this.paginate(parseInt(event.target.value))
		},

		/**
		 * Perform paginate function and navigate.
		 *
		 * Simply emit the pagination change event to parent.
		 *
		 * @param {int} page Page no. of the target page.
		 *
		 * @since 4.0.0
		 */
		paginate(page) {
			// Can not go to a page grater than total.
			if (page > this.totalPages) {
				page = this.totalPages
			} else if (page < 1) {
				// Can not be negative.
				page = 1
			}

			// Execute pagination event.
			this.$emit('change', {
				page: page
			})
		}
	}
}
</script>
