#!/bin/bash
echo "Building project..."
npm run build

echo "Deploying to AWS S3..."
aws s3 sync build/ s3://your-s3-bucket-name --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete."
