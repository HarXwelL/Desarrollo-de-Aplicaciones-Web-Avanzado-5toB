let comision = 0;
let ganancia = 0;
const calcularComision = (venta) => {
    if (venta > 400) {
        comision = 0.09
        ganancia = (venta * comision) + 50;
        return ganancia;
    } else if (venta <= 400 && venta > 150) {
        comision = 0.1;
        ganancia = venta * comision;
        return ganancia;
    } else  if (venta < 150) {
        return 0;
    }
};

console.log(calcularComision(100));
