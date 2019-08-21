function staircase(n) {
    // let n = linha - coluna;
    let linha = 0, coluna = 0;

    for (linha = 1; linha <= n; linha++){
        for (coluna = 1; coluna <= n - linha; coluna++){
            process.stdout.write(" ");
        }
        for (coluna = 1; coluna <= linha; coluna++) {
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }
}
