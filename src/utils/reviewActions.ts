// app/utils/reviewActions.ts
'use client'

import { Review } from '@prisma/client'

// ... (keep the existing createReview, updateReview, and deleteReview functions)

export async function getUserReviews(): Promise<Review[]> {
  const response = await fetch('/api/user/reviews')
  if (!response.ok) {
    throw new Error('Failed to fetch user reviews')
  }
  return response.json()
}