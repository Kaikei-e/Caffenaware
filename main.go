package caffenaware

import "github.com/gin-gonic/gin"

func main()  {
	router := gin.Default()

	router.Static("/_app", "./svelte/build/_app")

	router.Run(":9000")
	
}