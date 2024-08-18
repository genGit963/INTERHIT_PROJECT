import { z } from 'zod';

// interface
export interface BanshaYogdanInterface {
  image: {
    secure_url: string,
    public_id: string,
  },
  createdBy: {
    id: number,
    name: string,
    phone: string,
  },
  _id: string,
  name: string,
  birthPlace: string,
  description: string,
  status: string,
  type: string,
  district: string,
  createdAt: string,
  updatedAt: string,
  __v: 0
}

// zod schema
export const BanshaYogdanZSchema = z.object({
  name: z.string().min(1, { message: 'Full Name is required' }),
  birthPlace: z.string().min(1, { message: 'Birth Place is required' }),
  type: z.string().min(1, { message: 'Yogdan Type is required' }),
  desc: z.string().min(1, { message: 'Description is required' }),
  // image: z.string()
});

export type BanshaYogdanZType = z.infer<typeof BanshaYogdanZSchema>;

