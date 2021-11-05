package apihandler

import (
	"Caffenaware/goPkg/calculator"
	"Caffenaware/goPkg/structs"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"

	"github.com/gin-gonic/gin"
)



func APIReciever(ctx *gin.Context){
	var frmDts []structs.FormData

	fmt.Println(ctx.Request.Body)
	body, err := ioutil.ReadAll(ctx.Request.Body)
	if err != nil {
		log.Panicln(err)
	}


	if err := json.Unmarshal(body, &frmDts); err != nil{
		log.Panicln(err)

	}


	fmt.Println(frmDts)

	calculator.FormSorter(frmDts)

	var caledList []structs.TheDecay 

	for _, v := range frmDts {
		caffeStructs := calculator.Calculator(v)

		for _, x := range caffeStructs.Set {
			caledList = append(caledList, x)

		}
		fmt.Println(len(caledList))
	}

	calculator.ResultSorter(caledList)

	fmt.Println(len(caledList))

	summedList := calculator.CalSumTrans(caledList)

	calculator.ResultSorter(summedList)

	var res []structs.ResStruct


	for _, v := range summedList {
		var rInit structs.ResStruct
		rInit.Timeline = v.Timeline.Format("2006-01-02T15:04:05.000")
		rInit.CaffeineTransition = v.CaffeineTransition

		res = append(res, rInit)
	}

	for i, v := range summedList {
		
		if i % 300 == 0 {
			fmt.Println(v)		
			
		}
			
	}


	ctx.JSON(200, res)

}