import type { GetStaticPropsResult, NextPage } from "next";
import { ThemeProvider } from "../context/ThemeContext";
import Container from "../components/Container";
import { IndexPageProps } from "../types";

const Home: NextPage<IndexPageProps> = (props) => {
  const { data } = props;
  return (
    <ThemeProvider>
      <div>
        <Container />
      </div>
    </ThemeProvider>
  );
};

interface apiResult {
  data?: object;
  revalidate?: number;
  notFound?: boolean;
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<apiResult>
> {
  try {
    const apiUrl: string = process.env.SITE_CONFIG_API || "";
    const res = await fetch(apiUrl);
    const data = await res.json();
    return {
      props: {
        data,
      },
      revalidate: 20,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default Home;
