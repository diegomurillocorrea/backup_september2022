// This is an impure function

function addComment ( userID, comment ) {
    var record = {
        id: uniqueID(),
        userID,
        text: comment
    };

    var elem = buildCommentElement( record );
    commentsList.appendChild( elem );
}

addComment( 42, "This is my first comment" );

// This is a pure function

function newComment ( userID, commentID, comment ) {
    var record = {
        id: commentID,
        userID,
        text: comment
    };

    return buildCommentElement( record );
}

var commentID = uniqueID();
var elem = newComment(
    42,
    commentID,
    "This is my first comment"
);

commentsList.appendChild( elem );