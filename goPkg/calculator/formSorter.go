package calculator

import (
	"Caffenaware/goPkg/structs"
	"fmt"
	"sort"
)

func FormSorter(forms []structs.FormData){
	sort.Slice(forms, func(i, j int) bool {
		return forms[i].Datetime.Before(forms[j].Datetime)
	})

	for _, v := range forms {
		fmt.Println(v)
	}
}