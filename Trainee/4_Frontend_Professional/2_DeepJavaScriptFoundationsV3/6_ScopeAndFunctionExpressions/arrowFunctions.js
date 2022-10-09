const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(
      materials.map( material => material.length ) 
    );

    console.log(
        materials.map( 
            function ( material ) { 
                return material.length 
            } 
        ) 
      );
  // expected output: Array [8, 6, 7, 9]

  // Traditional Function
var functionA = function ( a ) {
    return a + 100;
  }
  
  // Arrow Function Break Down
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  const functionA = (a) => {
    return a + 100;
  }
  
  // 2. Remove the body brackets and word "return" -- the return is implied.
  const functionA = (a) => a + 100;
  
  // 3. Remove the argument parentheses
  const functionA = a => a + 100;