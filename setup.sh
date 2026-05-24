#!/bin/bash

# Portfolio Setup Script
set -e

echo "🚀 Setting up your Jekyll portfolio..."

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby is not installed. Please install Ruby first."
    echo "   Visit: https://www.ruby-lang.org/en/downloads/"
    exit 1
fi

echo "✅ Ruby found: $(ruby --version)"

# Install dependencies
echo "📦 Installing dependencies..."
bundle install

# Build the site
echo "🔨 Building site..."
bundle exec jekyll build

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎉 Next steps:"
echo "   1. Edit _config.yml with your information"
echo "   2. Update about.md with your background"
echo "   3. Replace/update projects in _projects/"
echo "   4. Test locally: bundle exec jekyll serve"
echo "   5. Deploy to GitHub Pages"
echo ""
echo "📖 For details, see README.md"
