package mongo

import (
	"catcher/pkg/document/domain/models"
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func (r *repository) GetDocumentWithUserId(key string, value interface{}, userId string) (models.Document, bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection(r.collection)
	var document models.Document
	filter := bson.M{
		key:       value,
		"user_id": userId,
	}
	if err := collection.FindOne(ctx, filter).Decode(&document); err != nil {
		if err == mongo.ErrNoDocuments {
			// This error means your query did not match any documents.
			return models.Document{}, false, nil
		}
		return models.Document{}, true, err
	}
	return document, true, nil
}
