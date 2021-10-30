let n1: number = 15;
let n2: number = 2;

function esMultiplo(n1, n2: number): boolean {
  let div: number = n1 % n2;
  let esMultiplo: boolean;

  if (div === 0) {
    console.log("es multipo " + n1);
    esMultiplo = true;
  } else {
    console.log("no es multiplo: " + n2);
    esMultiplo = false;
  }
  return esMultiplo;
}
console.log(esMultiplo(n1, n2));
if ((esMultiplo = true)) {
  console.log("es multipo " + n1);
} else {
  console.log("no es multiplo: " + n2);
}
