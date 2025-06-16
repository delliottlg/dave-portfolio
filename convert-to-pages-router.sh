#!/bin/bash

# remove app dir from app router
rm -rf src/app

# set up pages structure
mkdir -p src/pages

# create new index file
touch src/pages/index.tsx

echo "✅ App Router removed. Pages Router structure created at src/pages/index.tsx."
