/*
Write a JavaScript program to get the volume of a Cylinder 
with four decimal places using object classes. 

Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
*/

const pi = Math.PI;

var cylinder = {
    radius: 5,
    height: 10,
    volume: undefined
}

cylinder.volume = pi * Math.pow( cylinder.radius, 2 )  * cylinder.height;

console.log(
    Number( cylinder.volume.toFixed( 2 ) )
);