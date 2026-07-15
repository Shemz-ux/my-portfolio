import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar/index';
import Footer from '@/components/Footer/index';
import ScrollToTop from '@/hooks/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3f3]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
