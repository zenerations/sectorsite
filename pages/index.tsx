import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import BG from 'layouts/bg'
import Meta from 'components/meta'
import PrimaryCard from 'components/primary-card'

const Home = () => {

  useEffect(() => {
    setInterval(() => {
      window.location.assign("https://zenerations.org");
    }, 5000);
  });
  
  return (
    <div>
      <Meta />
      <main className="home-bg bg-fixed bg-center bg-cover pagefill overflow-hidden grid place-content-center text-brand-8 ">
        <div>
          <PrimaryCard />
        </div>
      </main>
    </div>
  );
}

export default Home
