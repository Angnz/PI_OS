/*My Code for online shop - To add in functions.php in wordpress*/


function petitaideas_os_css() {
    // Enqueue the CSS file
    wp_enqueue_style('petitaideas_os_style', '/wp-includes/css/custom-css/PetitaideasOS_style.css');
}
add_action('wp_enqueue_scripts', 'petitaideas_os_css');


function petitaideas_os_js() {
    // Check if the current page is the "test" page
    if (is_page('test')) {
        // Enqueue the script only if the current page is "test"
        wp_register_script('mi_script', '/wp-includes/js/custom-scripts/PetitaideasOS_2.js', array('jquery'), '1', true );
        wp_enqueue_script('mi_script');
    }
}
add_action('wp_enqueue_scripts','petitaideas_os_js');


/*My Code for online shop END*/