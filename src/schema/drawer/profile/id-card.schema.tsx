// IdCardSchema.ts
import * as z from 'zod';


const imageFileTypes = [
  'image/jpeg', // JPEG/JPG
  'image/jpg', // JPEG/JPG
  'image/png', // PNG
  // 'image/gif', // GIF
  // 'image/bmp', // BMP
  // 'image/tiff', // TIFF
  // 'image/webp', // WebP
  // 'image/svg+xml', // SVG
  // 'image/x-icon', // ICO
  'image/heic', // HEIC
];

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
  image: z.any().refine(
    (file) => {
      if (!file || typeof file !== 'object') {
        return false;
      }
      return imageFileTypes.includes(file.type);
    },
    {
      message: 'Image must be a valid image file (jpg, jpeg, png, heic)',
    },
  ),
});

export type IdCardZType = z.infer<typeof IdCardZSchema>;
