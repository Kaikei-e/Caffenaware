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

	for _, v := range frmDts {
		calculator.Calculator(v)
	}

	ctx.JSON(200, frmDts)



}