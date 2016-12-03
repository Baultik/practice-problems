function randomize(inputArray) {
    var outputArray = [];
    var size = inputArray.length;

    while (outputArray.length < size) {
        var placed = false;

        while(!placed) {
            var randIndex = Math.floor(Math.random() * size);
            var item = inputArray[randIndex];

            if (outputArray.indexOf(item) == -1) {
                outputArray.push(item);
                placed = true;
            }
        }

    }

    return outputArray;
}