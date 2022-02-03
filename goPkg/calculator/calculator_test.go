package calculator

import (
	"Caffenaware/goPkg/structs"
	"reflect"
	"testing"
	"time"
)

const correctLength = 1588

func TestCalculator(t *testing.T) {
	type args struct {
		formData structs.FormData
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{"passCase", args{formData: structs.FormData(struct {
			Method   string
			Caffeine int
			Datetime time.Time
			Ml       int
		}{Method: "1", Caffeine: 100, Datetime: time.Now(), Ml: 0})}, correctLength},
		{"errCase", args{formData: structs.FormData(struct {
			Method   string
			Caffeine int
			Datetime time.Time
			Ml       int
		}{Method: "1", Caffeine: 100, Datetime: time.Now(), Ml: 0})}, 0},
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Calculator(tt.args.formData); !reflect.DeepEqual(len(got.Set), tt.want) {
				t.Errorf("Calculator() = %v, want %v", got, tt.want)
			}
		})
	}
}
