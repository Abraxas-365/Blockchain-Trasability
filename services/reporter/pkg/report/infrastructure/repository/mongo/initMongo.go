package mongo

import (
	"context"
	"errors"
	"reporter/pkg/report/domain/ports"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

type repository struct {
	client     *mongo.Client
	database   string
	collection string
	timeout    time.Duration
}

func newMongoClient(mongoURL string, mongoTimeout int) (*mongo.Client, error) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Duration(mongoTimeout)*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURL))
	if err != nil {
		return nil, err
	}
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		return nil, err
	}
	return client, nil
}

func NewMongoRepository(mongoURL, mongoDB string, mongoTimeout int, collection string) (ports.ReportRepo, error) {
	repo := &repository{
		timeout:    time.Duration(mongoTimeout) * time.Second,
		database:   mongoDB,
		collection: collection,
	}
	client, err := newMongoClient(mongoURL, mongoTimeout)
	if err != nil {
		return nil, errors.New("repository.NewMongoRepo")
	}
	repo.client = client
	return repo, nil
}
