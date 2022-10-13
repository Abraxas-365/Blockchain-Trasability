package mongo

import (
	"context"
	"reporter/pkg/report/domain/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func (r *repository) GetReport(key string, value interface{}) (models.Report, bool, error) {

	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection(r.collection)
	var report models.Report
	filter := bson.M{key: value}
	if err := collection.FindOne(ctx, filter).Decode(&report); err != nil {
		if err == mongo.ErrNoDocuments {
			// This error means your query did not match any documents.
			return models.Report{}, false, nil
		}
		return models.Report{}, true, err
	}
	return report, true, nil
}
