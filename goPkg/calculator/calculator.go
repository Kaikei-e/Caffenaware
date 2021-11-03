package calculator

import (
	"Caffenaware/goPkg/structs"
	"fmt"
	"time"
)

func Calculator(formData structs.FormData){
	var totalCaffeine int
	var caffeStruct structs.TheDecay
	
	if formData.Method == "1" {
		totalCaffeine = formData.Caffeine * formData.Ml


	}else{
		totalCaffeine = formData.Caffeine
	}

	const Tmax = 1.1333
	var toTmax float64
	var dateAt time.Time
	toTmax = 1.0
	dateAt = formData.Datetime


	for i := 0; toTmax <= float64(totalCaffeine); i++ {
		if i == 0 {

			caffeStruct.CaffeineTransition = append(caffeStruct.CaffeineTransition, toTmax)
			caffeStruct.Timeline = append(caffeStruct.Timeline, dateAt)

			continue
		}
		
		toTmax = toTmax * Tmax
		dateAt = dateAt.Add(1 * time.Minute)

		caffeStruct.CaffeineTransition = append(caffeStruct.CaffeineTransition, toTmax)
		caffeStruct.Timeline = append(caffeStruct.Timeline, dateAt)

		
	}

	const decayRate = 0.99807

	var toZero float64
	toZero = float64(formData.Caffeine)
	dateAt = caffeStruct.Timeline[len(caffeStruct.Timeline) - 1]

	for i := 0; toZero < 5.0000; i++ {
		dateAt = dateAt.Add(1* time.Minute)
		caffeStruct.Timeline = append(caffeStruct.Timeline, dateAt)

		toZero = toZero * decayRate
		caffeStruct.CaffeineTransition = append(caffeStruct.CaffeineTransition, toZero)


	}

	for _, v := range caffeStruct.CaffeineTransition {
		fmt.Println(v)
	}

	for _, v := range caffeStruct.Timeline {
		fmt.Println(v)
	}

}