#!/bin/bash

# This script updates all SASS files to use @use instead of @import

# Find all SASS files in the project
sass_files=$(find ./src -name "*.scss")

# Loop through each file and update the imports
for file in $sass_files; do
  echo "Processing $file..."
  
  # Check if file has imports to variables and mixins
  if grep -q "@import.*variables" "$file" && grep -q "@import.*mixins" "$file"; then
    # Replace both imports with a single @use statement
    sed -i '' 's/@import.*variables.*;.*@import.*mixins.*;/@use "..\/..\/..\/styles\/abstracts" as *;/g' "$file"
    echo "  - Updated both imports in $file"
  elif grep -q "@import.*variables" "$file"; then
    # Replace just variables import
    sed -i '' 's/@import.*variables.*;/@use "..\/..\/..\/styles\/abstracts" as *;/g' "$file"
    echo "  - Updated variables import in $file"
  elif grep -q "@import.*mixins" "$file"; then
    # Replace just mixins import
    sed -i '' 's/@import.*mixins.*;/@use "..\/..\/..\/styles\/abstracts" as *;/g' "$file"
    echo "  - Updated mixins import in $file"
  fi
  
  # Fix deprecated color functions
  sed -i '' 's/darken(#1a73e8, 10%)/color.scale(#1a73e8, $lightness: -10%)/g' "$file"
  
  echo "  - Done with $file"
done

echo "All SASS files have been updated!" 