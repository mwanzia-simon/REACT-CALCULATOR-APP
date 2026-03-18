const App = () => {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <button className="btn control">C</button>
        <button className="btn control">DEL</button>
        <button className="btn operator">%</button>
        <button className="btn operator">/</button>
        <button className="btn">7</button>
        <button className="btn">6</button>
        <button className="btn">5</button>
        <button className="btn operator">X</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn operator">+</button>
        <button className="btn zero">0</button>
        <button className="btn">.</button>
        <button className="btn equals">=</button>
      </div>
    </div>
  );
};

export default App;
