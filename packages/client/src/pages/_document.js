import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Symbols } from '../components/Symbols';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />

          <meta property="og:url" content="https://www.karaokenite.co" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Karaoke Nite (Beta)" />
          <meta
            property="og:description"
            content="Karaoke with friends on the web or in VR. Brand new quarantine pastime. Currently in Beta!"
          />
          <meta
            property="og:image"
            content="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ftwitter.png?v=1596924787474"
          />

          <meta
            name="description"
            content="Karaoke with friends & family on the web or in VR. Brand new quarantine pastime. Currently in Beta!"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@karaoke_nite" />
          <meta name="twitter:title" content="Karaoke Nite (Beta)" />
          <meta
            name="twitter:description"
            content="Karaoke with friends & family on the web or in VR. Brand new quarantine pastime. Currently in Beta!"
          />
          <meta
            name="twitter:image"
            content="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Flogo.png?v=1597293918060"
          />
          <meta
            name="twitter:image:alt"
            content="Karaoke with friends & family during quarantine."
          />

          <link
            rel="icon"
            href="https://cdn.glitch.com/b316bbdc-0b0c-4c6d-94fb-fffb37f510a9%2Ftechnology.png?v=1588815892670"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-167427633-1"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Symbols />
        </body>
      </Html>
    );
  }
}
