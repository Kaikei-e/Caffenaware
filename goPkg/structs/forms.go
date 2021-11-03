package structs

import "time"

type FormData struct{
	Method string `json:"method"`
	Caffeine int `json:"caffeine"`
	Datetime time.Time `json:"dttm"`
	Ml int `json:"drinkMl"`
}

type TheDecay struct {
	Timeline []time.Time
	CaffeineTransition []float64
}