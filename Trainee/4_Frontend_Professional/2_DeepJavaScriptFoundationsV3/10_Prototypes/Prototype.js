function Workshop ( teacher ) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function ( question ) {
    console.log( this.teacher, question );
}

var deepJS = new Workshop( "Diego" );

console.log(
    deepJS.constructor === Workshop
);

console.log(
    deepJS.__proto__ === Workshop.prototype
);

console.log(
    Object.getPrototypeOf( deepJS ) === Workshop.prototype
);