<?php

// Direct hit? Rest in peace..
defined('WPINC') || die;

/**
 * Provide a admin header view for the plugin
 *
 * @link   https://duckdev.com
 * @since  4.0
 *
 * @author Joel James <me@joelsays.com>
 */
?>
<div class="wrap">
    <?php if (empty($title)) : ?>
    <h1 class="wp-heading-inline">
        <?php esc_html_e('404 to 301', '404-to-301'); ?>
        <a href="//localhost:3000/development/wordpress/wp_404/wp-admin/post-new.php"
            class="page-title-action">Documentation</a>
    </h1>
    <hr class="wp-header-end">
    <?php endif; ?>
    <?php settings_errors(); // Setting errors. 
    ?>