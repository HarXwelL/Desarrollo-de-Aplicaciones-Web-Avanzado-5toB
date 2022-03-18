let m=0;
const mayor = (a, b, c) => {
    if ( a > b && a > c) {
        m = a;
    } else if (b > a && b > c) {
        m = b;
    } else {
        m = c;
    }
    return m;
};
console.log(mayor(4,7,8));
