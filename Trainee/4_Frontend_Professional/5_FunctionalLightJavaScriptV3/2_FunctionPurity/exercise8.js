function getId ( obj ) {
    return obj.id;
}

console.log(
    getId(
        {
            get id () {
                return Math.round( Math.random() * 10 );
            }
        }
    )
);