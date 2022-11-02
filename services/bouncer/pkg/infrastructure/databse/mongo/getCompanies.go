package mongo

import (
	"bouner/pkg/domain/models"
	"context"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *repository) GetCompanies() (models.Companies, error) {
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("users")
	var companies models.Companies
	currsor, err := collection.Find(ctx, bson.D{})
	if err != nil {
		return nil, err
	}

	if err := currsor.All(ctx, &companies); err != nil {
		return nil, err
	}

	return companies, nil
}
