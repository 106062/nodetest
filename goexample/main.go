package main

import (
	"fmt"

	doadd "local.packages/doadd"
)

func main() {
	fmt.Println("Go test case example");

	var a int = 1;
	var b int = 2;
	doadd.Doadd(a, b);
}
