import {z} from 'zod';

export const literatureSchema = z.object({
  title: z.string().min(1, {message: "Title required"}),
  author: z.string().min(1, {message: 'Aurthor are required'}),
  birth_place: z.string().min(1, {message: 'Birth place is required'}),
  content: z.string().min(1, {message: ' Description is required'}),
  // image: z.string().min(1, {message: 'Write Literature is required'}),
});

export type LiteratureSchemaType = z.infer<typeof literatureSchema>;
