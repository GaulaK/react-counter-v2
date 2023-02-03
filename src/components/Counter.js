import Button from "./Button";

const Counter = ({ counters, setCounters, id }) => {
  //   console.log(counters);
  //   console.log(counters[id]);
  return (
    <>
      <div className="counter">
        <div>
          <div className="box">
            {counters[id] > 0 && (
              <Button
                counters={counters}
                setCounters={setCounters}
                id={id}
                calculate="-"
              />
            )}
          </div>
          <div className="box value">
            <span>{counters[id]}</span>
          </div>
          <div className="box">
            {counters[id] < 10 && (
              <Button
                counters={counters}
                setCounters={setCounters}
                id={id}
                calculate="+"
              />
            )}
          </div>
        </div>

        <button
          className="reset-button"
          onClick={() => {
            const newCounters = [...counters];
            newCounters[id] = 0;
            setCounters(newCounters);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
