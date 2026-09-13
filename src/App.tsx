
import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Technologies from './components/Cards/Technologies';
import Hero from './components/Hero'
import Nav from './components/Nav'
import type { Itechnology } from './types/Itechnology';

const technologyFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const [technologyPromise] = useState(() => technologyFetch());

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologyPromise={technologyPromise} />
      </Suspense>
      <ToastContainer position="top-right" autoClose={2500} />
    </>
  )
}

export default App