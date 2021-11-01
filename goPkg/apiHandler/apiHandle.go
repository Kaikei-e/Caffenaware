package apihandler

import (
	"Caffenaware/goPkg/structs"
	"log"

	"github.com/gin-gonic/gin"
)



func APIReciever(ctx *gin.Context){
	var frmDts []structs.FormData

	err := ctx.BindJSON(&frmDts)
	if err != nil {
		log.Panicln(err)
	}

	ctx.JSON(200, frmDts)

	

}