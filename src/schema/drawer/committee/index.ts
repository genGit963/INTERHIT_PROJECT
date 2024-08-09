/*
* contains all the interface and types required for the committees
1. province
2. district
3. central
other
*/

export interface CommitteeMemberInterface {
  Id: string;
  Name: string;
  Phone: string;
  Post: string;
  Image: string;
}

// dummy data for committee members
export const dummydataCommitteMember: CommitteeMemberInterface[] = [
  {
    Id: 'oiajdijajdf323847kdjafa',
    Name: 'Biraj Bhatta',
    Phone: '9867914788',
    Post: 'अध्यक्ष',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: 'klajf83247af4j3kadfj2k9',
    Name: 'Ramesh Shrestha',
    Phone: '9801234567',
    Post: 'उपाध्यक्ष',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: 'jdfas4832kjf3kjdfaa38k3',
    Name: 'Sita Sharma',
    Phone: '9812345678',
    Post: 'महासचिव',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: '43jdfajsldf32jkadf8j3k9',
    Name: 'Gopal Rai',
    Phone: '9823456789',
    Post: 'सचिव',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: '93247jfakjd83kdfjlajsdf',
    Name: 'Nisha Tamang',
    Phone: '9834567890',
    Post: 'कोषाध्यक्ष',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: 'a8932jdkf4j2akjdflk23jf',
    Name: 'Kamal Thapa',
    Phone: '9845678901',
    Post: 'प्रवक्ता',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: '29kfj32jdlfja93kjadf83j',
    Name: 'Manisha Singh',
    Phone: '9856789012',
    Post: 'सदस्य',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: '39482jdfalkj4k2jdf82jkf',
    Name: 'Arjun Basnet',
    Phone: '9867890123',
    Post: 'सदस्य',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: '492jflakjdf83kjdfal8fj3',
    Name: 'Sunita Pokharel',
    Phone: '9878901234',
    Post: 'सदस्य',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
  {
    Id: '894jfkadlf93jkdfal8fjas',
    Name: 'Rajendra Lama',
    Phone: '9889012345',
    Post: 'सदस्य',
    Image:
      'https://www.filmykhabar.com/data/picture/06000600/20120316151955_6277186394af9640ac7cbb984b6a4779@filmykhabar.com.jpg',
  },
];
