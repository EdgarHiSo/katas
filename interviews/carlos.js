const numbers = [1,34,65,34] 

function getMax(numbers) {
    let max1 = undefined
    let max2 = undefined
    for (let number of numbers) {
        if (!max1) {
            max1 = number;
        } else if (!max2) {
            max2 = number;
        } else {
            if (number > max1 || number > max2) {
                if (max1 > max2) {
                    max2 = number;
                } else {
                    max1 = number;
                }
            }
        }
    }
    return [max1, max2];
}