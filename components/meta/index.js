import Head from 'next/head';

export default ({ title, description, url, keywords }) => (
  <Head>
    {title && <title>{title}</title>}
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
);
