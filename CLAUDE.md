# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cheap Coffee (cheap-coffee.com) is a single-page web application that helps users save money on popular coffee chain drinks by revealing ordering "hacks". The app presents menu drinks alongside cheaper alternatives that taste similar, calculating potential savings of 40-60% per drink.

## Key Architecture

The entire application runs from a single `index.html` file containing:
- Inline CSS styling with a coffee shop-themed color palette (greens, browns, creams)
- JavaScript drink database with 16 popular beverages and their hack alternatives
- Dynamic UI that updates prices based on drink size selection (tall/grande/venti)
- A censoring function that randomly replaces vowels with asterisks in drink names

## Drink Data Structure

Each drink object contains:
- `name`: Display name
- `ingredients`: Size-specific ingredient lists
- `prices`: Original menu prices by size
- `hack`: Alternative ordering method including:
  - `base`: The cheaper base drink to order
  - `basePrices`: Base drink prices by size
  - `additions`: Optional paid additions (e.g., syrups at $0.80)
  - `steps`: Array of ordering instructions

## Research Context

The `research.md` file contains detailed coffee shop menu information (September 2025) including:
- Current seasonal offerings and pricing
- Standard recipe patterns (pump counts, shot numbers)
- Free customization options after the November 2024 policy change
- Size scaling rules and exceptions

## Common Development Tasks

Since this is a static HTML file with no build process:
- **Run locally**: Open `index.html` directly in a browser or use a simple HTTP server like `python3 -m http.server`
- **Test changes**: Refresh the browser after editing
- **Add new drinks**: Update the `drinks` object in the JavaScript section following the existing structure
- **Modify styling**: Edit the inline CSS in the `<style>` tag