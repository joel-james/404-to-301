<template>

    <div>
        <nav class="nav-tab-wrapper">
            <a v-for="tab in tabs"
               :key="tab.name"
               class="nav-tab"
               :class="{ 'nav-tab-active': selected.name === tab.name }"
               @click.prevent="selectTab(tab)"
               href="#"
            >
                <span v-if="tab.icon" :class="`dashicons dashicons-${tab.icon}`"></span>
                {{ tab.title }}
            </a>
        </nav>
        <component :is="selected.component"></component>
    </div>

</template>

<script>
	export default {
		name: 'Tabs',

		/**
		 * Get the default set of data for the template.
		 *
		 * @since 4.0.0
		 *
		 * @returns {object}
		 */
		props: {
			current: {
				type: Number,
				required: true,
			},
			tabs: {
				type: Array,
				required: true,
			},
		},

		/**
		 * Get the default set of data for the template.
		 *
		 * @since 4.0.0
		 *
		 * @returns {object}
		 */
		data() {
			return {
                selected: this.current,
			}
		},

		methods: {
			/**
			 * Show an notice message on top of the page.
			 *
			 * Alter messages uses WP's admin notice classes.
			 *
			 * @param {object} tab Tab key to select.
			 *
			 * @since 4.0.0
			 *
			 * @returns {boolean}
			 */
			selectTab( tab ) {
				this.selected = tab
			},
		}
	}
</script>
