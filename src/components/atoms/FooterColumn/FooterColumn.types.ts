export interface FooterColumnTypes {
  column?: {
    title: {
      label: string;
      link: string;
    };
    elements?: {
      label: string;
      link?: string;
    }[];
  };
  contact?: {
    label: string;
    link?: string;
    phone: string;
    mail: string;
    address: string;
  };
}
