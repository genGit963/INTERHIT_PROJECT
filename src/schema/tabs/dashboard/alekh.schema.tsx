import {z} from 'zod';

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

export const AlekhZSchema = z.object({
  author: z.string().min(1, {message: 'Author Name is required'}),
  desc: z.string().min(1, {message: 'Alekh Details are required'}),
  body: z.string().min(1, {message: 'Write Alekh is required'}),
  title: z.string().min(1, {message: 'Title required'}),
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

export type AlekhZType = z.infer<typeof AlekhZSchema>;
