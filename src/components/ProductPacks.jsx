import React from 'react';

const ProductPacks = ({ packs }) => {
    if (!packs) return null;

    return (
        <div className="w-full mt-16 animate-fade-in">
            <h3 className="text-brand-navy text-3xl font-bold mb-8 text-center">Planes de Mejora Energética</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {packs.map((pack) => (
                    <div key={pack.id} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col transform hover:-translate-y-1">
                        <div className="mb-6">
                            <h4 className="text-brand-blue font-bold text-xl mb-3">{pack.title}</h4>
                            <p className="text-gray-500 text-sm italic leading-relaxed">{pack.description}</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {pack.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                    <span className="text-brand-cyan mt-0.5 font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-brand-light p-5 rounded-lg mb-6">
                            <div className="text-xs font-bold text-gray-500 uppercase mb-2">Financiamiento</div>
                            <div className="text-brand-navy font-semibold text-sm">{pack.financing}</div>
                        </div>

                        <div className="border-t border-gray-100 pt-6 mt-auto">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Costo Est.</div>
                                <div className="text-sm font-bold text-gray-700">{pack.estimatedCost}</div>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Ahorro Est.</div>
                                <div className="text-sm font-bold text-brand-cyan">{pack.estimatedSavings}</div>
                            </div>
                            <button className="w-full py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-navy transition-colors shadow-md hover:shadow-lg">
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPacks;
