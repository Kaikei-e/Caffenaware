package calculator

import (
	"Caffenaware/goPkg/structs"
	"reflect"
	"testing"
)

func TestCalSumTrans(t *testing.T) {
	type args struct {
		caffeList []structs.TheDecay
	}
	tests := []struct {
		name string
		args args
		want []structs.TheDecay
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := CalSumTrans(tt.args.caffeList); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("CalSumTrans() = %v, want %v", got, tt.want)
			}
		})
	}
}
