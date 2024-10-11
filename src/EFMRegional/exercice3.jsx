import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  poids: '',
  taille: '',
  bmi: null,
  message: '',
  color: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POIDS':
      return { ...state, poids: action.payload };
    case 'SET_TAILLE':
      return { ...state, taille: action.payload };
    case 'CALCUL_BMI':
      const poids = parseFloat(state.poids);
      const taille = parseFloat(state.taille);
      if (!poids || !taille) return state;

      const bmi = (poids * (10000 / (taille * taille))).toFixed(2);
      let message = '';
      let color = '';

      if (bmi < 19) {
        message = 'Sous poids';
        color = 'text-danger'; 
      } else if (bmi >= 19 && bmi <= 25) {
        message = 'Normal';
        color = 'text-success'; 
      } else if (bmi > 25) {
        message = 'Surpoids';
        color = 'text-warning'; 
      }

      return { ...state, bmi, message, color };

    default:
      return state;
  }
};

const CalculBMI = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CALCUL_BMI' });
  };

  return (
    <div className="container mt-5">
      <h2>Body Mass Index</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="poids">Poids en kg</label>
          <input
            type="text"
            className="form-control w-50"
            id="poids"
            value={state.poids}
            onChange={(e) =>
              dispatch({ type: 'SET_POIDS', payload: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="taille">Taille en cm</label>
          <input
            type="text"
            className="form-control w-50"
            id="taille"
            value={state.taille}
            onChange={(e) =>
              dispatch({ type: 'SET_TAILLE', payload: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Calculer
        </button>
      </form>

      {state.bmi && (
        <div className="mt-4">
          <h3>BMI: {state.bmi}</h3>
          <p className={state.color}>{state.message}</p>
        </div>
      )}
    </div>
  );
};

export default CalculBMI;
