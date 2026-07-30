#!/bin/bash

# Deploy script for The Can Buddy
# This script pulls the latest code, installs dependencies, and builds the frontend

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo -e "${BLUE}📥 Pulling latest code from Git...${NC}"
git pull origin main

echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
npm install

echo -e "${BLUE}🔨 Building frontend...${NC}"
npm run build

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${BLUE}Site should be live at: https://www.thecanbuddy.co${NC}"
