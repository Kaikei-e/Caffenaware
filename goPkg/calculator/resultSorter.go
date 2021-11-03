package calculator

import (
	"Caffenaware/goPkg/structs"
	"sort"
)

func ResultSorter(resList []structs.TheDecay){
	sort.Slice(resList, func(i, j int) bool {
		return resList[i].Timeline.Before(resList[j].Timeline)
	})

	
}