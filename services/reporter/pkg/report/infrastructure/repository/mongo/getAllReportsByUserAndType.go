package mongo

import (
	"context"
	"reporter/pkg/report/domain/models"

	"go.mongodb.org/mongo-driver/bson"
)

func (r *repository) GetAllReportsByUserAndType(key string, value interface{}, typeOfDocument string) (models.Reports, error) {
	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection(r.collection)

	var projects models.Reports
	//filter key(members or admins)
	filter := bson.D{
		{key, value},
		{"type", typeOfDocument},
	}
	cursor, err := collection.Find(ctx, filter)
	if err != nil {
		return models.Reports{}, err
	}

	if err := cursor.All(ctx, &projects); err != nil {
		return models.Reports{}, err
	}
	return projects, nil
}
