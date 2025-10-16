# 3dotpay Backend API Contracts

## Overview
This document outlines the backend API structure for the 3dotpay clone website, detailing data models, API endpoints, and frontend-backend integration strategy.

## Current Mock Data (to be replaced)

### From mockData.js:
1. **navigation** - Static navigation items (will remain frontend-only)
2. **benefits** - Benefit cards with images and descriptions
3. **features** - Feature list with icons and descriptions
4. **cardTypes** - Virtual and physical card information
5. **stats** - Platform statistics (countries, users, volume, support)
6. **faqs** - Frequently asked questions

## MongoDB Models

### 1. Benefit Model
```
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,
  color: String,
  order: Number,
  active: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 2. Feature Model
```
{
  _id: ObjectId,
  icon: String,
  title: String,
  description: String,
  order: Number,
  active: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 3. FAQ Model
```
{
  _id: ObjectId,
  question: String,
  answer: String,
  category: String,
  order: Number,
  active: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 4. Stats Model
```
{
  _id: ObjectId,
  countries: Number,
  users: String,
  transactionVolume: String,
  support: String,
  updatedAt: DateTime
}
```

### 5. Card Model
```
{
  _id: ObjectId,
  name: String (Virtual/Physical),
  description: String,
  features: [String],
  gradient: String,
  active: Boolean,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 6. ContactForm Model (New - for user submissions)
```
{
  _id: ObjectId,
  name: String,
  email: String,
  message: String,
  status: String (pending/responded),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

## API Endpoints

### Benefits API
- `GET /api/benefits` - Get all active benefits (sorted by order)
- `POST /api/benefits` - Create new benefit (admin)
- `PUT /api/benefits/:id` - Update benefit (admin)
- `DELETE /api/benefits/:id` - Delete benefit (admin)

### Features API
- `GET /api/features` - Get all active features (sorted by order)
- `POST /api/features` - Create new feature (admin)
- `PUT /api/features/:id` - Update feature (admin)
- `DELETE /api/features/:id` - Delete feature (admin)

### FAQs API
- `GET /api/faqs` - Get all active FAQs (sorted by order)
- `GET /api/faqs/:id` - Get single FAQ
- `POST /api/faqs` - Create new FAQ (admin)
- `PUT /api/faqs/:id` - Update FAQ (admin)
- `DELETE /api/faqs/:id` - Delete FAQ (admin)

### Stats API
- `GET /api/stats` - Get latest platform statistics
- `PUT /api/stats` - Update statistics (admin)

### Cards API
- `GET /api/cards` - Get all active card types
- `GET /api/cards/:id` - Get single card type
- `POST /api/cards` - Create new card type (admin)
- `PUT /api/cards/:id` - Update card type (admin)
- `DELETE /api/cards/:id` - Delete card type (admin)

### Contact API (New)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)
- `PUT /api/contact/:id` - Update contact status (admin)

## Frontend Integration Plan

### Files to Update:
1. **mockData.js** - Remove or comment out (keep as fallback)
2. **Create new API service files:**
   - `src/services/api.js` - Base API configuration
   - `src/services/benefitsService.js`
   - `src/services/featuresService.js`
   - `src/services/faqService.js`
   - `src/services/statsService.js`
   - `src/services/cardsService.js`
   - `src/services/contactService.js`

3. **Components to Update:**
   - `Benefits.jsx` - Fetch from `/api/benefits`
   - `Features.jsx` - Fetch from `/api/features`
   - `FAQ.jsx` - Fetch from `/api/faqs`
   - `Stats.jsx` - Fetch from `/api/stats`
   - `CardsSection.jsx` - Fetch from `/api/cards`
   - Add ContactForm component (new)

### Integration Strategy:
1. Create API service layer using axios
2. Use React hooks (useState, useEffect) to fetch data
3. Add loading states for better UX
4. Add error handling with user-friendly messages
5. Keep mock data as fallback during development

## Data Migration
After backend is ready, we'll seed the database with initial data from mockData.js using a seed script.

## Error Handling
- 404: Resource not found
- 400: Bad request (validation errors)
- 500: Internal server error
- Return consistent error format: `{ error: string, message: string }`

## Response Format
All successful responses follow:
```
{
  success: true,
  data: <response_data>,
  message?: string
}
```
