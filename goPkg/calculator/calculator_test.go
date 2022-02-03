package calculator

import (
	"Caffenaware/goPkg/structs"
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
		{"method1Case", args{formData: structs.FormData(struct {
			Method   string
			Caffeine int
			Datetime time.Time
			Ml       int
		}{Method: "1", Caffeine: 100, Datetime: time.Now(), Ml: 0})}, correctLength},
		{"method2Case", args{formData: structs.FormData(struct {
			Method   string
			Caffeine int
			Datetime time.Time
			Ml       int
		}{Method: "2", Caffeine: 100, Datetime: time.Now(), Ml: 100})}, correctLength},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Calculator(tt.args.formData); len(got.Set) != tt.want {
				t.Errorf("Calculator() = %v, want %v", len(got.Set), tt.want)
			}
		})
	}
}

func TestCalculatorPanic(t *testing.T) {
	defer func() {
		recover()
	}()
	Calculator(structs.FormData{"1", 0, time.Now(), 0})

	t.Errorf("Didn't panic!!")
}
