import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    // const setInitialTheme = `
    //   function getUserPreference() {
    //     if(window.localStorage.getItem('theme')) {
    //       return window.localStorage.getItem('theme')
    //     }
    //     return window.matchMedia('(prefers-color-scheme: dark)').matches
    //       ? 'dark'
    //       : 'light'
    //   }
    //   document.body.dataset.theme = getUserPreference();
    // `;
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600&family=Poppins:wght@100;400;500&display=swap"
            rel="stylesheet"
          />
          <script src="/theme.js" type="text/javascript" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
