#!/bin/bash

DB_PATH="/usr/local/var/mongodb"

# Create the db path if it doesn't exist
mkdir -p "$DB_PATH"

# Run MongoDB in replica set mode
mongod --dbpath "$DB_PATH" --replSet rs0
