import {z} from 'zod';

// interface
export interface BanshaYogdanInterface {
  Id: string;
  Image: string;
  Description: string;
  ContributerName: string;
  ContributionType: string;
}

// zod schema
export const BanshaYogdanZSchema = z.object({
  fullName: z.string().min(1, {message: 'Full Name is required'}),
  birthPlace: z.string().min(1, {message: 'Birth Place is required'}),
  yogdanType: z.string().min(1, {message: 'Yogdan Type is required'}),
  description: z.string().min(1, {message: 'Description is required'}),
});

export type BanshaYogdanZType = z.infer<typeof BanshaYogdanZSchema>;

// dummy Data:
export const banshaYogdanDummyList: BanshaYogdanInterface[] = [
  {
    Id: '1kdjakf33a4a',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'प्राचीन नेपालमा राजनीतिक योगदान एक महत्वपूर्ण भूमिका खेलेको थियो। यस योगदानले नेपाली समाज र संस्कृतिक विकासमा महत्त्वपूर्ण योगदान प्रदान गरेको थियो। प्राचीन कालमा नेपालमा विभिन्न राजा, महाराजा, शाही र राजाको परंपरागत प्रणाली थियो। यी राजाहरूले नेपाली समाजको',
    ContributerName: 'Ramesh Thapa',
    ContributionType: 'Political',
  },
  {
    Id: '2a8kdf9s3l2b',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवामा योगदान पुर्याउने व्यक्तिहरूले हाम्रो समाजलाई परिवर्तन गर्न ठूलो प्रभाव पार्न सक्छन्। सामाजिक सेवाका कार्यहरूले समुदायको भलाइमा महत्वपूर्ण भूमिका खेल्दछ र यसका लागि समर्पित व्यक्तिहरूलाई सम्मानित गर्नुपर्छ।',
    ContributerName: 'Sunita Rathi',
    ContributionType: 'Social',
  },
  {
    Id: '3b1lkj84m5nq',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'नेपालको सांस्कृतिक समृद्धिमा योगदान पुर्याउने कार्यहरूले हाम्रो इतिहासलाई उजागर गर्छ। विभिन्न सांस्कृतिक कार्यक्रम र परियोजनाहरूले समाजमा सकारात्मक परिवर्तन ल्याउँछन् र यसका लागि विशेष योगदान दिने व्यक्तिहरूको मान्यता आवश्यक छ।',
    ContributerName: 'Rajesh Sharma',
    ContributionType: 'Other',
  },
  {
    Id: '4cd2mno95pkj',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवा र विकास कार्यमा संलग्न व्यक्तिहरूले हाम्रो समाजलाई उन्नत बनाउन ठूलो योगदान पुर्याउँछन्। यो योगदान समाजका कमजोर वर्गका लागि महत्वपूर्ण छ र यसका लागि समर्पित व्यक्तिहरूलाई सम्मान गर्नुपर्छ।',
    ContributerName: 'Aarti Joshi',
    ContributionType: 'Social',
  },
  {
    Id: '5de3opq06rks',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक कल्याणका कार्यक्रमहरूमा योगदान दिने व्यक्तिहरूले हाम्रो समाजमा महत्वपूर्ण भुमिका खेल्दछन्। यस योगदानले समुदायको जीवनस्तरमा सुधार ल्याउन मद्दत गर्दछ र यो सम्मानजनक छ।',
    ContributerName: 'Manoj Verma',
    ContributionType: 'Social',
  },
  {
    Id: '6ef4qrs17tlu',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'शिक्षा र सांस्कृतिक विकासका परियोजनामा योगदान गर्ने व्यक्तिहरूले हाम्रो समाजलाई प्रेरित गर्ने काम गर्छन्। यस योगदानले हाम्रो सांस्कृतिक सम्पत्तिको संरक्षण र प्रचारमा महत्त्वपूर्ण भूमिका खेल्दछ।',
    ContributerName: 'Neha Agarwal',
    ContributionType: 'Other',
  },
  {
    Id: '7fg5rst28uvm',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक परिवर्तनका लागि प्रयास गर्ने व्यक्तिहरूले समाजमा सकारात्मक असर पार्न सक्छन्। यसका लागि विशेष योगदान दिने व्यक्तिहरूको सम्मान र मान्यता आवश्यक छ।',
    ContributerName: 'Ravi Kumar',
    ContributionType: 'Social',
  },
  {
    Id: '8gh6stu39vwn',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवा र विकासका लागि समर्पित व्यक्तिहरूले आफ्नो प्रयासबाट समाजमा परिवर्तन ल्याउँछन्। यस योगदानले हाम्रो समुदायको भलाइमा महत्त्वपूर्ण भूमिका खेल्दछ।',
    ContributerName: 'Deepika Rathi',
    ContributionType: 'Social',
  },
  {
    Id: '9hi7uvw40xoy',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'नेपालको सांस्कृतिक इतिहास र परंपरामा योगदान पुर्याउने कार्यहरूले हाम्रो समाजलाई समृद्ध बनाउँछन्। यस योगदानलाई सम्मान गर्न महत्त्वपूर्ण छ।',
    ContributerName: 'Sandeep Mehta',
    ContributionType: 'Other',
  },
  {
    Id: '10ij8wxy51pza',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवामा संलग्न व्यक्तिहरूले हाम्रो समुदायमा महत्वपूर्ण भुमिका खेल्दछन्। यसका लागि विशेष योगदान दिने व्यक्तिहरूको मान्यता गर्न महत्त्वपूर्ण छ।',
    ContributerName: 'Kajal Singh',
    ContributionType: 'Social',
  },
  {
    Id: '11jk9xzy62qrb',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवाका कार्यक्रमहरूमा योगदान दिने व्यक्तिहरूले समाजमा सकारात्मक परिवर्तन ल्याउँछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Amit Desai',
    ContributionType: 'Social',
  },
  {
    Id: '12kl0yzx73src',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक संरक्षण र विकासका कार्यक्रमहरूमा योगदान दिने व्यक्तिहरूको कार्यले हाम्रो समाजलाई समृद्ध बनाउँछ। यस योगदानलाई सम्मान गर्न महत्त्वपूर्ण छ।',
    ContributerName: 'Pooja Joshi',
    ContributionType: 'Other',
  },
  {
    Id: '13lm1zaa84std',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक कल्याणमा योगदान पुर्याउने व्यक्तिहरूले हाम्रो समाजलाई उत्कृष्ट बनाउन मद्दत पुर्याउँछन्। यस योगदानलाई मान्यता दिइनुपर्छ।',
    ContributerName: 'Vinay Kumar',
    ContributionType: 'Social',
  },
  {
    Id: '14mn2abb95uev',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक कार्यक्रम र विकासमा योगदान पुर्याउने व्यक्तिहरूले समाजलाई उन्नति गर्न ठूलो मद्दत पुर्याउँछन्। यस योगदानलाई सम्मान गर्न महत्त्वपूर्ण छ।',
    ContributerName: 'Nisha Verma',
    ContributionType: 'Other',
  },
  {
    Id: '15no3bcc06vfw',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवा र विकासमा योगदान दिने व्यक्तिहरूले हाम्रो समाजमा सकारात्मक असर पार्न सक्छन्। यसका लागि समर्पित व्यक्तिहरूलाई सम्मान गर्न महत्त्वपूर्ण छ।',
    ContributerName: 'Ravi Shah',
    ContributionType: 'Social',
  },
  {
    Id: '16op4cdd17wgx',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक परिवर्तनका लागि योगदान दिने व्यक्तिहरूले हाम्रो समुदायलाई बलियो बनाउँछन्। यसका लागि मान्यता र सम्मान आवश्यक छ।',
    ContributerName: 'Sneha Gupta',
    ContributionType: 'Social',
  },
  {
    Id: '17pq5dee28yhz',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक इतिहासमा योगदान दिने व्यक्तिहरूले हाम्रो समाजलाई समृद्ध बनाउँछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Rajiv Thakur',
    ContributionType: 'Other',
  },
  {
    Id: '18qr6eff39zai',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक कल्याणका कार्यक्रमहरूमा योगदान दिने व्यक्तिहरूले समाजमा परिवर्तन ल्याउँछन्। यसका लागि मान्यता र सम्मान आवश्यक छ।',
    ContributerName: 'Isha Mehta',
    ContributionType: 'Social',
  },
  {
    Id: '19rs7fgg40abj',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक समृद्धिमा योगदान पुर्याउने व्यक्तिहरूले हाम्रो समाजलाई समृद्ध बनाउँछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Karan Joshi',
    ContributionType: 'Other',
  },
  {
    Id: '20st8ghh51bck',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवामा योगदान दिने व्यक्तिहरूले हाम्रो समुदायलाई सकारात्मक परिवर्तन ल्याउँछन्। यसका लागि मान्यता र सम्मान आवश्यक छ।',
    ContributerName: 'Riya Sharma',
    ContributionType: 'Social',
  },
  {
    Id: '21tu9iij62cdl',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक संरक्षण र विकासमा योगदान दिने व्यक्तिहरूले हाम्रो समाजलाई समृद्ध बनाउँछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Vijay Rathi',
    ContributionType: 'Other',
  },
  {
    Id: '22uv0jjk73dem',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक परिवर्तन र कल्याणमा योगदान दिने व्यक्तिहरूले हाम्रो समाजलाई सकारात्मक रूपमा प्रभाव पार्दछन्। यसका लागि सम्मान आवश्यक छ।',
    ContributerName: 'Sonal Agarwal',
    ContributionType: 'Social',
  },
  {
    Id: '23vw1kkm84enf',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक कार्यक्रम र परंपरामा योगदान पुर्याउने व्यक्तिहरूले हाम्रो समाजमा महत्वपूर्ण भूमिका खेल्दछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Amit Sharma',
    ContributionType: 'Other',
  },
  {
    Id: '24wx2lln95fog',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवामा योगदान पुर्याउने व्यक्तिहरूले समाजलाई उत्कृष्ट बनाउन मद्दत पुर्याउँछन्। यसका लागि मान्यता र सम्मान आवश्यक छ।',
    ContributerName: 'Alok Singh',
    ContributionType: 'Social',
  },
  {
    Id: '25xy3mmn06gph',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक समृद्धिमा योगदान पुर्याउने व्यक्तिहरूले हाम्रो समाजलाई समृद्ध बनाउँछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Priti Joshi',
    ContributionType: 'Other',
  },
  {
    Id: '26yz4nno17hqi',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक कल्याणका कार्यक्रमहरूमा योगदान दिने व्यक्तिहरूले समाजमा सकारात्मक परिवर्तन ल्याउँछन्। यसका लागि सम्मान आवश्यक छ।',
    ContributerName: 'Rajeev Kumar',
    ContributionType: 'Social',
  },
  {
    Id: '27za5oop28irj',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक इतिहासमा योगदान दिने व्यक्तिहरूले हाम्रो समाजलाई समृद्ध बनाउँछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Gaurav Thakur',
    ContributionType: 'Other',
  },
  {
    Id: '28ab6ppq39jsr',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक सेवामा संलग्न व्यक्तिहरूले समाजमा महत्वपूर्ण भुमिका खेल्दछन्। यसका लागि मान्यता र सम्मान आवश्यक छ।',
    ContributerName: 'Surbhi Rathi',
    ContributionType: 'Social',
  },
  {
    Id: '29bc7qqr40ktl',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सांस्कृतिक संरक्षण र विकासमा योगदान दिने व्यक्तिहरूले हाम्रो समाजलाई समृद्ध बनाउँछन्। यसका लागि विशेष सम्मान आवश्यक छ।',
    ContributerName: 'Gaurav Sharma',
    ContributionType: 'Other',
  },
  {
    Id: '30cd8rrs51lum',
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFS2QXwVtupNPrX30_0VMpB4n28pDIE3t1Q&s',
    Description:
      'सामाजिक परिवर्तनका लागि योगदान दिने व्यक्तिहरूले समाजमा सकारात्मक असर पार्न सक्छन्। यसका लागि सम्मान आवश्यक छ।',
    ContributerName: 'Neha Joshi',
    ContributionType: 'Social',
  },
];
