function sortObjectListByField(inputArray, sortField) {
    var unsorted = true;
    while(unsorted) {
        var count = 0;
        for (var i = 0; i < inputArray.length - 1; i++) {
            var temp1 = inputArray[i];
            var temp2 = inputArray[i+1];

            if (temp1[sortField] > temp2[sortField]) {
                inputArray[i] = temp2;
                inputArray[i+1] = temp1;
                count++;
            }
        }
        if (!count) unsorted = false;
    }
    return inputArray;
}