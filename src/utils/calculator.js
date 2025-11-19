// Mock data for emission factors (kg CO2 per kWh) based on location in Mexico
const EMISSION_FACTORS = {
    "CDMX": 0.45,
    "Monterrey": 0.55, // More industrial/coal
    "Guadalajara": 0.40,
    "Cancún": 0.60, // Often diesel/oil based in islands/peninsulas
    "Mérida": 0.60,
    "Otro": 0.50,
};

const AVG_PRICE_PER_KWH = 3.5; // ~$3.50 MXN per kWh (DAC Tariff approximation)

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

    const productPacks = [
        {
            id: 'tier-1',
            title: 'Tier 1: Retorno Alto, Costo Bajo',
            description: 'Mejoras rápidas con gran impacto inmediato.',
            items: [
                'Termostatos inteligentes',
                'Iluminación LED',
                'Burletes y sellado de ventanas',
                'Cabezales de ducha de bajo flujo',
                'Actualización de electrodomésticos (refri viejo, lavavajillas)'
            ],
            financing: 'Microcréditos / Líneas de crédito',
            estimatedCost: '$5,000 - $15,000 MXN',
            estimatedSavings: '$800 - $2,000 MXN / año'
        },
        {
            id: 'tier-2',
            title: 'Tier 2: Retorno Medio, Costo Medio',
            description: 'Inversiones moderadas para mayor eficiencia.',
            items: [
                'Calentador de agua con bomba de calor',
                'Calentador de agua solar',
                'Aislamiento básico de paredes/techo',
                'Doble/triple acristalamiento',
                'Batería solar (sistemas pequeños)'
            ],
            financing: 'Préstamos a corto/mediano plazo (24–60 meses)',
            estimatedCost: '$20,000 - $80,000 MXN',
            estimatedSavings: '$3,000 - $8,000 MXN / año'
        },
        {
            id: 'tier-3',
            title: 'Tier 3: Mejoras Mayores, Máximo Impacto',
            description: 'Transformación total para máxima independencia energética.',
            items: [
                'Bomba de calor (HVAC completo)',
                'Sistemas fotovoltaicos solares',
                'Aislamiento profundo',
                'Reemplazo de ventanas',
                'Reemplazo de techo con membrana aislante'
            ],
            financing: 'Préstamos verdes a largo plazo / Hipoteca verde',
            estimatedCost: '$150,000+ MXN',
            estimatedSavings: '$15,000+ MXN / año'
        }
    ];

    return {
        monthlyEmissions: Math.round(monthlyEmissions),
        potentialSavings: Math.round(potentialSavings),
        recommendations,
        productPacks
    };
};
