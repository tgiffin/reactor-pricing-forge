
<?php
/**
 * WordPress Shortcode for Pricing Page
 * Add this to your theme's functions.php file
 */

function reactor_pricing_shortcode($atts) {
    // Extract shortcode attributes
    $atts = shortcode_atts(array(
        'show_hero' => 'true',
        'show_features' => 'true',
        'show_cta' => 'true'
    ), $atts);

    // Enqueue styles
    wp_enqueue_style('reactor-pricing-styles', get_template_directory_uri() . '/pricing-styles.css');

    ob_start();
    ?>
    
    <div class="pricing-page-wrapper">
        <?php if ($atts['show_hero'] === 'true'): ?>
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-container">
                <div class="logo-container">
                    <div class="logo-flex">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/reactor-logo.png" 
                             alt="Reactor Logo" 
                             class="logo-image" />
                        <h2 class="logo-title">REACTOR</h2>
                    </div>
                </div>
                
                <h1 class="hero-title">
                    Simple, Transparent Pricing
                    <span class="hero-subtitle">Built to Scale With You</span>
                </h1>
                
                <p class="hero-description">
                    Pay for what you use, not for what you don't. 
                    <span class="hero-description-line">Start with two free Data sources.</span>
                </p>
                
                <div class="hero-buttons">
                    <a href="https://reactordata.com/reactor-free-trial/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="btn-primary">
                        Get Started Free
                        <span class="arrow-icon">→</span>
                    </a>
                    <a href="https://reactordata.com/get-reactor/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="btn-secondary">
                        View Demo
                    </a>
                </div>
            </div>
            
            <div class="hero-decoration-1"></div>
            <div class="hero-decoration-2"></div>
        </section>
        <?php endif; ?>

        <?php if ($atts['show_features'] === 'true'): ?>
        <!-- Platform Features Section -->
        <section class="platform-features-section" id="features">
            <div class="features-container">
                <div class="features-header">
                    <h2 class="features-title">Platform Features</h2>
                    <p class="features-description">
                        Everything you need to build, manage, and scale your data infrastructure
                    </p>
                </div>
                
                <div class="features-grid">
                    <?php echo get_features_html(); ?>
                </div>
                
                <?php if ($atts['show_cta'] === 'true'): ?>
                <!-- Call to Action Section -->
                <div class="cta-section">
                    <div class="cta-container">
                        <h3 class="cta-title">Ready to Transform Your Data Pipeline?</h3>
                        <p class="cta-description">
                            Join thousands of companies already using Reactor Data to power their analytics
                        </p>
                        <div class="cta-buttons">
                            <a href="https://reactordata.com/reactor-free-trial/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="cta-btn-primary">
                                Start Free Trial
                            </a>
                            <a href="https://reactordata.com/get-reactor/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="cta-btn-secondary">
                                Schedule Demo
                            </a>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
            </div>
        </section>
        <?php endif; ?>
    </div>
    
    <?php
    return ob_get_clean();
}

// Register the shortcode
add_shortcode('reactor_pricing', 'reactor_pricing_shortcode');

// Helper function to generate features HTML
function get_features_html() {
    $features = array(
        array(
            'icon' => 'custom-logo',
            'title' => 'Data Monitoring',
            'description' => 'Monitor the health and status of all data source connections in one central location.'
        ),
        array(
            'icon' => 'sources-logo',
            'title' => 'Sources',
            'description' => 'Use a library of 500+ connectors to ingest and integrate your data.'
        ),
        array(
            'icon' => 'source-links-logo',
            'title' => 'Source Links',
            'description' => 'Combine data from multiple sources into a unified structure for analysis.'
        ),
        array(
            'icon' => 'electron-logo',
            'title' => 'Electron AI',
            'description' => 'Built-in AI assistant for managing mappings, pipeline tasks, and data logic using natural language.'
        ),
        array(
            'icon' => 'mappings-logo',
            'title' => 'Mappings',
            'description' => 'Configure and control how your data is transformed and routed to destinations.'
        ),
        array(
            'icon' => 'expression-library-logo',
            'title' => 'Mapping Expression Library',
            'description' => 'Includes functions and helpers for logic, math, structure, text, dates, and statistics.'
        ),
        array(
            'icon' => 'semantic-layer-logo',
            'title' => 'Semantic Layer and Models',
            'description' => 'Build and maintain reusable, consistent data models for business clarity and governance.'
        ),
        array(
            'icon' => 'mapper-replay-logo',
            'title' => 'Mapper Replay',
            'description' => 'Retransform source data using updated mappings without reingesting raw data.'
        ),
        array(
            'icon' => 'sandbox-logo',
            'title' => 'Sandbox Mode',
            'description' => 'Build, test, and validate mapping changes in an isolated environment before deployment.'
        ),
        array(
            'icon' => 'destinations-logo',
            'title' => 'Destinations',
            'description' => 'Output data to Snowflake, BigQuery, Databricks, S3, and Google Cloud Storage.'
        )
    );

    $html = '';
    foreach ($features as $feature) {
        $html .= '<div class="feature-card">';
        $html .= '<div class="feature-card-content">';
        $html .= '<div class="feature-icon-container">';
        $html .= get_feature_icon($feature['icon']);
        $html .= '</div>';
        $html .= '<h3 class="feature-title">' . esc_html($feature['title']) . '</h3>';
        $html .= '</div>';
        $html .= '<p class="feature-description">' . esc_html($feature['description']) . '</p>';
        $html .= '</div>';
    }
    
    return $html;
}

function get_feature_icon($icon_type) {
    $icon_path = get_template_directory_uri() . '/images/';
    
    switch ($icon_type) {
        case 'custom-logo':
            return '<img src="' . $icon_path . 'data-monitor-logo.png" alt="Data Monitor Logo" class="feature-icon" />';
        case 'sources-logo':
            return '<img src="' . $icon_path . 'sources-logo.png" alt="Sources Logo" class="feature-icon" />';
        case 'source-links-logo':
            return '<img src="' . $icon_path . 'source-links-logo.png" alt="Source Links Logo" class="feature-icon" />';
        case 'electron-logo':
            return '<img src="' . $icon_path . 'electron-ai-logo.png" alt="Electron AI Logo" class="feature-icon" />';
        case 'mappings-logo':
            return '<img src="' . $icon_path . 'mappings-logo.png" alt="Mappings Logo" class="feature-icon" />';
        case 'expression-library-logo':
            return '<img src="' . $icon_path . 'expression-library-logo.png" alt="Expression Library Logo" class="feature-icon" />';
        case 'semantic-layer-logo':
            return '<img src="' . $icon_path . 'semantic-layer-logo.png" alt="Semantic Layer Logo" class="feature-icon" />';
        case 'mapper-replay-logo':
            return '<img src="' . $icon_path . 'mapper-replay-logo.png" alt="Mapper Replay Logo" class="feature-icon" />';
        case 'sandbox-logo':
            return '<img src="' . $icon_path . 'sandbox-logo.png" alt="Sandbox Logo" class="feature-icon" />';
        case 'destinations-logo':
            return '<img src="' . $icon_path . 'destinations-logo.png" alt="Destinations Logo" class="feature-icon" />';
        default:
            return '<div class="icon-fallback">🔧</div>';
    }
}
?>
