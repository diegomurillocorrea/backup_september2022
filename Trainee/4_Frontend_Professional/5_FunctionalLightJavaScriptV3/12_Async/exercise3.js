var a = new LazyArray();

setInterval(
    function everySecond () {
        a.push( Math.random() );
    },
    1000
);

// ******************************

var b = a.map( v => v * 2 );

b.forEach( v => {
        console.log( v );
    }
);