**SCOPE**
The scope in JavaScript is the area
where a variable has access to some
value.

We have:
- Global variables
- Local variables

Anything that has parenthesis next to its declaration is a function
-> add(), reset(), greet()

**OWN LOCAL SCOPE VARIABLES**

<script type="text/javascript">
    var ACTUAL;
    it(
        "a function has access to its own local scope variables",
        function () {
            var fn = function () {
                var name = "inner";
                ACTUAL = name;
            };
            fn();
            expect( ACTUAL === "inner" ).to.be.true;
        }
    );
</script>

**LOCAL SCOPE VARIABLES**

<script type="text/javascript">
    var ACTUAL;
    it(
        "inputs to a function are treated as local scope variables",
        var fn = function () {
            var fn = function () {
                ACTUAL = name;
            };
            fn( "inner" );
            expect( ACTUAL === "inner" ).to.be.true;
        }
    );
</script>

**BLOCK SCOPE VARIABLES**

<script type="text/javascript">
    var ACTUAL;
    it(
        "block scope can be created with let",
        var fn = function () {
            var where = "outer";
            // This brackets will start the block scope
            {
                let where = "inner";
                // If declare this variable with "var", the block scope will not work
                // var where = "inner";
            }
            ACTUAL = where;
        };
        fn();
        // So, it will take the inner value
        // expect( ACTUAL === "inner" ).to.be.true;
        expect( ACTUAL === "outer" ).to.be.true;
    );
</script>

**SAME SCOPE VARIABLES**

<script type="text/javascript">
    var ACTUAL;
    it(
        "a function has access to the variables contained within the same scope that function was created in",
        var name = "outer";
        var fn = function () {
            ACTUAL = name;
        };
        fn();
        expect( ACTUAL === "outer" ).to.be.true;
    );
</script>

**FUNCTION SCOPE VARIABLES 1**

<script type="text/javascript">
    var ACTUAL;
    it(
        "a function's local scope variables are not available anywhere outsite that function",
        function () {
            var firstFn = function () {
                var localToFirstFn = "inner";
            };
            firstFn();
            expect(
                function () {
                    ACTUAL = localToFirstFn;
                }
            ).to.throw();
            // ACTUAL will be null because at the beginning of the code, ACTUAL has a null default value
            expect( ACTUAL === null ).to.be.true;
        }
    );
</script>

**FUNCTION SCOPE VARIABLES 2**

<script type="text/javascript">
    var ACTUAL;
    it(
        "a function's local scope variables are not available anywhere outsite that function, regardless of the context it's called in",
        function () {
            var firstFn = function () {
                var localToFirstFn = "first";
                /*
                    Although false, it might seem reasonable to think that the secondFn (which mentions the localToFirstFn variable), should have access to the localToFirstVariable, it's being called here from within the scope where tha variable is declared
                */
               secondFn();
            };
            var secondFn = function () {
                ACTUAL = localToFirstFn;
            };
            expect(
                function () {
                    /*
                        Of course, calling the secondFn should throw an error in this case, since secondFn does not have access to localToFirstFn variable
                    */
                   secondFn();
                }
            ).to.throw();
            expect(
                function () {
                    /*
                        In addition, calling the firstFn (which in turn calls the secondFn) should also throw, since it the calling context of secondFn has no influence over its access rules
                    */
                   firstFn();
                }
            ).to.throw();
            // Because any of the previous functions were correct
            // ACTUAL will be null because at the beginning of the code, ACTUAL has a null default value
            expect( ACTUAL === null ).to.be.true;
        }
    );
</script>