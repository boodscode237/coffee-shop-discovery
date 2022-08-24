import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return <Html lang='ru'>
            <Head>
                <link rel="preload" href="/fonts/AlegreyaSc-Bold.ttf" as='font' crossOrigin='anomyous'/>
                <link rel="preload" href="/fonts/AlegreyaSc-ExtraBold.ttf" as='font' crossOrigin='anomyous'/>
                <link rel="preload" href="/fonts/AlegreyaSc-Regular.ttf" as='font' crossOrigin='anomyous'/>
            </Head>
            <body>
                <Main></Main>
                <NextScript />
            </body>
        </Html>
    }
}

export default MyDocument