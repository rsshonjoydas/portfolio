import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="gradient-color">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
