package mongo

import (
	"catcher/pkg/document/domain/events"
	"catcher/pkg/document/domain/models"
	"context"
)

func (r *repository) Create(new models.Document) (events.EventInfo, bool, error) {

	ctx, cancel := context.WithTimeout(context.Background(), r.timeout)
	defer cancel()
	collection := r.client.Database(r.database).Collection(r.collection)
	_, err := collection.InsertOne(ctx, new)
	if err != nil {
		return events.EventInfo{}, false, err
	}
	return events.NewEvent(events.DocumentCreated{
		UserId:     new.UserID,
		DocumentId: new.ID,
		Data:       new.Data,
	}), true, nil
}
