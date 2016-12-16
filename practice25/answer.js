function addArrays(firstArray, needleArray) {
    if (firstArray.length !== needleArray.length) return null;
    var output = [];

    for (var i = 0; i < firstArray.length; i++) {
        output.push(firstArray[i] + needleArray[i]);
    }

    return output;
}