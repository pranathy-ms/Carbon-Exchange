import React, { useState } from 'react';

function FutureReturn() {
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    const dummyPrediction = "$1,200 estimated return";
    setPrediction(dummyPrediction);
  };

  return (
    <div>
      <h2>Future Return Prediction</h2>
      <button onClick={handlePredict}>Predict Return</button>
      {prediction && <p>{prediction}</p>}
    </div>
  );
}

export default FutureReturn;
