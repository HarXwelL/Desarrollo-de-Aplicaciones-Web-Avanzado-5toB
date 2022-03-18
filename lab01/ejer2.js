let resto = 0;
let a = false;
let arrmult = [];

const multiplo = (valor, mult) => {
    resto = valor % mult;
    if (resto == 0) {
        a = true;
    } else {
        a = false;
    }
    return a;
};

 for (let b=1; b <=50; b++) {
     multiplo(b,7);
     if ( a === true) {
        multiplo(b,2);
        if (a === false) {
            multiplo(b,3);
            if (a === false) {
                multiplo(b,5);
                if (a === false) {
                    arrmult.push(+b);
                }
            }
        }
     }
 };
 console.log(arrmult)
 