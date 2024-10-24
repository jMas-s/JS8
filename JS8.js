//1
function skirtumas(a, b) {
    const rezultatas = a - b;
    console.log("Skirtumas yra:", rezultatas);
    return rezultatas;
}
skirtumas(10, 5);



//2
function mazesnisSkaicius(a, b) {
    const rezultatas = a < b ? a : b;
    console.log("Mažesnis skaičius yra:", rezultatas);
    return rezultatas;
}
mazesnisSkaicius(7, 6);


//3
function trikampioPerimetras() {
    const a = parseFloat(prompt("Įveskite pirmosios trikampio kraštinės ilgį:"));
    const b = parseFloat(prompt("Įveskite antrosios trikampio kraštinės ilgį:"));
    const c = parseFloat(prompt("Įveskite trečiosios trikampio kraštinės ilgį:"));

    const perimetras = a + b + c;

    alert("Trikampio perimetras yra: " + perimetras);
}
trikampioPerimetras();
