"use strict";
const express = require("express");
const fs = require("fs");
const app = express();
const func = require("../lib/func");

function render(filename) {
	let data = fs.readFileSync(filename, "utf8");
	return data;
}

app.get("/", (req, res) => {
	const _res = func.doadd(3, 5);
	console.log(_res);
	res.send(render("./src/index.html"));
});

app.listen(8080, () => {
	console.log("Start listen 8080");
});
