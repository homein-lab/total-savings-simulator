import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        bill: '',
        location: 'CDMX',
        area: '',
        heaterAc: 'Bomba de Calor',
        heaterWater: 'Gas',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="w-full">
            <h3 className="text-brand-navy font-bold text-lg mb-6">OPCIÓN 1: Tengo mi factura de la luz a mano</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Importe de una factura de verano</label>
                    <div className="relative">
                        <input
                            type="number"
                            name="bill"
                            required
                            value={formData.bill}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-none text-brand-navy focus:outline-none focus:border-brand-cyan transition-colors"
                            placeholder="Importe ($)"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">¿Dónde vives?</label>
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-none text-brand-navy focus:outline-none focus:border-brand-cyan transition-colors appearance-none"
                    >
                        <option value="CDMX">CDMX</option>
                        <option value="Monterrey">Monterrey</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Cancún">Cancún</option>
                        <option value="Mérida">Mérida</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Metros cuadrados de tu vivienda</label>
                    <input
                        type="number"
                        name="area"
                        required
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-none text-brand-navy focus:outline-none focus:border-brand-cyan transition-colors"
                        placeholder="Ej. 80"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Aire Acondicionado</label>
                        <select
                            name="heaterAc"
                            value={formData.heaterAc}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-none text-brand-navy focus:outline-none focus:border-brand-cyan transition-colors appearance-none"
                        >
                            <option value="Bomba de Calor">Inverter</option>
                            <option value="Resistencia Eléctrica">Eléctrico</option>
                            <option value="Bomba de Calor Antigua">Ventana</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Calentador Agua</label>
                        <select
                            name="heaterWater"
                            value={formData.heaterWater}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-none text-brand-navy focus:outline-none focus:border-brand-cyan transition-colors appearance-none"
                        >
                            <option value="Gas">Gas</option>
                            <option value="Eléctrico">Eléctrico</option>
                            <option value="Solar">Solar</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full mt-8 py-4 bg-brand-navy text-white font-bold text-sm tracking-widest uppercase hover:bg-brand-blue transition-colors shadow-lg"
                >
                    Calcular Ahorro
                </button>
            </form>
        </div>
    );
};

export default InputForm;
