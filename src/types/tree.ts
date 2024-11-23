export interface TreeData {
  id: string;
  species: string;
  commonName: string;
  dbh: number; // Diameter at breast height
  height: number;
  crownSpread: number;
  condition: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Dead';
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  status: 'Healthy' | 'Needs Attention' | 'Critical' | 'Scheduled for Removal';
  maintenance: {
    lastInspection: string;
    nextInspection: string;
    recommendations: string[];
  };
  details: {
    publicRightOfWay: boolean;
    tagNumber?: string;
    hardscapeDamage: boolean;
    notes: string;
  };
  photos: {
    id: string;
    url: string;
    date: string;
    description: string;
  }[];
  workHistory: {
    id: string;
    date: string;
    type: string;
    cost: number;
    description: string;
    crew: string[];
    attachments: string[];
  }[];
}