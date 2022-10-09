const notInRoom = suspects => {
    
    const emptyRooms = reduce(

        suspects.rooms,

        ( room, memo ) => {
            if ( room === false ) memo.push( room )
            return memo;
        },

        []
    );

    return emptyRooms;

};

notInRooms = _.map( newDevelopmentm, notInRoom );

[
    [ "kitchen", "bathroom", "billiard room" ],
    [ "kitchen", "ballroom" ]
]

// scarlett [ "kitchen", "bathroom", "billiard room" ]
// [ "kitchen", "ballroom" ]

_.intersection( ...notInRooms ) // => [ "kitchen", "ballroom" ]