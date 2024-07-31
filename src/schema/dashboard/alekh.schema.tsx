// schemas.ts
import {z} from 'zod';

export const alekhSchema = z.object({
  alekhDetails: z.string().min(1, {message: 'Alekh Details are required'}),
  authorName: z.string().min(1, {message: 'Author Name is required'}),
  //   contributionType: z
  //     .string()
  //     .min(1, {message: 'Contribution Type is required'}),
  writeAlekh: z.string().min(1, {message: 'Write Alekh is required'}),
});

export type AlekhFormDataType = z.infer<typeof alekhSchema>;
