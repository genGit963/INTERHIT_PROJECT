import {z} from 'zod';

export const EditProfileZSchema = z.object({
  fullName: z.string().min(1, {message: 'Full Name are required'}),
  email: z.string().min(1, {message: 'Email is required'}),
  phone: z.string().min(1, {message: 'Phone is required'}),
});

export type EditProfileZType = z.infer<typeof EditProfileZSchema>;

export const ChangePasswordZSchema = z.object({
  currentPassword: z.string().min(1, {message: 'Full Name are required'}),
  newPassword: z.string().min(1, {message: 'Email is required'}),
  confirmPassword: z.string().min(1, {message: 'Phone is required'}),
});

export type ChangePasswordZType = z.infer<typeof ChangePasswordZSchema>;
