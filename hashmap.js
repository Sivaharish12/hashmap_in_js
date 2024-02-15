const hashmap=new Map()
hashmap.set('a',10)
hashmap.set('b',20)
hashmap.set('c',30)
// get method
console.log(hashmap.get('a'));

console.log(hashmap);
// clear method
hashmap.clear();
console.log(hashmap);

hashmap.set('a',10)
hashmap.set('b',20)
hashmap.set('c',30)

// delete method
hashmap.delete('a')
console.log(hashmap);

// Iterator Method
hashmap.set('a',10)
const Iterator=hashmap.entries();
console.log(Iterator);
console.log(Iterator.next());  // -> the next returns the value and done(value->[key,value]) and the done indicates the whether the
                               // Iteration completes if it is the last element then true or false.

//ForEach for the Iteration
hashmap.forEach((values)=>{
    console.log(values);
})

// Has method to check whether the key is present in the hashmap or not 
if(hashmap.has('a')){
    console.log(true);
}

//or
console.log(hashmap.has('a'));

// KEYS AND VALUES
const keys=hashmap.keys();
console.log(`The keys in the Hashmap is ${keys.next().value}`);
const values=hashmap.values();
console.log(`The values in the Hashmap is ${values.next().value}`);  //Both the keys and values returns the iterator objects not the arrays.
