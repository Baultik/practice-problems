function matrixAdd(array1, array2) {
    var output = [];
    for (var i = 0; i < array1.length; i++) {
        var inner = [];
        for (var j = 0; j < array1[i].length; j++) {
            inner.push(array1[i][j] + array2[i][j]);
        }
        output.push(inner);
    }
    return output;
}

console.log(matrixAdd([ [1,2,3], [3,4,5], [6,7,8] ], [ [1,2,3], [1,2,3], [1,2,3] ]));