import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultsDashboard from './components/ResultsDashboard';
import { calculateResults } from './utils/calculator';

function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (data) => {
    const calculatedResults = calculateResults(data);
    setResults(calculatedResults);
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-brand-light py-12 px-4 md:px-8 lg:px-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="border border-gray-300 px-2 py-1 rounded">Calculadoras</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Ahorro en aire acondicionado
          </h1>
          <div className="max-w-3xl">
            <h2 className="text-lg font-bold text-brand-navy mb-2">
              Estima tu gasto total anual y cuánto puedes ahorrar con sencillos hábitos
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Esta calculadora toma como referencia el gasto total de un hogar en aire acondicionado
              para estimar cuánto puede ahorrar un consumidor incorporando a su día a día una serie de hábitos al alcance de todos.
            </p>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border-l-4 border-brand-blue p-4 flex items-start gap-4">
            <div className="text-brand-blue text-2xl">♥</div> {/* Placeholder icon */}
            <p className="text-brand-navy text-sm font-medium">
              La medida económica más importante que puede tomar un consumidor es revisar el
              contrato firmado con su proveedor para comprobar que la tarifa contratada es la más
              adecuada para su nivel y hábitos de consumo.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Input Form */}
          <div className="w-full lg:w-1/3">
            <InputForm onSubmit={handleCalculate} />
          </div>

          {/* Right Column: Results */}
          <div className="w-full lg:w-2/3">
            {results ? (
              <ResultsDashboard results={results} onReset={handleReset} />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400 bg-brand-light rounded-2xl p-12 border border-dashed border-gray-300">
                <p>Completa el formulario para ver tu estimación de ahorro.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-brand-navy text-white py-8 px-4 text-center text-sm">
        © 2025 Simulador de Energía Verde. Diseño inspirado en BBVA.
      </footer>
    </div>
  );
}

export default App;
