// ContributionClaim.ts
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

export const ContributionClaimZSchema = z.object({
  full_name: z.string().min(1, { message: 'Full Name is required' }),
  // address: z.string().min(1, {message: 'Address is required'}),
  // contributionType: z
  //   .string()
  //   .min(1, {message: 'Contribution Type is required'}),
  // modeofPayment: z.string().min(1, {message: 'Mode of Payment is required'}),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required.' })
    .min(10, { message: 'Invalid phone number.' })
    .max(10, { message: 'Invalid phone number.' })
    .trim(),
  amount: z
    .string()
    .min(1, { message: 'Amount is required' })
    .transform((val: string) => Number(val)),
  eventId: z.string().optional(),
  // transactionReceived: z
  //   .string()
  //   .min(1, {message: 'Transaction Received Photo is required'}),
  purpose: z.string().min(1, { message: 'Purpose is required' }),
  receipt_photo: z.any().refine(
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
  contributor_image: z.any().refine(
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

export type ContributionClaimType = z.infer<typeof ContributionClaimZSchema>;
