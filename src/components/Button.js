const Button = ({ counters, setCounters, id, calculate }) => {
  if (calculate === "-") {
    return (
      <button
        onClick={() => {
          const newCounters = [...counters];
          newCounters[id] -= 1;
          setCounters(newCounters);
        }}
      >
        -
      </button>
    );
  } else if (calculate === "+") {
    return (
      <button
        onClick={() => {
          const newCounters = [...counters];
          newCounters[id] += 1;
          setCounters(newCounters);
        }}
      >
        +
      </button>
    );
  }
};
export default Button;
