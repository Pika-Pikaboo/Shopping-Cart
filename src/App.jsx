import { useState, useContext, createContext } from "react";
import { Main, Footer, Navigation } from "./components";

const CountContext = createContext(0);
const ShowContext = createContext(false);

export function useShowContext() {
  return useContext(ShowContext);
}

export function useCountContext() {
  return useContext(CountContext);
}

function App() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);

  return (
    <section className="container">
      <CountContext.Provider value={{ count, setCount }}>
        <ShowContext.Provider value={{ isShow, setIsShow }}>
          <Navigation />
          <Main />
          <Footer />
        </ShowContext.Provider>
      </CountContext.Provider>
    </section>
  );
}

export default App;
