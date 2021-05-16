const uuidToHex = require('uuid-to-hex');

let service = uuidToHex('78ec8e2a-1882-46f3-b746-3dea3df0245b');
let characteristic = uuidToHex('838a0b81-2010-437a-bcee-7d9e169fab28');


console.log("Service: " + prettyPrint(slice(service)));
console.log("Characteristic: " + prettyPrint(slice(characteristic)));
 

function slice(m) {

	let v = new Array();

	for (i = 0; i < m.length; i = i + 2) {

		v.unshift("0x" + m.charAt(i) + m.charAt(i+1));
	}

	return v;
}

function prettyPrint(v) {
	
	let output = "";

	v.forEach(function (i, index) {
		output = output + i.toUpperCase()

		if (index + 1 != v.length) {
			output = output + ', '
		}

	})

	return output

}