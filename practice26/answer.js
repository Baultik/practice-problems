function searchArray(haystackArray, needleArray) {
    var output = [];

    for (var i in haystackArray) {
        var hay = haystackArray[i];

        for (var j in needleArray) {
            var needle = needleArray[j];
            if (hay === needle) {
                output.push(needle);
            }
        }
    }

    return output;
}