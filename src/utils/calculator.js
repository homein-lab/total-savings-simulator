// Mock data for emission factors (kg CO2 per kWh) based on location in Mexico
const EMISSION_FACTORS = {
    "CDMX": 0.45,
    "Monterrey": 0.55, // More industrial/coal
    "Guadalajara": 0.40,
    "Cancún": 0.60, // Often diesel/oil based in islands/peninsulas
    "Mérida": 0.60,
    "Otro": 0.50,
};

const AVG_PRICE_PER_KWH = 3.0; // ~$3.00 MXN per kWh (High consumption tier approximation)

export const calculateResults = (data) => {
    const { bill, location, area, heaterAc, heaterWater } = data;

    const monthlyBill = parseFloat(bill);
    const estimatedKwh = monthlyBill / AVG_PRICE_PER_KWH;

    const emissionFactor = EMISSION_FACTORS[location] || EMISSION_FACTORS["Otro"];
    const monthlyEmissions = estimatedKwh * emissionFactor;

    // Mock savings logic
    let potentialSavings = 0;
    const recommendations = [];

    // Basic savings from behavioral changes (10%)
    potentialSavings += monthlyBill * 0.10;
    recommendations.push({
        id: 'behavior',
        title: 'Cambios de Hábito',
        description: 'Apaga las luces cuando no las uses, desconecta electrónicos y aprovecha la luz natural.',
        savings: monthlyBill * 0.10,
        type: 'práctica'
    });

    // Heater specific recommendations
    if (heaterAc === 'Resistencia Eléctrica' || heaterAc === 'Bomba de Calor Antigua') {
        const upgradeSavings = monthlyBill * 0.20; // Higher savings potential in hot climates
        potentialSavings += upgradeSavings;
        recommendations.push({
            id: 'ac-upgrade',
            title: 'Actualizar a Aire Acondicionado Inverter',
            description: 'Los equipos Inverter son significativamente más eficientes que los modelos antiguos o de ventana.',
            savings: upgradeSavings,
            type: 'producto'
        });
    }

    if (heaterWater === 'Eléctrico' || heaterWater === 'Gas') {
        const waterSavings = monthlyBill * 0.12;
        potentialSavings += waterSavings;
        recommendations.push({
            id: 'water-heater',
            title: 'Calentador Solar de Agua',
            description: 'Aprovecha la energía solar para calentar agua y reduce tu dependencia del gas o electricidad.',
            savings: waterSavings,
            type: 'producto'
        });
    }

    // Smart home
    const smartSavings = monthlyBill * 0.05;
    potentialSavings += smartSavings;
    recommendations.push({
        id: 'smart-home',
        title: 'Termostato y Enchufes Inteligentes',
        description: 'Automatiza tu consumo de energía para evitar desperdicios.',
        savings: smartSavings,
        type: 'producto'
    });

    return {
        monthlyEmissions: Math.round(monthlyEmissions),
        potentialSavings: Math.round(potentialSavings),
        recommendations
    };
};
