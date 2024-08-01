import {z} from 'zod';

export const literatureSchema = z.object({
  author: z.string().min(1, {message: 'Aurthor are required'}),
  birthPlace: z.string().min(1, {message: 'Birth place is required'}),
  description: z.string().min(1, {message: 'Write Description is required'}),
  writeliterature: z.string().min(1, {message: 'Write Literature is required'}),
});

export type LiteratureSchemaType = z.infer<typeof literatureSchema>;
