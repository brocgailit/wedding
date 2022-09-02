import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript">
            var sc_project=12790678; 
            var sc_invisible=1; 
            var sc_security="b4adeb23"; 
          </script>
          <script
            type="text/javascript"
            src="https://www.statcounter.com/counter/counter.js"
            async
          ></script>
          <noscript>
            <div class="statcounter">
              <a title="Web Analytics" href="https://statcounter.com/" target="_blank">
                <img class="statcounter" src="https://c.statcounter.com/12790678/0/b4adeb23/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade" />
              </a>
            </div>
          </noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument