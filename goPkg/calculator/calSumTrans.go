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

	/*


			for i := 0; i < len(caffeList); i +=2 {
		  	caffeMap[caffeList[i].Timeline] = caffeList[i+1].CaffeineTransition
			}

			for i, v := range caffeMap {
				var tmp structs.TheDecay

				tmp.CaffeineTransition = v
				tmp.Timeline = i

				summedList = append(summedList, tmp)
			}
		/*
			for i, v := range caffeMap {


			}
	*/

	/*
		for _, v := range caffeList {
			_, ok := duplicate[v.Timeline]
			if ok {


				/*
				var sum structs.TheDecay

				sum.CaffeineTransition = v.CaffeineTransition
				sum.Timeline = v.Timeline


				summedList = append(summedList, sum)
			}else{
				duplicate[v] = v
			}


		}
	*/

	return summedList
}
