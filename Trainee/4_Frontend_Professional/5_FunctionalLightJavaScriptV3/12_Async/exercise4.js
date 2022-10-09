var a = new Rx.Subject();

setInterval(
    function everySecond () {
        a.next( Math.random() );
    },
    1000
);

// ***************************

var b = a.map( v => v * 2 );

b.subscribe( v => console.log( v ) );