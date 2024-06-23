function findSmallest(arr) {
    let smallest = arr[0]
    let smallest_index = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallest_index = 1
        }
    }
    
    return smallest_index
}

function selectionSort(arr) {
    let sortedArray = []
    
    for (let i = 0; i < arr.length; i++) {
        smallest = findSmallest(arr)
        sortedArray.push(arr.pop(smallest))
    }
    
    return sortedArray
}

console.log(selectionSort([5, 18, 2, 34]))
