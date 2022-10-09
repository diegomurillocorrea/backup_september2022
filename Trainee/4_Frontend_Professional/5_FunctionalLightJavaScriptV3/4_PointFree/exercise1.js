getPerson ( 
    function onPerson( person ) {
        return renderPerson( person );
    }
);

// Equational Reasoning
getPerson( renderPerson );