import { size, z } from 'zod'
import { formatNumberWithDecimal } from './utils'
import { ca } from 'zod/locales'
// Common
const Price = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      `${field} must have at most two decimal places (e.g., 50.99)`
    )

export const ProductInputSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(1, 'Category is required'),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  brand: z.string().min(1, 'Brand is required'),
  description: z.string().min(1, 'Description is required'),
  isPublished: z.boolean(),
  price: Price('List price'),
  listPrice: Price('List price'),
  countInStock: z.coerce
    .number()
    .int()
    .nonnegative('Count in stock must be a non-negative number'),
  tags: z.array(z.string()).default([]),
  sizes: z.array(z.string()).default([]),
  colors: z.array(z.string()).default([]),
  avgRating: z.coerce
    .number()
    .min(0, 'Average rating must be at least 0')
    .max(5, 'Average rating cannot exceed 5'),
  numReviews: z.coerce
    .number()
    .int()
    .nonnegative('Number of reviews must be a non-negative integer'),
  ratingDistribution: z
    .array(z.object({ rating: z.number(), count: z.number() }))
    .max(5),
  reviews: z.array(z.string()).default([]),
  numSells: z.coerce
    .number()
    .int()
    .nonnegative('Number of sells must be a non-negative integer'),
})
