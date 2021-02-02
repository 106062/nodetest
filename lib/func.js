"use strict";

function doadd(a, b) { 
	try {
		const res = isNaN(parseInt(a) + parseInt(b)) ? 0 : 
			parseInt(a) + parseInt(b);
		return res;
	} catch (e) {
		console.log("err msg " + e);
		return 0;
	}
}

module.exports = {
	doadd
};