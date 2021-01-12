let _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        };

        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        };

        return number >= start && number < end;
    },

    words(string) {
        return string.split(" ");
    },

    pad(string, length){
        if (string.length >= length) {
            return string;
        }
        
        let startPaddingLength = Math.floor((length - string.length) / 2)
        let endPaddingLength = length - string.length - startPaddingLength;

        let paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);

        return paddedString;
    },

    has(obj, key){
        if(obj[key] === undefined){
            return false;
        } else {
            return true;
        }
    },

    invert(obj){
        let invertedObject  = {};
        
        for(key in obj){
            const originalValue = obj[key];
            invertedObject[originalValue] = key;
        };    

        return invertedObject;
    },

    findKey(obj, predicate){
        for(key in obj) {
            const value = obj[key]
            const predicateReturnValue = predicate(value);
            
            if (predicateReturnValue === true){
                return key;
            }

            return undefined;
        }
    },

    drop(arr, num){
        if (num === undefined){
            num = 1;
        }
        let droppedArray = arr.slice(num, arr.length);
        return droppedArray;
    },

    dropWhile(arr, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, arr);
        }
        let dropNumber = arr.findIndex(cb);
        let droppedArray = this.drop(arr, dropNumber);
        return droppedArray;
        
    },

    chunk(arr, size) {
        if (size === undefined) {
            size = 1;
        }

        let arrayChunks  = [];

        for(let i = 0 ; i < arr.length ; i += size){
            let arrayChunk = arr.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};

// Do not write or modify code below this line.
module.exports = _;