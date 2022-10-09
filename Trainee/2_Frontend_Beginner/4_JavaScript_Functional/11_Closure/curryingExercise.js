const curry = ( fn ) => { // abc
    return ( arg ) => { // 1
        return ( arg2 ) => { // 2
            return fn( arg, arg2 )
        }
    }
}