package structs

import "time"

type FormData struct{
	Method string `json:"method"`
	Caffeine int `json:"caffeine"`
	Datetime time.Time `json:"dttm"`
}