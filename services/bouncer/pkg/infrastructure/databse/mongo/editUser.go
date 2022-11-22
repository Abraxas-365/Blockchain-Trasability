package mongo

import (
	"bouner/pkg/domain/models"
	"context"
)

func (r *repository) EditUser(edit models.User) error {

	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("users")
	_, err := collection.UpdateByID(ctx, edit.Id, edit)
	if err != nil {
		return err
	}

	return nil
}
