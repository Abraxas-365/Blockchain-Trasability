package models

import (
	"time"
)

type Report struct {
	ID            string    `bson:"_id" json:"id"`
	Name          string    `bson:"name" json:"name"`
	Type          string    `bson:"type" json:"type"`                     //D(document), T(exto)
	UserID        string    `bson:"user_id" json:"user_id"`               //id del creador del documento
	TransactionId string    `bson:"transaction_id" json:"transaction_id"` //id del documento una vez estando en el blockchain
	IdRegistro    int       `bson:"id_registro" json:"id_registro"`
	Data          string    `bson:"data" json:"data"`         // data a registrar en el blockchain
	Platform      string    `bson:"platform" json:"platform"` // que plataforma se uso para registrar en el blockchain
	CreationDate  time.Time `bson:"creation_date" json:"creation_date"`
}

type Reports []*Report
