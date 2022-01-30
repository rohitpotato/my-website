interface experience {
  company: string;
  duration: string;
  logo: string;
  list: Array<string>;
  designation: string;
}

export interface blogpost {
  title: string;
  imageLink: string;
  link: string;
  description: string;
}

export interface projects {
  title: string;
  imageLink: string;
  link: string;
  description: string;
}
export interface configApiResponse {
  title: string;
  aboutMe: string;
  preferredTheme: "dark" | "light";
  footerText: string;
  footerEnabled: boolean;
  activeExperienceTab: string | number;
  resumeLink: string;
  spotify: string;
  heroImage: string;
  contact: {
    linkedin: string;
    twitter: string;
    github: string;
    email: string;
    phone: string;
  };
  experience: Array<experience>;
  blogs: Array<blogpost>;
  projects: Array<projects>;
  version: number;
}

export interface IndexPageProps {
  data: configApiResponse;
}
