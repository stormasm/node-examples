Object.filter = (obj, predicate) =>
    Object.assign(...Object.keys(obj)
                    .filter( key => predicate(obj[key]) )
                    .map( key => ({ [key]: obj[key] }) ) );

// Example use:
var scores = {
    John: 2, Sarah: 3, Janet: 1
};
var filtered = Object.filter(scores, score => score > 1);
console.log(filtered);
