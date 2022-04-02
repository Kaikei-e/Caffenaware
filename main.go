package main

import (
	apihandler "Caffenaware/goPkg/apiHandler"
	"embed"
	"io/fs"
	"net/http"

	"github.com/gin-gonic/gin"
)

//go:embed sBuild/public/*
//go:embed sBuild/public/_app/pages/__layout.svelte-a8d315f4.js
//go:embed sBuild/public/_app/assets/pages/__layout.svelte-ecf3250f.css

var st embed.FS

func main() {

	public, err := fs.Sub(st, "sBuild/public")
	if err != nil {
		panic(err)
	}
	/*
		http.Handle("/", http.FileServer(http.FS(public)))

		http.Handle("api/calculate")

		log.Fatal(http.ListenAndServe(":9000", nil))

	*/
	router := gin.Default()

	//router.Use(static.Serve("/", static.LocalFile("./sBuild", false)))

	//router.GET("/")

	router.StaticFS("/", http.FS(public))

	api := router.Group("/api")
	{
		api.POST("/calculate", apihandler.APIReciever)
	}

	errRun := router.Run(":9000")
	if errRun != nil {
		return
	}

}
