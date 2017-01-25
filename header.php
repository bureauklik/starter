<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Starter
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="alternate" hreflang="<?php bloginfo( 'language' ); ?>" href="<?php echo esc_url( home_url() ); ?>" />
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'strt' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding" itemscope itemtype="http://schema.org/Organization">

			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" itemprop="url">
				<?php
				if ( is_front_page() && is_home() ) : ?>
					<h1 class="site-title screen-reader-text" itemprop="name"><?php bloginfo( 'name' ); ?></h1>
				<?php else : ?>
					<span class="site-title screen-reader-text" itemprop="name"><?php bloginfo( 'name' ); ?></span>
				<?php
				endif;
	
				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) : ?>
					<span class="site-description screen-reader-text" itemprop="description"><?php echo $description; /* WPCS: xss ok. */ ?></span>
				<?php
				endif; ?>
				<img width="190" height="48" class="site-logo" itemprop="logo" src="<?php echo get_template_directory_uri() ?>/img/starter-logo.png" alt="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ) ?>" srcset="<?php echo get_template_directory_uri() ?>/img/starter-logo@2x.png 2x">
			</a>

		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><span><?php esc_html_e( 'Menu', 'strt' ); ?></span></button>
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">