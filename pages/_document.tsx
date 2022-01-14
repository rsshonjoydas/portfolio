import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="MERN stack developer looking for a job" />
          <meta name="keywords" content="Full Stack Web Developer, Freelancer ,MERN developer" />
        </Head>
        <body className="gradient-light dark:gradient-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
