#!/bin/bash

# Script to push and deploy the portfolio
# Usage: ./push-and-deploy.sh YOUR_GITHUB_TOKEN

set -e


# Check if token is provided
if [ -z "$1" ]; then
    exit 1
fi

TOKEN=$1

# Set remote URL with token
git remote set-url origin https://justseljan12:${TOKEN}@github.com/justseljan12/Seljan-Bashirli-WebPortfolio-Final.git

# Push to GitHub
git push origin main

# Reset remote URL (remove token for security)
git remote set-url origin https://github.com/justseljan12/Seljan-Bashirli-WebPortfolio-Final.git

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    npm install
fi

# Deploy to GitHub Pages
npm run deploy
