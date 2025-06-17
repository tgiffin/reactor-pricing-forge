
# WordPress Integration Guide

This package contains WordPress-compatible versions of your React pricing page.

## Files Included

1. **pricing-page.php** - Complete WordPress page template
2. **pricing-styles.css** - All styling converted from Tailwind CSS
3. **pricing-shortcode.php** - Shortcode version for flexible placement

## Installation Instructions

### Option 1: Page Template (Recommended)
1. Copy `pricing-page.php` to your active theme's directory
2. Copy `pricing-styles.css` to your active theme's directory
3. Create a new page in WordPress admin
4. Select "Pricing Page" as the page template
5. Upload your logo images to the theme's `images/` folder

### Option 2: Shortcode Integration
1. Add the code from `pricing-shortcode.php` to your theme's `functions.php` file
2. Copy `pricing-styles.css` to your active theme's directory
3. Use the shortcode `[reactor_pricing]` in any page or post

## Shortcode Options

You can customize what sections to show:
- `[reactor_pricing]` - Shows all sections
- `[reactor_pricing show_hero="false"]` - Hides hero section
- `[reactor_pricing show_features="false"]` - Hides features section
- `[reactor_pricing show_cta="false"]` - Hides call-to-action section

## Image Setup

Upload these images to your theme's `images/` folder:
- reactor-logo.png (main logo)
- data-monitor-logo.png
- sources-logo.png
- source-links-logo.png
- electron-ai-logo.png
- mappings-logo.png
- expression-library-logo.png
- semantic-layer-logo.png
- mapper-replay-logo.png
- sandbox-logo.png
- destinations-logo.png

## Customization

### Colors
The main brand colors are defined in the CSS:
- Primary Blue: #2462AA
- Secondary Blue: #4D83C1
- Yellow Accent: #FFCC00

### Content
To modify the features content, edit the `$features` array in either:
- `pricing-page.php` (line 75)
- `pricing-shortcode.php` (line 95)

### Styling
All styles are contained in `pricing-styles.css`. The CSS is fully responsive and includes:
- Mobile-first responsive design
- Hover effects and animations
- Gradient backgrounds
- Card layouts with shadows

## WordPress Best Practices

1. **Security**: All content is escaped using `esc_html()`
2. **Performance**: CSS is conditionally loaded only when needed
3. **Responsive**: Mobile-first design with breakpoints at 640px, 768px, and 1024px
4. **SEO**: Proper heading structure and semantic HTML
5. **Accessibility**: Alt text for images and proper ARIA labels

## Compatibility

- WordPress 5.0+
- PHP 7.4+
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive

## Support

If you need to modify the layout or add new features:
1. Edit the PHP files for content changes
2. Edit the CSS file for styling changes
3. Test on mobile devices
4. Clear any caching plugins after changes
