package calculator

import (
	"Caffenaware/goPkg/structs"
	"fmt"
	"time"
)

func Calculator(formData structs.FormData) structs.TheDecays {
	var totalCaffeine int
	var caffeStructs structs.TheDecays

	if formData.Method == "2" {
		totalCaffeine = int(float64(formData.Caffeine) * float64(formData.Ml) / 100.0)

	} else {
		totalCaffeine = formData.Caffeine
	}

	const Tmax = 1.1333
	var toTmax float64
	var dateAt time.Time
	toTmax = 1.0
	dateAt = formData.Datetime

	for i := 0; toTmax < 10*float64(totalCaffeine); i++ {
		var caffeStruct structs.TheDecay

		if i == 0 {

			caffeStruct.CaffeineTransition = toTmax
			caffeStruct.Timeline = dateAt

			caffeStructs.Set = append(caffeStructs.Set, caffeStruct)
			continue
		}

		toTmax = toTmax * Tmax
		dateAt = dateAt.Add(1 * time.Minute)

		if toTmax > float64(totalCaffeine) {
			fmt.Println("/////////////////")
			caffeStruct.CaffeineTransition = float64(totalCaffeine)
			caffeStruct.Timeline = dateAt
			break
		}

		caffeStruct.CaffeineTransition = toTmax
		caffeStruct.Timeline = dateAt

		caffeStructs.Set = append(caffeStructs.Set, caffeStruct)

	}

	const decayRate = 0.99807

	var toZero float64
	toZero = float64(totalCaffeine)
	dateAt = caffeStructs.Set[len(caffeStructs.Set)-1].Timeline

	for i := 0; toZero > 5.0000; i++ {
		var caffeStruct structs.TheDecay

		dateAt = dateAt.Add(1 * time.Minute)
		caffeStruct.Timeline = dateAt

		toZero = toZero * decayRate
		caffeStruct.CaffeineTransition = toZero

		caffeStructs.Set = append(caffeStructs.Set, caffeStruct)

	}

	//fmt.Println(len(caffeStructs.Set))

	return caffeStructs
}
