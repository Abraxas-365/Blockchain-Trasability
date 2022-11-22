package mongo

import (
	"bouner/pkg/domain/models"
	"context"
)

func (r *repository) EditCompany(edit models.Company) error {
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("companies")
	_, err := collection.UpdateByID(ctx, edit.ID, edit)
	if err != nil {
		return err
	}

	return nil
}
