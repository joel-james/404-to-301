<?php

namespace DuckDev\WP404\Views\Admin;

// If this file is called directly, abort.
defined( 'WPINC' ) || die;

use DuckDev\WP404\Helpers;
use DuckDev\WP404\Utils\Abstracts\Base;


/**
 * The page-specific functionality of the plugin.
 *
 * Loading page specific views are handled in this class.
 *
 * @link   https://duckdev.com
 * @since  4.0
 *
 * @author Joel James <me@joelsays.com>
 */
class Pages extends Base {

	/**
	 * View for the error logs page.
	 *
	 * @since  4.0
	 *
	 * @return void
	 */
	public function logs() {
		// Get args for the page.
		$args = array();

		// Error logs page content.
		Helpers\General::view( 'admin/common/header' );
		Helpers\General::view( 'admin/logs', $args );
		Helpers\General::view( 'admin/common/footer' );
	}

	/**
	 * View for the plugin settings page.
	 *
	 * @since  4.0
	 *
	 * @return void
	 */
	public function settings() {
		Helpers\General::view( 'admin/settings' );

		wp_enqueue_script( 'dd404-settings' );
	}
}