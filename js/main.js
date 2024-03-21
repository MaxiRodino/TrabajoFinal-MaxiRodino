const agregar = () => {
   
    console.log(document.readyState)

    
    const aceptarMontoPlazoFijo = document.getElementById('aceptarMontoPlazoFijoBtn');

    console.log(aceptarMontoPlazoFijo)
    
    aceptarMontoPlazoFijo.addEventListener('click', function () {
        const monto = parseFloat(document.getElementById('montoPlazoFijo').value);
        const dias = parseInt(prompt("Ingrese la cantidad de días para el plazo fijo:"));

        const resultado = calcularPlazoFijo(monto, dias);
        document.getElementById('inicioPlazoFijo').innerText = `Fecha de inicio: ${resultado.fechaInicio.toLocaleDateString()}`;
        document.getElementById('vencimientoPlazoFijo').innerText = `Fecha de vencimiento: ${resultado.fechaVencimiento.toLocaleDateString()}`;
        document.getElementById('montoIngresado').innerText = `Monto ingresado: ${resultado.monto.toFixed(2)} ARS`;
        document.getElementById('interesesGenerados').innerText = `Intereses generados: ${resultado.intereses.toFixed(2)} ARS`;

        document.getElementById('detallePlazoFijo').style.display = 'block';
    });

    // Simulador de Préstamo Personal
    const aceptarMontoPrestamoPersonal = document.getElementById('aceptarMontoPrestamoPersonalBtn');
    aceptarMontoPrestamoPersonal.addEventListener('click', function () {
        const monto = parseFloat(document.getElementById('montoPrestamoPersonal').value);
        const plazoMeses = parseInt(prompt("Ingrese el plazo de meses para devolver el préstamo:"));

        const resultado = calcularPrestamoPersonal(monto, plazoMeses);
        document.getElementById('plazoPrestamoPersonal').innerText = `Plazo: ${resultado.plazoMeses} meses`;
        document.getElementById('cuotaPrestamoPersonal').innerText = `Cuota mensual: ${resultado.cuota.toFixed(2)} ARS`;
        document.getElementById('tasaInteresPrestamoPersonal').innerText = `Tasa de interés anual: ${resultado.tasaInteresAnual}%`;

        document.getElementById('detallePrestamoPersonal').style.display = 'block';
    });
}

//window.addEventListener("DOMContentLoaded", agregar)
window.addEventListener("load", agregar)
/*
window.addEventListener('load', function () {

    console.log(document.readyState)
    // Simulador de Plazo Fijo
    const aceptarMontoPlazoFijo = document.getElementById('aceptarMontoPlazoFijo');

    console.log(aceptarMontoPlazoFijo)
    
    aceptarMontoPlazoFijo.addEventListener('click', function () {
        const monto = parseFloat(document.getElementById('montoPlazoFijo').value);
        const dias = parseInt(prompt("Ingrese la cantidad de días para el plazo fijo:"));

        const resultado = calcularPlazoFijo(monto, dias);
        document.getElementById('inicioPlazoFijo').innerText = `Fecha de inicio: ${resultado.fechaInicio.toLocaleDateString()}`;
        document.getElementById('vencimientoPlazoFijo').innerText = `Fecha de vencimiento: ${resultado.fechaVencimiento.toLocaleDateString()}`;
        document.getElementById('montoIngresado').innerText = `Monto ingresado: ${resultado.monto.toFixed(2)} ARS`;
        document.getElementById('interesesGenerados').innerText = `Intereses generados: ${resultado.intereses.toFixed(2)} ARS`;

        document.getElementById('detallePlazoFijo').style.display = 'block';
    });

    // Simulador de Préstamo Personal
    const aceptarMontoPrestamoPersonal = document.getElementById('aceptarMontoPrestamoPersonal');
    aceptarMontoPrestamoPersonal.addEventListener('click', function () {
        const monto = parseFloat(document.getElementById('montoPrestamoPersonal').value);
        const plazoMeses = parseInt(prompt("Ingrese el plazo de meses para devolver el préstamo:"));

        const resultado = calcularPrestamoPersonal(monto, plazoMeses);
        document.getElementById('plazoPrestamoPersonal').innerText = `Plazo: ${resultado.plazoMeses} meses`;
        document.getElementById('cuotaPrestamoPersonal').innerText = `Cuota mensual: ${resultado.cuota.toFixed(2)} ARS`;
        document.getElementById('tasaInteresPrestamoPersonal').innerText = `Tasa de interés anual: ${resultado.tasaInteresAnual}%`;

        document.getElementById('detallePrestamoPersonal').style.display = 'block';
    });
});*/
