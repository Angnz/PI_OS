/*My Code for online shop - To add in functions.php in wordpress*/


function function_css() {
    // Enqueue the CSS file
    wp_enqueue_style('function_css', '/wp-includes/css/custom-css/yourcss.css');
}
add_action('wp_enqueue_scripts', 'petitaideas_os_css');


function function_css() {
    // Check if the current page is the "test" page
    if (is_page('yourpageid')) {
        // Enqueue the script only if the current page is "test"
        wp_register_script('function_css', '/wp-includes/js/custom-scripts/yourjs.js', array('jquery'), '1', true );
        wp_enqueue_script('function_css');
    }
}
add_action('wp_enqueue_scripts','function_css');


/*My Code for online shop END*/
