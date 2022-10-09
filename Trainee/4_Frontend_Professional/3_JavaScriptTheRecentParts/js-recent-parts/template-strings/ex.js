function upper(strings,...values) {
	var ret = "";
	for ( let i = 0 ; i < strings.length ; i++ ) {
		if ( i > 0 ) {
			ret += String( values[ i - 1 ] ).toUpperCase();
		}
		ret += strings[ i ]
	}
	return ret;
}

var personName = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${ personName } (@${ twitter }), welcome to ${ topic }!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
