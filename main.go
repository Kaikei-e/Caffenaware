package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./caffenaware/build", false)))
	router.Static("/_app", "./caffenaware/build/_app")
	router.LoadHTMLGlob("./caffenaware/build/*.html")


	router.Run(":9000")
	
}