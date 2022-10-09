const inventory = {
    sunglasses: 1,
    pants: 1088,
    bags: 1344
  };
  
  
  function myExecutor ( resolve, reject ) {
    if ( inventory.sunglasses > 0 ) {
      resolve( "Sunglasses order processed." );
    } else {
      reject( 'That item is sold out.' );
    }
  }
  const resolve = str => console.log( str );
  const reject = str => console.log( str );
  const orderSunglasses = () => new Promise( myExecutor ); 
  
  var orderPromise = orderSunglasses();
  
  console.log( orderPromise );