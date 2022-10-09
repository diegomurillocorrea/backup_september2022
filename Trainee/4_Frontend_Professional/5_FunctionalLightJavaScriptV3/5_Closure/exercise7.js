function ajax ( url, data, cb ) { /***/ }

ajax( CUSTOMER_API, { id: 42 }, renderCustomer );

function getCustomer ( data, cb ) {
    return ajax( CUSTOMER_API, data, cb );
}

getCustomer( { id: 42 }, renderCustomer );

function getCurrentUser ( cb ) {
    //return ajax( CUSTOMER_API, data, cb );
    return getCustomer( { id: 42 }, cb );
}

getCurrentUser( renderCustomer );