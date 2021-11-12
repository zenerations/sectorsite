import { useEffect } from "react";

import ErrorCard from "components/500card";
import Meta from "components/meta";

const ErrorPage = () => {
  useEffect(() => {
    setInterval(() => {
      window.location.assign("/");
    }, 5000);
  });

  return (
    <div>
      <Meta />
      <main className="home-bg bg-fixed bg-center bg-cover pagefill overflow-hidden grid place-content-center text-brand-8 ">
        <div>
          <ErrorCard />
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
