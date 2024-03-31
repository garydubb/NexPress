import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Preloader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleRouteChange = () => {
          setLoading(true);
      };

      const handleRouteChangeComplete = () => {
          setLoading(false);
      };

      router.events.on('routeChangeStart', handleRouteChange);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);

      return () => {
          router.events.off('routeChangeStart', handleRouteChange);
          router.events.off('routeChangeComplete', handleRouteChangeComplete);
      };
  }, [router.events]);

  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-white bg-opacity-75">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
    </div>
  );
};

export default Preloader;
