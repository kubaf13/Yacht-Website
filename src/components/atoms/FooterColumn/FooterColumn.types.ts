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
}
