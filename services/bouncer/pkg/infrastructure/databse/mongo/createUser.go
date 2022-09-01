package mongo

import (
	"bouner/pkg/domain/models"
	"context"
)

func (r *repository) CreateUser(new models.User) (bool, error) {

	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("users")
	_, err := collection.InsertOne(ctx, new)
	if err != nil {
		return false, err
	}

	return true, nil
}
