import {z} from 'zod';

export const AlekhZSchema = z.object({
  author: z.string().min(1, {message: 'Author Name is required'}),
  desc: z.string().min(1, {message: 'Alekh Details are required'}),
  body: z.string().min(1, {message: 'Write Alekh is required'}),
  title: z.string().min(1, {message: "Title required"}),
  image: z.string()
});

export type AlekhZType = z.infer<typeof AlekhZSchema>;
