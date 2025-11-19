import React from 'react';

const ResultsDashboard = ({ results, onReset }) => {
    const { monthlyEmissions, potentialSavings, recommendations } = results;

    // Mock annual values for the UI match
    const annualCost = Math.round(potentialSavings * 12 * 1.5); // Mock cost
    const annualSavings = Math.round(potentialSavings * 12);

    return (
        <div className="w-full animate-fade-in">
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-brand-navy text-white p-8 text-center">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4">SIMULACIÓN GASTO ANUAL</h3>
                    <div className="text-5xl font-light">
                        {annualCost}€
                    </div>
                </div>
                <div className="bg-brand-navy text-white p-8 text-center">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4">SIMULACIÓN AHORRO ANUAL</h3>
                    <div className="text-5xl font-light">
                        {annualSavings}€
                    </div>
                </div>
            </div>

            {/* Recommendations Section */}
            <div className="text-center mb-12">
                <h3 className="text-brand-navy text-xl font-bold mb-2">¿Cuánto puedes ahorrar con estos hábitos?</h3>
                <p className="text-gray-500 text-sm mb-8">Activa y desactiva los hábitos para conocer su impacto sobre tu ahorro</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recommendations.map((rec, index) => (
                        <div key={rec.id} className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 transition-colors relative overflow-hidden">
                                {/* Placeholder for icon/image */}
                                <span className="text-3xl text-brand-blue">
                                    {index === 0 ? '💡' : index === 1 ? '❄️' : '☀️'}
                                </span>
                            </div>
                            <div className="text-3xl font-bold text-brand-navy mb-1">
                                {Math.round(rec.savings)}€
                            </div>
                            <p className="text-gray-600 text-sm max-w-[150px]">{rec.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-brand-navy text-white p-8 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center md:text-left">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1">PUEDES AHORRAR</div>
                    <div className="text-5xl font-bold">
                        {Math.round((annualSavings / annualCost) * 100)}%
                    </div>
                </div>
                <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                <div className="text-sm max-w-md text-center md:text-left">
                    en tu factura si sustituyes los equipos de aire acondicionado por ventiladores y aplicas estos consejos.
                </div>
            </div>

            <div className="mt-8 text-center">
                <button onClick={onReset} className="text-gray-400 text-sm underline hover:text-brand-navy">
                    Volver a calcular
                </button>
            </div>
        </div>
    );
};

export default ResultsDashboard;
