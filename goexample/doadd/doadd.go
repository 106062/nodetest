package doadd

import "errors"

func Doadd(a ,b int) (int, error) {
	if b == 0 {
		return 0, errors.New("Not to be 0");
	}
	c := a + b;
	return c, nil;
}

