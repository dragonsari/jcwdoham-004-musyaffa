function switchVal(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    
    return arr.map(item => {
        if (typeof item !== 'object' || item === null) {
            return item;
        }
        
        const result = {};
        
        for (const [key, value] of Object.entries(item)) {
            result[value] = key;
        }
        
        return result;
    });
}

console.log(switchVal([{ name: 'David', age: 20 }]));