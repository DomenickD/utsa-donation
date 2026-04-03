#!/usr/bin/env bash


set -e

echo "==> Checking for Node.js..."
if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js is not installed. Please install it from https://nodejs.org" >&2
  exit 1
fi

echo "==> Installing dependencies..."
npm install

echo "==> Starting UTSA Donation app..."
npm run dev
