import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(faStopwatch);

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <button
          className="add-button"
          onClick={() => {
            if (counters.length < 3) {
              const newCounters = [...counters];
              newCounters.push(0);
              setCounters(newCounters);
            }
            // Else : MAX 3 COUNTERS, Do Nothing
          }}
        >
          Add Counter
        </button>
        <div className="counters">
          {counters.map((counter, index) => {
            return (
              <Counter
                key={index}
                counters={counters}
                setCounters={setCounters}
                id={index}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
