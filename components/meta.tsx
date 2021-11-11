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
  const image = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a7c1493-45ea-4a6c-813d-46af6c3481a7/THE_SECTOR_PROJECT.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211111T023656Z&X-Amz-Expires=86400&X-Amz-Signature=d360fdea26f6d4e609f9e59b10e8e3679ed9c9b80a172a90b31ec648aba31e3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22THE%2520SECTOR%2520PROJECT.png%22"
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