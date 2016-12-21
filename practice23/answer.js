function findFactors(num) {
    var output = [];

    for (var i = 1; i <= num; i++) {
        if (!(num % i)) {
            output.push(i);
        }
    }

    return output;
}