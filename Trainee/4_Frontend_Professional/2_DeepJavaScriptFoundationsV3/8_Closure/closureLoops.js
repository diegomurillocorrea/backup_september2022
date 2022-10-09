for ( var i = 1 ; i <= 3 ; i++ ) {
    setTimeout(
        function () {
            console.log( `i : ${ i }` );
        },
        i * 1000
    );
}

for ( var i = 1 ; i <= 3 ; i++ ) {
    let j = i;
    setTimeout(
        function () {
            //console.log( `j : ${ j }` );
        },
        j * 1000
    );
}