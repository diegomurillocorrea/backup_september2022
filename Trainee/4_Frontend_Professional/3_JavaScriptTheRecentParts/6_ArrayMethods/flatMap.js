// map()
console.log(
    [ 1,2,3 ].map(
        function tuples ( v ) {
            return [ v * 2, String( v * 2 ) ];
        }
    )
);
// [ [ 2, '2' ], [ 4, '4' ], [ 6, '6' ] ]


// map() with flat()
console.log(
    [ 1,2,3 ].map(
        function tuples ( v ) {
            return [ v * 2, String( v * 2 ) ];
        }
    ).flat()
);
// [ 2, '2', 4, '4', 6, '6' ]

// flatMap()
console.log(
    [ 1,2,3 ].flatMap(
        function tuples ( v ) {
            return [ v * 2, String( v * 2 ) ];
        }
    )
);
// [ 2, '2', 4, '4', 6, '6' ]