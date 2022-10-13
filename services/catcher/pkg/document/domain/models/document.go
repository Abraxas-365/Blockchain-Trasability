package models

import (
	"time"

	"github.com/google/uuid"
)

//Agragar transaccion anterior (Padre) // Id de documento

type Document struct {
	ID                string    `bson:"_id" json:"id"`    //Id del documento
	Type              string    `bson:"type" json:"type"` //D(document), T(exto)
	Name              string    `bson:"name" json:"name"` //name of the document
	ParentID          string    `bson:"parent_id" json:"parent_id"`
	UserID            string    `bson:"user_id" json:"user_id"`               //id del creador del documento
	TransactionId     string    `bson:"transaction_id" json:"transaction_id"` //id del documento una vez estando en el blockchain
	TransactionResult string    `bson:"transaction_result" json:"transaction_result"`
	Status            string    `bson:"status" json:"status"`
	Data              string    `bson:"data" json:"data"`         // data a registrar en el blockchain
	Platform          string    `bson:"platform" json:"platform"` // que plataforma se uso para registrar en el blockchain
	UplodedDate       time.Time `bson:"upload_date" json:"upload_date"`
	CreationDate      time.Time `bson:"creation_date" json:"creation_date"`
}

func (d *Document) New(client_id string, typeOfDocument string) Document {
	d.ID = uuid.New().String()
	d.CreationDate = time.Now()
	d.UplodedDate = time.Now()
	d.UserID = client_id
	d.Type = typeOfDocument
	return *d
}

type Documents []*Document
