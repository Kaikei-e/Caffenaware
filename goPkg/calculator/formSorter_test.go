package calculator

import (
	"Caffenaware/goPkg/structs"
	"testing"
	"time"
)

func TestFormSorter(t *testing.T) {
	type args struct {
		forms []structs.FormData
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{"pass1Case", args{dateForms1}, true},
		{"pass2Case", args{dateForms2}, true},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			FormSorter(tt.args.forms)

			if want := tt.args.forms[0].Datetime.Before(tt.args.forms[1].Datetime); !want {
				t.Errorf("Want is %t! Test failed.", want)
			}
		})
	}
}

var dateForms1 = []structs.FormData{
	{
		Method:   "1",
		Caffeine: 100,
		Datetime: time.Time{},
		Ml:       0,
	}, {
		Method:   "1",
		Caffeine: 100,
		Datetime: time.Time{}.Add(time.Hour * 1),
		Ml:       0,
	}, {
		Method:   "1",
		Caffeine: 100,
		Datetime: time.Time{}.Add(time.Hour * -1),
		Ml:       0,
	},
}

var dateForms2 = []structs.FormData{
	{
		Method:   "1",
		Caffeine: 100,
		Datetime: time.Time{},
		Ml:       0,
	}, {
		Method:   "1",
		Caffeine: 100,
		Datetime: time.Time{}.Add(time.Hour * -2),
		Ml:       0,
	}, {
		Method:   "1",
		Caffeine: 100,
		Datetime: time.Time{}.Add(time.Hour * -1),
		Ml:       0,
	},
}
