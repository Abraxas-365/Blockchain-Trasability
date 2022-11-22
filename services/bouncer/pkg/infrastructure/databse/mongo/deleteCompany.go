package mongo

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *repository) DeleteCompany(userId string) error {
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("companies")
	_, err := collection.DeleteOne(ctx, bson.M{"id": userId})
	if err != nil {
		return err
	}

	return nil
}
