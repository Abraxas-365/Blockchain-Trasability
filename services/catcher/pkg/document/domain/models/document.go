package models

import (
	"time"

	"github.com/google/uuid"
)

type Document struct {
	ID                string    `bson:"_id" json:"id"`                        //Id del documento
	UserID            string    `bson:"user_id" json:"user_id"`               //id del creador del documento
	TransactionId     string    `bson:"transaction_id" json:"transaction_id"` //id del documento una vez estando en el blockchain
	TransactionResult string    `bson:"transaction_result" json:"transaction_result"`
	Status            string    `bson:"status" json:"status"`
	Data              string    `bson:"data" json:"data"`         // data a registrar en el blockchain
	Platform          string    `bson:"platform" json:"platform"` // que plataforma se uso para registrar en el blockchain
	CreationDate      time.Time `bson:"creation_date" json:"creation_date"`
}

func (d *Document) New(client_id string) Document {
	d.ID = uuid.New().String()
	d.CreationDate = time.Now()
	d.UserID = client_id
	return *d
}
