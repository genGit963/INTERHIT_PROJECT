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

// zod schema
export const BanshaYogdanZSchema = z.object({
  name: z.string().min(1, { message: 'Full Name is required' }),
  birthPlace: z.string().min(1, { message: 'Birth Place is required' }),
  type: z.string().min(1, { message: 'Yogdan Type is required' }),
  desc: z.string().min(1, { message: 'Description is required' }),
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

export type BanshaYogdanZType = z.infer<typeof BanshaYogdanZSchema>;

