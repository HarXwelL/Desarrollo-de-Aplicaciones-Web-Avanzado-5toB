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
var input = [{key:"key1", value:"value1"},{key:"key2", value:"value2"}]; 
var result = {}; 
for(var i = 0; i < input.length; i++) { 
    result[input[i].key] = input[i].value; 
} 
console.log(result); // Just for testing


const moverPosiciones = (x, arreglo) => {
    console.log(arreglo);
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (i + x < arreglo.length) {
            nuevoArreglo.push(arreglo[i + x]);
        } else {
            nuevoArreglo.push(arreglo[i + x - arreglo.length]);
        }
    }
    return nuevoArreglo;
};