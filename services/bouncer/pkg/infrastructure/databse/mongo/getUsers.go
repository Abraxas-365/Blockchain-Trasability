package mongo

import (
	"bouner/pkg/domain/models"
	"context"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *repository) GetUsers() (models.Users, error) {
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("users")
	var users models.Users
	currsor, err := collection.Find(ctx, bson.D{})
	if err != nil {
		return nil, err
	}

	if err := currsor.All(ctx, &users); err != nil {
		return models.Users{}, err
	}

	return users, nil
}
