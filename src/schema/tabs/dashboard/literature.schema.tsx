import { z } from 'zod';

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

export const literatureZSchema = z.object({
  title: z.string().min(1, { message: 'Title required' }),
  author: z.string().min(1, { message: 'Aurthor are required' }),
  birth_place: z.string().min(1, { message: 'Birth place is required' }),
  content: z.string().min(1, { message: ' Description is required' }),
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

export type LiteratureZType = z.infer<typeof literatureZSchema>;

//api
export interface LiteratureResInterface {
  author_image: {
    secure_url: string;
    public_id: string;
  };
  createdBy: {
    id: number;
    name: string;
    phone: string;
  };
  updatedBy: {
    id: number;
    name: string;
    phone: string;
  };
  _id: string;
  title: string;
  content: string;
  author: string;
  birth_place: string;
  district: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
