<?php
/**
 * Allow the static portfolio site to POST to admin-ajax.php for Fluent Forms
 * submissions (action=fluentform_submit) from a different origin.
 *
 * Install as a small "mu-plugin" (preferred — never deactivated by accident):
 *   1. Create the folder wp-content/mu-plugins/ if it doesn't exist.
 *   2. Save this file as wp-content/mu-plugins/fluentform-cors.php
 * Or paste the function + hook below into your active theme's functions.php.
 */

add_action('init', function () {
    if (!defined('DOING_AJAX') || !DOING_AJAX) {
        return;
    }
    if (empty($_REQUEST['action']) || $_REQUEST['action'] !== 'fluentform_submit') {
        return;
    }

    // Replace with your actual static site's origin(s). Add more lines for
    // staging/preview domains if needed. Do NOT use '*' here — Fluent Forms
    // relies on cookies/session in some setups, and '*' blocks that.
    $allowed_origins = [
        'https://your-static-site.com',
        // 'https://staging.your-static-site.com',
    ];

    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

    if (in_array($origin, $allowed_origins, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Allow-Credentials: true');
    }

    // Handle the browser's CORS preflight request.
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        status_header(200);
        exit;
    }
});
