import Head from "next/head";



const Favicon = () =>{
  return (
    <Head>
      <link
        rel="icon"
        href="https://zenerations.files.wordpress.com/2020/12/aed69ef6-c4ab-469a-a3cb-60d057c58271-1.gif"
      />
    </Head>
  );
};

const Meta = () =>{

  const title = "Zenerations Sectors Project";
  const description = "How does Generation Z envision our world in twenty years? As an emerging age group that is not only purpose-driven and empathetic, but maintains the hope to see young people grow up towards a safer, more inclusive, and equitable future, we prioritize ACTION, WORK, and IMPACT. From here on out, we seek to make that shift.";
  const image = "https://zenerations.files.wordpress.com/2020/12/cropped-aed69ef6-c4ab-469a-a3cb-60d057c58271-2-1.gif?w=1200"
  const url = "https://sectors.zenerations.org";

  return <Head>
    {/* <!-- Primary Meta Tags --> */}
    <title>ZENERATIONS – Generation Z. The voice of the future.</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </Head>
}

export default Meta;
export {Favicon};