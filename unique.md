## Unique

Return all unique elements in an array.

```
1 const unique = (arr) => {
2     // Filter returns a new array with that pass the supplied test (line 4)
3     return arr.filter( (item, ind) => {
4    // The supplied test looks at the index of an item, and compares it to the index of that specific item.
5         return arr.indexOf(item) === ind;
6    })
7 };

```

Filter can split the code into three parts. Each individual item, the index of that item, and the entire array. This code only uses the item and the index.

The trick here is in indexOf. This method, indexOf returns only THE FIRST instance of t he item. So, here's an array.

```
let array = ['a', 'b', 'c', 'a']
```

.filter is looping over each `item`. Then .indexOf asks for the first instance of item, then we check the index of the item the filter is on.

So (in long form) for arr[0]:
`['a', 'b', 'c', 'a'].indexOf('a') === 0` TRUE!

For arr[1]:
`['a', 'b', 'c', 'a'].indexOf('b') === 1` TRUE!

For arr[2]:
`['a', 'b', 'c', 'a'].indexOf('c') === 2` TRUE!

For arr[3]:
`['a', 'b', 'c', 'a'].indexOf('a') === 3` FALSE!
    
Wait, huh? .indexOf looks for the _FIRST_ instance of 'a' (position 0 of arr). You could think of indexOf as firstIndexOf.

So when the test passes, the element then goes into the array. Every element in the final array is unique, because we check every element in the array and if that element's index is the same as the first occurance of it.
