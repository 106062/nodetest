package doadd

import "testing"

func TestAdd(t *testing.T) {
	if i, err := Doadd(3, 5); i != 8 || err != nil {
		t.Error("Not passed");
	} else {
		t.Log("Passed");
	}
}

// func TestAddE(t *testing.T) {
// 	t.Error("Not passed");
// }
