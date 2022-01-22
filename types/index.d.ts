interface experience {
  title: string;
  duration: string;
  image: string;
  points: Array<string>;
}

interface blogpost {
  title: string;
  image: string;
  link: string;
  description: string;
}

export interface configApiResponse {
  name: string;
  contact: {
    linkedin: string;
    twitter: string;
    github: string;
    email: string;
  };
  experience: Array<experience>;
  blogs: Array<blogpost>;
  version: number;
}

export interface IndexPageProps {
  data: configApiResponse;
}
