import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';

const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const Classes = lazy(() => import('@/pages/Classes').then((m) => ({ default: m.Classes })));
const Trainers = lazy(() => import('@/pages/Trainers').then((m) => ({ default: m.Trainers })));
const Pricing = lazy(() => import('@/pages/Pricing').then((m) => ({ default: m.Pricing })));
const Blog = lazy(() => import('@/pages/Blog').then((m) => ({ default: m.Blog })));
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-yellow border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
        <Route path="/classes" element={<Suspense fallback={<PageLoader />}><Classes /></Suspense>} />
        <Route path="/trainers" element={<Suspense fallback={<PageLoader />}><Trainers /></Suspense>} />
        <Route path="/pricing" element={<Suspense fallback={<PageLoader />}><Pricing /></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
