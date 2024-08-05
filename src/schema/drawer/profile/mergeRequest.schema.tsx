export interface MergeRequestInterface {
  Id: string;
  RequestTo: string;
  verifiedStatus: string;
  Date: string;
}

// dummy data generator
function getRandomStatus(): string {
  return Math.random() < 0.5 ? 'verified' : 'pending';
}

function getRandomName(): string {
  const names = [
    'Alice Johnson',
    'Bob Smith',
    'Charlie Brown',
    'Diana Prince',
    'Edward Elric',
    'Fiona Gallagher',
    'George Martin',
    'Helen Mirren',
    'Ian McKellen',
    'Julia Roberts',
  ];
  return names[Math.floor(Math.random() * names.length)];
}

export const dummyMergReqData: MergeRequestInterface[] = [
  {
    Id: '1',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '2',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '3',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '4',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '5',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '6',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '7',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '8',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '9',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
  {
    Id: '10',
    RequestTo: getRandomName(),
    verifiedStatus: getRandomStatus(),
    Date: '20-07-2077',
  },
];
