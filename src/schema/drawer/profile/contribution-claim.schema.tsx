// ContributionClaim.ts
import * as z from 'zod';

export const ContributionClaimZSchema = z.object({
  fullName: z.string().min(1, {message: 'Full Name is required'}),
  address: z.string().min(1, {message: 'Address is required'}),
  contributionType: z
    .string()
    .min(1, {message: 'Contribution Type is required'}),
  modeofPayment: z.string().min(1, {message: 'Mode of Payment is required'}),
  amount: z
    .string()
    .min(1, {message: 'Amount is required'})
    .transform((val: string) => Number(val)),
  transactionReceived: z
    .string()
    .min(1, {message: 'Transaction Received Photo is required'}),
  purpose: z.string().min(1, {message: 'Purpose is required'}),
});

export type ContributionClaimType = z.infer<typeof ContributionClaimZSchema>;
