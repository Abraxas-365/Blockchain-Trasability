package mongo

import (
	"bouner/pkg/domain/models"
	"context"
)

func (r *repository) CreateCompany(new models.Company) (bool, error) {

	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("companies")
	_, err := collection.InsertOne(ctx, new)
	if err != nil {
		return false, err
	}

	return true, nil
}
