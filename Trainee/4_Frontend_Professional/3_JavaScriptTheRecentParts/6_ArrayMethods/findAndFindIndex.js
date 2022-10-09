var arr = [
    { a: 1 },
    { a: 2 }
];

console.log( arr.find(
    function match ( v ) {
        return v && v.a > 1;
        }
    ) 
);
// { a: 2 }

console.log( arr.find(
    function match ( v ) {
        return v && v.a > 10;
        }
    ) 
);
// undefined

console.log(
    arr.findIndex(
        function match ( v ) {
            return v && v.a > 10;
        }
    )
);
// This would print -1 because it means, it has not been found