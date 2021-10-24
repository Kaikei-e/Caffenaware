package caffenaware

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main(){
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./caffenaware/public/build", false)))
	router.Static("/_app", "./svelte/build/_app")
	router.LoadHTMLGlob("./caffenaware/public/build/*.html")


	router.Run(":9000")
	
}