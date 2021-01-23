import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // eslint-disable-next-line consistent-return
  static async getInitalProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/jsx-props-no-spreading
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <style global jsx>
            {`
      html,
      body,
      
      div#__next
      {
        min-height: 100%;
      }
    `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// import Document from "next/document";
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

// import React from "react";
// import Document, { Head, Main, NextScript } from "next/document";
// // Import styled components ServerStyleSheet
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     // Step 1: Create an instance of ServerStyleSheet
//     const sheet = new ServerStyleSheet();

//     // Step 2: Retrieve styles from components in the page
//     const page = renderPage(App => props =>
//       sheet.collectStyles(<App {...props} />)
//     );

//     // Step 3: Extract the styles as <style> tags
//     const styleTags = sheet.getStyleElement();

//     // Step 4: Pass styleTags as a prop
//     return { ...page, styleTags };
//   }

//   render() {
//     return (
//       <html>
//         <Head>
//           <title>My page</title>
//           {/* Step 5: Output the styles in the head  */}
//           {this.props.styleTags}
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     );
//   }
// }
