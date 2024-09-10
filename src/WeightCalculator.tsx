import { useState } from 'react';

const WeightCalculator = () => {
  const [rawAndrii, setRawAndrii] = useState(0);
  const [rawVita, setRawVita] = useState(0);
  const [readyWeight, setReadyWeight] = useState(0);
  const [andriiWeight, setAndriiWeight] = useState(0);
  const [vitaWeight, setVitaWeight] = useState(0);

  const handleCalculation = () => {
    const totalRawWeight = Number(rawAndrii) + Number(rawVita);

    if (totalRawWeight === 0) {
      setAndriiWeight(0);
      setVitaWeight(0);
      return;
    }

    const calcPercentage = (rawWeight: number) =>
      (rawWeight / totalRawWeight) * 100;

    const calcReadyWeight = (rawWeight: number) =>
      (readyWeight * calcPercentage(rawWeight)) / 100;

    setAndriiWeight(calcReadyWeight(rawAndrii));
    setVitaWeight(calcReadyWeight(rawVita));
  };

  return (
    <div>
        <h1>Weight Calculator</h1>
      <div>
        Сира вага Андрій:
        <input
        //   type="number"
          value={rawAndrii}
          type="text"
          placeholder="0.00"
          onChange={(e) => setRawAndrii(Number(e.target.value))}
        />
      </div>
      <div>
        Сира вага Віта:
        <input
          type="number"
          value={rawVita}
          onChange={(e) => setRawVita(Number(e.target.value))}
        />
      </div>
      <hr />
      <div>
        Готова вага:
        <input
          type="number"
          value={readyWeight}
          onChange={(e) => setReadyWeight(Number(e.target.value))}
        />
      </div>

      <div>Андрій: {andriiWeight.toFixed(2)} гр.</div>
      <div>Віта: {vitaWeight.toFixed(2)} гр.</div>

      <button
        onClick={handleCalculation}
        disabled={!rawAndrii || !rawVita || !readyWeight}
      >
        Порахувати
      </button>
    </div>
  );
};

export default WeightCalculator;
