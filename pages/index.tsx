import Head from 'next/head'
import Image from 'next/image'

import BG from 'layouts/bg'
import Meta from 'components/meta'

const Home = () => {
  return (
  <div>
    <Meta />
      <main className="home-bg pagefill">
        <h1>ZENERATIONS</h1>
      </main>
  </div>
  );
}

export default Home
