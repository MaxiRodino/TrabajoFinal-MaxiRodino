function obtenerCotizacionDolar() {
    return new Promise((resolve, reject) => {
        fetch( 'https://esjs-dolar-api')
            .then(response => response.json())
            .then(data => {
                resolve(data.valor);
            })
            .catch(error => reject('Error al obtener la cotización del dólar'));
    });
}