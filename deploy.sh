#!/bin/bash
set -e

echo "Updating containers..."
docker-compose pull
docker-compose down
docker-compose up -d

echo "Done!"
