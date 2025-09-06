# Cheap Coffee ☕ 
### cheap-coffee.com

Save 40-60% on popular coffee chain drinks with smart ordering hacks! This web app reveals money-saving alternatives for popular coffee shop beverages using the latest September 2025 pricing and free customization options.

## Features

- 💰 **Real Savings**: Compare menu prices with hack alternatives
- 🎨 **Free Customizations**: See all available free options (milk alternatives, syrups, toppings)
- 📊 **2025 Pricing**: Updated with latest coffee shop prices
- 🍂 **Seasonal Drinks**: Includes Fall 2025 menu items
- 📱 **Mobile Responsive**: Works on all devices
- 🔍 **Category Filters**: Browse by drink type

## Key Highlights

- **FREE Non-Dairy Milks**: As of November 2024, all oat, almond, soy, and coconut milk are free
- **Smart Substitutions**: Learn how to order similar drinks for less
- **Customization Guide**: Understand pumps, shots, and modifications
- **Roast Options**: Choose between Blonde, Signature, or Decaf espresso

## Deployment

This site is ready for deployment on Cloudflare Pages. See [DEPLOY.md](DEPLOY.md) for detailed instructions.

### Quick Deploy

1. Fork/clone this repository
2. Connect to Cloudflare Pages
3. Deploy with no build command (static site)

## Local Development

```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js
npm run serve
```

Visit `http://localhost:8000`

## Tech Stack

- Pure HTML/CSS/JavaScript (no build required)
- Cloudflare Pages for hosting
- Security headers configured
- Optimized for performance

## Files

- `index.html` - Main application
- `research.md` - Coffee shop menu research data
- `_headers` - Security and caching configuration
- `_redirects` - URL routing rules
- `wrangler.toml` - Cloudflare configuration
- `DEPLOY.md` - Deployment instructions

## Contributing

Feel free to submit issues or pull requests with new drink hacks or pricing updates!

## License

MIT License - Use freely for personal or commercial purposes.