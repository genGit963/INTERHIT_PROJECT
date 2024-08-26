export interface TopContributionInterface {
  _id: string,
  full_name: string,
  phone: string,
  payments: [
    {
      amount: number,
      verified: true,
      receipt: {
        secure_url: string,
        public_id: string,
        _id: string
      },
      purpose: string,
      district: string,
      date: string,
      _id: string
    }
  ],
  total_donation: number
}

