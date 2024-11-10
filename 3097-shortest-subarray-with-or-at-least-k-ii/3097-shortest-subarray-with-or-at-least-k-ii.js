const minimumSubarrayLength = (nums, target) => {
    const bitFrequency = new Array(32).fill(0); 
    let minLength = Number.MAX_VALUE;
    let currentOrValue = 0; 

    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        currentOrValue |= nums[right];
        
        for (let bit = 0; bit < 32; bit++) {
            if ((nums[right] & (1 << bit)) !== 0) {
                bitFrequency[bit]++;
            }
        }

        while (currentOrValue >= target && left <= right) {
            minLength = Math.min(minLength, right - left + 1);

            for (let bit = 0; bit < 32; bit++) {
                if ((nums[left] & (1 << bit)) !== 0) {
                    bitFrequency[bit]--;
                    if (bitFrequency[bit] === 0) {
                        currentOrValue &= ~(1 << bit); 
                    }
                }
            }

            left++;
        }
    }
    
     return minLength === Number.MAX_VALUE ? -1 : minLength;
};