var teacher = ( function getTeacher() {
    try {
        return fetchTeacher( 1 );
    } catch ( err ) {
        return "Diego";
    }
} ) ();