var z = ['bork', 'bkor', 'code', 'doce'];

const cleanString = (string) => {
    return string.toLowerCase().split('').sort().join();
}

const isItAnAnagram = (first, second) => {
    return cleanString(first) === cleanString(second);
}

const clearAnagramsFrom = (array) => {

        const filtered = array.filter( (secondItem, ind) => {
             return isItAnAnagram(firstItem, secondItem);
        });

    console.log('newArray: ', newArray)
    return newArray;
}

console.log("final:", clearAnagramsFrom(z));

<!-- Needs to be recursive -->