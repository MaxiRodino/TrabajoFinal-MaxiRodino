 // Función para calcular plazo fijo
function calcularPlazoFijo(monto, dias) {
    const tasaAnual = 71; // Tasa de interés anual para plazo fijo en porcentaje
    const tasaMensual = tasaAnual / 12 / 100; // Convertir la tasa a mensual
    const intereses = monto * tasaMensual * (dias / 30); // Calcular intereses
    const fechaInicio = new Date(); // Fecha de inicio
    const fechaVencimiento = new Date(fechaInicio.getTime() + dias * 24 * 60 * 60 * 1000); // Fecha de vencimiento

    return { monto, intereses, fechaInicio, fechaVencimiento };
}

// Función para calcular préstamo personal
function calcularPrestamoPersonal(monto, plazoMeses) {
    const tasaInteresAnual = 15; // Tasa de interés anual para préstamo personal en porcentaje
    const tasaInteresMensual = tasaInteresAnual / 12 / 100; // Convertir la tasa a mensual
    const cuota = (monto * tasaInteresMensual) / (1 - (1 + tasaInteresMensual) ** -plazoMeses); // Calcular cuota mensual
    return { monto, plazoMeses, cuota, tasaInteresAnual };
}