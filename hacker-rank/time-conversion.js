function timeConversion(s) {

    let hora = s.slice(0, 8);
    let horaCortada = hora.slice(2, 8);

    let primeiro = parseInt(s[0], 10) + 1;
    let segundo = parseInt(s[1], 10) + 2;

    let novos = primeiro.toString() + segundo.toString();

    if (s[8] === "P") {
        if (hora[0] === "1" && hora[1] === "2") {
            novos = "12";
        }
        hora = novos + horaCortada;
    }

    if (s[8] == "A") {
        if (hora[0] === "1" && hora[1] === "2") {
            novos = "00";
            hora = novos + horaCortada;
        }
    }

    return hora;
}