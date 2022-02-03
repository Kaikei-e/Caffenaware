package calculator

import (
	"Caffenaware/goPkg/structs"
	"time"
)

func CalSumTrans(caffeList []structs.TheDecay) []structs.TheDecay {
	var summedList []structs.TheDecay

	caffeMap := make(map[time.Time]float64)
	for _, v := range caffeList {
		caffeMap[v.Timeline] += v.CaffeineTransition
	}

	for i, v := range caffeMap {
		var tmp structs.TheDecay

		tmp.CaffeineTransition = v
		tmp.Timeline = i

		summedList = append(summedList, tmp)
	}

	return summedList
}
