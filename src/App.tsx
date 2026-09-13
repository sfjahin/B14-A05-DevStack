
import { Suspense, useState } from 'react';
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
    </>
  )
}

export default App
