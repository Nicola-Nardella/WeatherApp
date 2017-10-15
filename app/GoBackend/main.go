package main

import (
	"fmt"
	"log"
	"net/http"
	"io/ioutil"
)
func homePage(w http.ResponseWriter, r *http.Request){
	url := "http://api.openweathermap.org/data/2.5/box/city?bbox=-5,50,1,55,10&appid=971345cdf8ed9584863aa6cdc5a382ee"
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal("NewRequest: ", err)
		return
	}
	client := http.Client{}

	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Do: ", err)
		return
	}
	defer resp.Body.Close()
	bodyBytes, _ := ioutil.ReadAll(resp.Body)
	bytes := bodyBytes
	ioutil.WriteFile("result.json", bytes, 0644)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.Write(bodyBytes)
	fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	log.Fatal(http.ListenAndServe(":8081", nil))
}

func main() {
	fmt.Println("--- Golang server started ---")
	handleRequests()
}
