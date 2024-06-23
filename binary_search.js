var search = function(nums, target) {
    var low = 0
    var high = nums.length - 1

    while (low <= high) {
        var mid = Math.floor((low + high) / 2)
        
        var guess = nums[mid]

        if (target === guess) {
            return mid
        } else if (guess > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
};
