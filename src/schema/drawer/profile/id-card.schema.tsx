// IdCardSchema.ts
import * as z from 'zod';

export const IdCardZSchema = z.object({
  fullName: z.string().min(1, {message: 'Full Name is required'}),
  dateOfBirth: z.string().min(1, {message: 'Date of Birth is required'}),
  birthPlace: z.string().min(1, {message: 'Birth Place is required'}),
  gender: z.enum(['Male', 'Female', 'Others'], {
    errorMap: () => ({message: 'Gender is required'}),
  }),
  bloodGroup: z.string().min(1, {message: 'Blood Group is required'}),
  province: z.string().min(1, {message: 'Province is required'}),
  district: z.string().min(1, {message: 'District is required'}),
  localLevel: z.string().min(1, {message: 'Local Level is required'}),
  wardNo: z.string().min(1, {message: 'Ward No. is required'}),
  contact: z.string().min(10, {message: 'Contact must be at least 10 digits'}),
  organizationalPost: z.string().optional(),
});

export type IdCardZType = z.infer<typeof IdCardZSchema>;
