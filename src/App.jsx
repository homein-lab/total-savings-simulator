import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultsDashboard from './components/ResultsDashboard';
import ProductPacks from './components/ProductPacks';
import { calculateResults } from './utils/calculator';

function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (formData) => {
    const calculation = calculateResults(formData);
    setResults(calculation);
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            <span>Simuladores</span>
            <span>/</span>
            <span className="border border-gray-300 px-2 py-1 rounded">Ahorro Total</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Simulador de Ahorro Total
          </h1>
          <div className="max-w-3xl">
            <h2 className="text-lg font-bold text-brand-navy mb-2">
              Optimiza tu consumo de Luz, Agua y Gas en un solo lugar
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sube tus recibos y descubre cuánto puedes ahorrar implementando mejoras eficientes en tu hogar.
              Analizamos tu consumo integral para ofrecerte las mejores recomendaciones.
            </p>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border-l-4 border-brand-blue p-4 flex items-start gap-4">
            <div className="text-brand-blue text-2xl">⚡</div>
            <p className="text-brand-navy text-sm font-medium">
              Identificamos oportunidades de ahorro no solo en aire acondicionado, sino en todos tus servicios básicos.
              Una visión completa te permite priorizar las inversiones con mayor retorno.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Input Form */}
          <div className="lg:col-span-4">
            <InputForm onSubmit={handleCalculate} />
          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-8">
            {results ? (
              <ResultsDashboard results={results} onReset={handleReset} />
            ) : (
              <div className="h-full flex items-center justify-center bg-brand-light rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
                <div>
                  <div className="text-4xl mb-4 text-gray-300">📊</div>
                  <p className="text-gray-500 font-medium">
                    Completa el formulario para ver tu simulación de ahorro energético.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Width Product Packs Section */}
        {results && results.productPacks && (
          <ProductPacks packs={results.productPacks} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12 mt-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm opacity-60">
            © 2025 Homein. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
