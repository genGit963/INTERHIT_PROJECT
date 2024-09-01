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

export const EditProfileZSchema = z.object({
  fullName: z.string(),
  email: z.string(),
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

export type EditProfileZType = z.infer<typeof EditProfileZSchema>;

export const ChangePasswordZSchema = z.object({
  currentPassword: z.string().min(1, {message: 'Full Name are required'}),
  newPassword: z.string().min(1, {message: 'Email is required'}),
  confirmPassword: z.string().min(1, {message: 'Phone is required'}),
});

export type ChangePasswordZType = z.infer<typeof ChangePasswordZSchema>;
