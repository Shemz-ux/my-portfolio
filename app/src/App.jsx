import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar/index';
import Footer from '@/components/Footer/index';
import ScrollToTop from '@/hooks/ScrollToTop';
import { useLenis } from '@/hooks/useLenis';
import LoadScreen from '@/components/LoadScreen/index';
import PageTransition from '@/components/PageTransition/index';

function App() {
  const [loadScreenComplete, setLoadScreenComplete] = useState(false);
  useLenis();

  return (
    <>
      <LoadScreen onComplete={() => setLoadScreenComplete(true)} />
      <div className="min-h-screen flex flex-col bg-[#f3f3f3]">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-20 sm:pt-24">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
