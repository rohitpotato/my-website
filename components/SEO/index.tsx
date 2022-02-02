import Head from "next/head";
import { useAppContext } from "../../context/AppContext";

const SEO: React.FC = () => {
  const { metaImage } = useAppContext();
  return (
    <Head>
      <meta name="title" content="Rohit Kashyap" />
      <meta
        name="description"
        content="I'm a software dev currently working at Plum solving some interseting problems in insuretech, my weapons of choice is Javscript."
      />

      <meta name="author" content="Rohit Kashyap" />
      <meta name="creator" content="Rohit Kashyap" />
      <meta
        name="description"
        content="I'm a software dev currently working at Plum solving some interseting problems in insuretech, my weapons of choice is Javscript."
      />
      <meta
        name="keywords"
        content="React, Next, nextjs, NextJs, Vercel, Javascript, Rohit Kashyap, rohitpotato, personal site, dev-portfolio, software dev portfolio, portfolio"
      />

      <meta itemProp="name" content="Rohit Kashyap" />
      <meta
        itemProp="description"
        content="I'm a software dev currently working at Plum solving some interseting problems in insuretech, my weapons of choice is Javscript.
"
      />
      <meta itemProp="image" content={metaImage} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://rohitpotato.vercel.app/" />
      <meta property="og:title" content="Rohit Kashyap" />
      <meta
        property="og:description"
        content="I'm a software dev currently working at Plum solving some interseting problems in insuretech, my weapons of choice is Javscript."
      />
      <meta property="og:image" content={metaImage} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://rohitpotato.vercel.app/" />
      <meta property="twitter:title" content="Rohit Kashyap" />
      <meta
        property="twitter:description"
        content="I'm a software dev currently working at Plum solving some interseting problems in insuretech, my weapons of choice is Javscript."
      />
      <meta property="twitter:image" content={metaImage} />

      <link rel="apple-touch-icon" href={metaImage} />
      <link rel="apple-touch-icon" sizes="180x180" href={metaImage} />
      <link rel="icon" type="image/png" sizes="32x32" href={metaImage} />
      <link rel="icon" type="image/png" sizes="16x16" href={metaImage} />
      {/* <!-- SEO META END --> */}
      <title>Rohit Kashyap - theinfamouspotato</title>
    </Head>
  );
};

export default SEO;
