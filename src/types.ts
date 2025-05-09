export type Skill = {
    name: string;
    level: number;
  };
  
  export type Experience = {
    position: { ru: string; en: string };
    company: { ru: string; en: string };
    period: { ru: string; en: string };
    description: { ru: string; en: string };
  };
  
  export type Project = {
    name: { ru: string; en: string };
    description: { ru: string; en: string };
    link?: string;
    linkPages?: string;
  };
  
  export type Language = {
    name: { ru: string; en: string };
    level: { ru: string; en: string };
  };
  
  export type Certificate = {
    name: { ru: string; en: string };
    issuer: { ru: string; en: string };
    date: string;
  };
  
  export type Education = {
    institution: { ru: string; en: string };
    specialty: { ru: string; en: string };
    period: string;
  };

  