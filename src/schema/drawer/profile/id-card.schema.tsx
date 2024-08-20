// IdCardSchema.ts
import * as z from 'zod';

export const IdCardZSchema = z.object({
  full_name: z.string().min(1, { message: 'Full Name is required' }),
  birth_date: z.string().min(1, { message: 'Date of Birth is required' }),
  birth_place: z.string().min(1, { message: 'Birth Place is required' }),
  gender: z.enum(['Male', 'Female', 'Others'], {
    errorMap: () => ({ message: 'Gender is required' }),
  }),
  blood_group: z.string().min(1, { message: 'Blood Group is required' }),
  province: z.string().min(1, { message: 'Province is required' }),
  district: z.string().min(1, { message: 'District is required' }),
  local: z.string().min(1, { message: 'Local Level is required' }),
  ward: z.string().min(1, { message: 'Ward No. is required' }),
  contact: z.string().min(10, { message: 'Contact must be at least 10 digits' }),
  org_position: z.string().min(1, { message: "Organizational post required" }),
  profession: z.string().optional(),
  image: z.string()
});

export type IdCardZType = z.infer<typeof IdCardZSchema>;
