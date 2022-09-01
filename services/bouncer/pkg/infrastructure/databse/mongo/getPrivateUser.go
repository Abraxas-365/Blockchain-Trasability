package mongo

import (
	"bouner/pkg/domain/models"
	"context"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *repository) GetPrivateUser(document string, value interface{}) (models.User, bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection("users")
	var user models.User
	filter := bson.M{document: value}
	if err := collection.FindOne(ctx, filter).Decode(&user); err != nil {
		return models.User{}, false, ErrUserNotFound
	}
	return user, true, nil
}
