function bipolar(count) {
    if (isNaN(count)) count = 10;
    for (var i = 0, j = count; i < count; i++,j--) {
        console.log("i = " + i + " j = " + j);
    }
}