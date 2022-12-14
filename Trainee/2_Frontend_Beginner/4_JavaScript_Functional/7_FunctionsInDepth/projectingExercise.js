const _ = {};

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

_.map = function ( list, callback ) {
    var storage = [];

    _.each(
        list,
        function ( v, i, list ) {
            storage.push( callback( v, i, list ) );
        }
    )

    return storage;
}

_.filter() = function ( arr, cb ) {
    const storage = [];

    _.each (
        arr,
        function ( item, i, list ) {
            if ( cb( item, i, list ) ) storage.push( item );
        }
    );
    return storage;
}

_.each = function ( list, callback ) {
    if ( Array.isArray( list ) ) {
        for ( var i = 0 ; i < list.length ; i++ ) {
            callback( list[ i ], i, list );
        }
    } else {
        for ( var key in list ) {
            callback( list[ key ], key, list )
        }
    }
}

const suspects = _.filter(
    videoData,
    function ( suspectObject ) {
        return suspectObject.present;
    }
);

const suspectsNames = _.map(
    suspects,
    suspect => {
        return suspect.name;
    }
);