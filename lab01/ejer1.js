const calcularPresupuesto = (cantPersonas) => {
    let costo = 95;
    if (cantPersonas > 300) {
        costo = 75;
        return cantPersonas * costo;
    } else if (cantPersonas > 200) {
        costo = 85;
        return cantPersonas * costo;
    } else {
        return cantPersonas * costo;
    }
};

console.log(calcularPresupuesto(250));

