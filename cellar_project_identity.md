# Cellar: Project Identity & Design Specification

This document defines the "soul" (philosophy, tone, copy guidelines) and visual identity (design tokens, colors, layout structures) of **Cellar**. It serves as a blueprint for developers or AI agents to build the Cellar mobile application (e.g., using Flutter) to ensure perfect alignment with the landing page.

---

## 1. Brand Philosophy & Core Concept

> **"A calmer way to share what would be wasted."**

Cellar is **not** a marketplace, a gig-economy app, or a commercial platform. It is a quiet, local utility designed to connect neighbors to share surplus food. 

### Core Values:
*   **Respect & Trust**: Hand-offs are simple and human, built on community trust.
*   **Simplicity**: No complex bidding, shopping carts, or transactional mechanics. Just post, chat, and meet.
*   **Grounded Tone**: Visuals and copy should feel warm, respectful, and slightly rustic—avoiding the overly polished, cold, corporate tech aesthetic.
*   **Anti-Waste**: Focus on redirecting good food from landfills to local tables.

---

## 2. Design System & Tokens (Web to Flutter Mapping)

The colors are warm, organic, and earth-toned, using off-whites and forest greens to evoke freshness, harvest, and community.

### Color Palette (Hex & Flutter Map)

| Token Name | Web CSS Value | Flutter `Color` Code | Purpose / Usage |
| :--- | :--- | :--- | :--- |
| `background` | `#fbfaf5` | `Color(0xFFFBFAF5)` | Base background color of the app |
| `foreground` | `#1b1b16` | `Color(0xFF1B1B16)` | Primary text, titles, dark icons |
| `muted` | `#6d6a5f` | `Color(0xFF6D6A5F)` | Subtitles, helper text, inactive states |
| `line` | `#ded8c9` | `Color(0xFFDED8C9)` | Thin borders, separators, subtle lines |
| `surface` | `#fffdf7` | `Color(0xFFFFFDF7)` | Cards, dialog boxes, elevated backgrounds |
| `surface-soft` | `#f3efe3` | `Color(0xFFF3EFE3)` | Input fields, active menu item backgrounds |
| `brand` | `#1f5f2a` | `Color(0xFF1F5F2A)` | Accent color, active states, main buttons |
| `brand-dark` | `#123a1b` | `Color(0xFF123A1B)` | High-contrast call-to-actions, hover states |
| `brand-soft` | `#dfead6` | `Color(0xFFDFEAD6)` | Badge backgrounds, highlights, success banners |
| `clay` | `#a7502f` | `Color(0xFFA7502F)` | Warm accent, warnings, alerts |
| `gold` | `#c99538` | `Color(0xFFC99538)` | Points, ratings, warm highlights |
| `ink-soft` | `#39372f` | `Color(0xFF39372F)` | Text blocks that need to be soft dark |

### Typography Guidelines
*   **Display / Headings**: Use a warm, high-character Serif font (e.g., *Georgia*, *Outfit* or *Playfair Display* styled serifs) with a semi-bold weight (`600` - `700`).
*   **Body / Interface**: Use a clean, highly legible Sans-Serif font (e.g., *Inter*, *Roboto*, or *System Default*) with line height around `1.5` to `1.8` for readability.

### Borders and Radius
*   **Small (`--radius-sm`)**: `8.0` (For buttons, small badges, input fields).
*   **Medium (`--radius-md`)**: `14.0` (For feature cards, image previews).
*   **Large (`--radius-lg`)**: `22.0` - `28.0` (For bottom sheets, main list cards).
*   **Borders**: Keep them thin (`1px` or `1.0` width) using the `line` color (`#DED8C9`) for a clean, editorial look.

---

## 3. Core Mobile App Flows

To build the Cellar Flutter app, the following three core screen flows must be implemented:

### Flow 1: Discover Feed (Find Food Nearby)
*   **Overview**: A clean, chronological list or map view of active food offers in the neighborhood.
*   **Mockup Details**:
    *   Simple image card showing the food item.
    *   Badge: Distance (e.g. `200m away`, `400m away`).
    *   Details: Servings count/left (e.g. `2 portions`, `1 bag left`).
    *   Timestamp (e.g. `10m ago`).
    *   No prices. Everything is free.

### Flow 2: Share / List Food
*   **Overview**: A simple, fast form to list surplus food.
*   **Fields**:
    *   **Photo**: Quick camera snap.
    *   **Title**: What are you sharing? (e.g. "Sarah's Sourdough", "James's Plums").
    *   **Quantity**: Portions or weight.
    *   **Description**: Ingredients, allergy notes, details.
    *   **Pickup Window**: Timeframe when the recipient can collect it.
    *   **Location / Meeting Spot**: Agree on direct pickup or a public spot.

### Flow 3: Connect & Chat
*   **Overview**: A minimal direct messaging system for neighbors to coordinate hand-offs.
*   **Details**:
    *   Instigated when a recipient requests a listing.
    *   Kept clean and private.
    *   Provides quick-actions for "Share agreed spot", "Confirm Handoff", and "Mark as Picked Up".

---

## 4. Copy Writing & Tone Guidelines

Maintain these editorial copy guidelines across the app's UI, alerts, and placeholders:

*   **Positive & Grounded**: Use phrases like *"Pass it on"*, *"Good food belongs on tables"*, and *"Close the loop"*.
*   **Local Focus**: Emphasize *"neighbors"*, *"nearby"*, and *"community"*.
*   **No Commercial Terms**: Avoid words like "Buyer", "Seller", "Price", "Cart", "Checkout", "Transaction", "Deal", or "Store". Instead, use **"Donor"**, **"Recipient"**, **"List"**, **"Share"**, **"Request"**, and **"Handoff"**.

---

## 5. Flutter Theme Template

Here is a starting configuration for a Flutter `ThemeData` based on this specification:

```dart
import 'package:flutter/material.dart';

class CellarTheme {
  static const Color background = Color(0xFFFBFAF5);
  static const Color foreground = Color(0xFF1B1B16);
  static const Color muted = Color(0xFF6D6A5F);
  static const Color line = Color(0xFFDED8C9);
  static const Color surface = Color(0xFFFFFDF7);
  static const Color surfaceSoft = Color(0xFFF3EFE3);
  static const Color brand = Color(0xFF1F5F2A);
  static const Color brandDark = Color(0xFF123A1B);
  static const Color brandSoft = Color(0xFFDFEAD6);
  static const Color clay = Color(0xFFA7502F);
  static const Color gold = Color(0xFFC99538);
  static const Color inkSoft = Color(0xFF39372F);

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      scaffoldBackgroundColor: background,
      colorScheme: const ColorScheme.light(
        primary: brand,
        secondary: brandDark,
        surface: surface,
        onSurface: foreground,
      ),
      dividerColor: line,
      cardTheme: CardTheme(
        color: surface,
        elevation: 0,
        shape: RoundedRectangleBorder(
          side: const BorderSide(color: line, width: 1),
          borderRadius: BorderRadius.circular(14),
        ),
      ),
      buttonTheme: const ButtonThemeData(
        buttonColor: brandDark,
        textTheme: ButtonTextTheme.primary,
      ),
    );
  }
}
```
