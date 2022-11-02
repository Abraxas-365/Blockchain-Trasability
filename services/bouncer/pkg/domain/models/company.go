package models

import "github.com/google/uuid"

type Company struct {
	ID          string         `bson:"_id,omitempty" json:"id"`
	Name        string         `bson:"name" json:"name"`
	Status      string         `bson:"status" json:"status"`
	Tecnologies string         `bson:"tecnologies" json:"tecnologies"`
	Iota        IotaWallet     `bson:"iota" json:"iota"`
	Lacchain    LacchainWallet `bson:"lacchain" json:"lacchain"`
}

type Companies []*Company

func (c *Company) New() Company {
	c.ID = uuid.New().String()
	return *c
}
