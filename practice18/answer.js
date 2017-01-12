function multavg(arr, size) {
    var output = [];
    for (var i = 0; i < arr.length; i+=size){
        for (var j = 0; j < arr[i].length; j+=size){
            var avg = average(arr,size,i,j);
            setArray(output,i,j,avg,size);
        }
    }
    return output;
}

function average (array,num,aOffset,eOffset) {
    var total = 0;
    for (var i = aOffset; i < num+aOffset; i++) {
        for (var j = eOffset; j < num+eOffset; j++){
            total += array[i][j];
        }
    }
    return total / (num*num);
}

function setArray(array, aOffset, eOffset, avg, num) {
    for (var i = aOffset; i < num+aOffset; i++) {
        if (!array[i]){
            array[i] = [];
        }
        for (var j = eOffset; j < num+eOffset; j++) {
            array[i][j] = avg;
        }
    }
}

var input_array =
    [
        [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
        [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
        [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
        [6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
    ];
var average_size = 2;

console.log(multavg(input_array,average_size));

// 1.5,1.5,4.25,4.25,4,4,5.25,5.25,5.5,5.5
// 1.5,1.5,4.25,4.25,4,4,5.25,5.25,5.5,5.5
// 5.5,5.5,4   ,4   ,5,5,3.5 ,3.5 ,3  ,3
// 5.5,5.5,4   ,4   ,5,5,3.5 ,3.5 ,3  ,3