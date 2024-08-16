import { z } from 'zod';

export const literatureZSchema = z.object({
  title: z.string().min(1, { message: "Title required" }),
  author: z.string().min(1, { message: 'Aurthor are required' }),
  birth_place: z.string().min(1, { message: 'Birth place is required' }),
  content: z.string().min(1, { message: ' Description is required' }),
  image: z.string(),
});

export type LiteratureZType = z.infer<typeof literatureZSchema>;

//api
export interface LiteratureResInterface {
  author_image: {
    secure_url: string;
    public_id: string;
  },
  createdBy: {
    id: number,
    name: string;
    phone: string;
  },
  updatedBy: {
    id: number,
    name: string;
    phone: string;
  },
  _id: string;
  title: string;
  content: string;
  author: string;
  birth_place: string;
  district: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number
}
