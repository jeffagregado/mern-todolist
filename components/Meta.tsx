import Head from 'next/head'

interface Props {
  title: string
  keywords: string
  description: string
}

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

// Default Meta

Meta.defaultProps = {
  title: '',
  keywords: '',
  description: '',
}

export default Meta
