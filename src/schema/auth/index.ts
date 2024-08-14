import {z} from 'zod';

// ----------------------- Login Schema -----------------------
export const LoginZSchema = z.object({
  phone: z
    .string()
    .min(1, {message: 'Phone number is required.'})
    .min(10, {message: 'Invalid phone number.'})
    .max(10, {message: 'Invalid phone number.'})
    .trim(),
  password: z.string().min(1, {message: 'Password is required.'}).trim(),
});

export type LoginZType = z.infer<typeof LoginZSchema>;

// ----------------------- Signup Schema -----------------------

// Lookahead assertion to check for at least one digit
const digitRegex = /(?=.*\d)/;

// Lookahead assertion to check for at least one non-word character
const nonWordRegex = /(?=.*\W+)/;

// Negative lookahead assertion to exclude dot or newline immediately following
const excludeDotOrNewlineRegex = /(?![.\n])/;

// Lookahead assertion to check for at least one uppercase letter
const uppercaseRegex = /(?=.*[A-Z])/;

// Lookahead assertion to check for at least one lowercase letter
const lowercaseRegex = /(?=.*[a-z])/;

export const SignupZschema = z
  .object({
    name: z.string().min(1, {message: 'Full Name is required.'}).trim(),
    email: z
      .string()
      .min(1, {message: 'Email is required.'})
      .email({message: 'Must be a valid email.'})
      .trim(),
    phone: z
      .string()
      .min(10, {message: 'Invalid phone nuber.'})
      .max(10, {message: 'Invalid phone number.'})
      .trim(),
    province: z.string().min(1, {message: 'Province is requred.'}).trim(),
    district: z.string().min(1, {message: 'District is requred.'}).trim(),
    referral: z
      .string()
      .min(1, {message: 'Refferal code is requred.'})
      .refine((val) => val === 'METALOGIC9', {
        message: 'Invalid Referral Code.',
      }),
    password: z
      .string()
      .trim()
      .min(8, {message: 'Password must be atleast 8 characters.'})
      .max(20, {message: 'Password must be at most 20 characters.'})
      .refine((val) => digitRegex.test(val), {
        message: 'Password must contains atleast a number.',
      })
      .refine((val) => nonWordRegex.test(val), {
        message:
          "Password must contains at least a special characters. Eg: '!', '@', '#'",
      })
      .refine((val) => uppercaseRegex.test(val), {
        message: 'Password must contains at least a capital letter.',
      })
      .refine((val) => lowercaseRegex.test(val), {
        message: 'Password must contains at least a small letter.',
      })
      .refine((val) => excludeDotOrNewlineRegex.test(val), {
        message: "Password must not contain '.'",
      }),
    confirmPassword: z.string().trim(),
  })
  .superRefine(({password, confirmPassword}, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Confirm password must be same as password.',
        path: ['confirmPassword'],
      });
    }
  });

export type SignupZType = z.infer<typeof SignupZschema>;

// -------------------- Auth response ts ------------------------

export const loginSampleData = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk4NjU5MTQ3MjIiLCJlbWFpbCI6ImJvZ2F0aS5tYWhlc2guMjk5Ljc5Mi40NThAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjM0NjM1ODUsImV4cCI6MTcyMzQ2NzU4NX0.zYFKbEpvU1HHKHw12UeBUHHQbZjuMGHV9dKJXD611Xk',
  user: {
    ascendants: null,
    district: 'धादिङ',
    email: 'bogati.mahesh.299.792.458@gmail.com',
    fulltree: null,
    id: 37,
    imgurl: null,
    merged: false,
    mynode: null,
    name: 'Mahesh Bogati',
    phone: '9865914722',
    province: 'बागमती प्रदेश',
    refreshToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk4NjU5MTQ3MjIiLCJlbWFpbCI6ImJvZ2F0aS5tYWhlc2guMjk5Ljc5Mi40NThAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjM0NjM1ODUsImV4cCI6MTcyNDA2ODM4NX0.J-JHbDxI-4Dx6lkGGT3Sp_FRlQsxTBF9eRxzRlWCoxk',
    role: 'USER',
    topnode: null,
    verified: true,
  },
};

export interface LoginResponeInterface {
  accessToken: string;
  user: {
    ascendants: string | null;
    district: string;
    email: string;
    fulltree: string | null;
    id: number;
    imgurl: string | null;
    merged: false;
    mynode: null;
    name: string;
    phone: string;
    province: string;
    refreshToken: string;
    role: string;
    topnode: string | null;
    verified: boolean;
  };
}

// "name": "John Doe",
// "phone": "1234567890",
// "email": "john.doe@example.com",
// "province": "गण्डकी प्रदेश",
// "district": "District",
// "password": "Password1!",
// "referral": "referral_code"
