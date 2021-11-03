let array = [2,3,4,6,7,8]
function getClosest(array, target) {
    return array.reduce((prev, curr) => (target - curr) < (target - prev) && curr <= target && curr !== target ? curr : prev , Number.MIN_VALUE)
}