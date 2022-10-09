"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function recordNumber( num, numbers ) {
	if ( !numbers.includes( num ) ) {
		/* 
		Instead of doing this
		numbers = numbers.slice();
		numbers.push( num ); 
		*/
		// We can do this
		numbers = [ ...numbers, num ]
		numbers.sort( ( x, y ) => x - y );
	}
	return numbers;
}

var luckyLotteryNumbers = [];
const NUM_COUNT = 6;

while (luckyLotteryNumbers.length < NUM_COUNT ) {
	luckyLotteryNumbers = recordNumber( 
		lotteryNum(),
		Object.freeze( luckyLotteryNumbers )
	);
}

console.log(luckyLotteryNumbers);
