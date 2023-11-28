function getCommonElements(array1, array2) {
    const result = [];
    for (let i = array1; i <= array2.length; i++){
        if (array2.includes([i])) {
            result.push([i]);
        }
    }
    console.log(result);
 }

getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);