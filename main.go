package main

import (
	apihandler "Caffenaware/goPkg/apiHandler"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./sBuild", false)))
	router.Static("/_app", "./sBuild/_app")
	router.LoadHTMLGlob("./sBuild/*.html")

	router.GET("/")

	api := router.Group("/api")
	{
		api.POST("/calculate", apihandler.APIReciever)
	}



	router.Run(":9000")
	
}