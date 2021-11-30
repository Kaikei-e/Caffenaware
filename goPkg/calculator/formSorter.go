package calculator

import (
	"Caffenaware/goPkg/structs"
	"sort"
)

func FormSorter(forms []structs.FormData) {
	sort.Slice(forms, func(i, j int) bool {
		return forms[i].Datetime.Before(forms[j].Datetime)
	})

}
