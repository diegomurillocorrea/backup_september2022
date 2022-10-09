function WorkshopModule ( teacher ) {
    var publicAPI = { ask, };
    return publicAPI;

    /* *********** */

    function ask ( question ) {
        console.log( teacher, question );
    }
};

var workshop = WorkshopModule( "Diego" );

workshop.ask( "it's a module, right?" );