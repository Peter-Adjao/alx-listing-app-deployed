# 🏡 alx-listing-app-04

A dynamic property listing web application built using **React**, **Next.js**, and **Expo**, designed to fetch, display, and manage real estate properties, bookings, and reviews through seamless API integration.

---

## 🚀 Project Overview

This project demonstrates the integration of RESTful APIs into a Next.js application to handle property listings, details, bookings, and reviews. All previously hardcoded data has been replaced with dynamic data fetched and submitted via HTTP requests using **Axios**.

---

## 📁 File Structure & Milestones

### 1. Property Listing Page
- **File**: `pages/index.tsx`
- **Functionality**: Fetches all property listings from the API and displays them dynamically.
- **Features**:
  - Handles loading and error states
  - Dynamically renders data using reusable listing components

### 2. Property Detail Page
- **File**: `pages/property/[id].tsx`
- **Functionality**: Loads individual property data using its unique ID from the route.
- **Features**:
  - Fetches data via Axios using `useEffect`
  - Graceful handling of missing or broken API responses
  - Passes data to `PropertyDetail` component for rendering

### 3. Booking Page
- **File**: `pages/booking/index.tsx`
- **Functionality**: Collects and submits booking form data to `/api/bookings`.
- **Features**:
  - Form validation
  - Handles API submission and errors
  - Displays success message on confirmation

### 4. Review Section
- **File**: `components/property/ReviewSection.tsx`
- **Functionality**: Fetches and renders property-specific reviews.
- **Features**:
  - Automatically loads on component mount
  - Displays loading states and error handling
  - Maps dynamic reviews into UI

---

## 🛠️ Tech Stack

- **Next.js** (App Routing, SSR)
- **React** (Hooks, Components)
- **Axios** (HTTP requests)
- **TypeScript** (Strong typing and reliability)
- **Expo/React Native** (Frontend styling and app behavior)

---

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/alx-listing-app-04.git

# Navigate into the project
cd alx-listing-app-04

# Install dependencies
npm install

# Start the development server
npm run dev
