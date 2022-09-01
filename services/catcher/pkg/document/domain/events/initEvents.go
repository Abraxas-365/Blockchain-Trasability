package events

import (
	"time"

	"github.com/google/uuid"
)

type EventInterface interface {
	Name() string
	Exchange() string
	Routing() string
}

type EventInfo struct {
	ID        uuid.UUID      `bson:"_id,omitempty" json:"id"`
	Name      string         `bson:"name" json:"name"`
	Exchange  string         `bson:"exchange" json:"exchange"`
	Routing   string         `bson:"routing" json:"routing"`
	TimeStamp time.Time      `bson:"time_stamp,omitempty" json:"time_stamp"`
	Event     EventInterface `bson:"event,omitempty" json:"event"`
}

type EventsInfo []EventInfo

func NewEvent(event EventInterface) EventInfo {
	return EventInfo{
		ID:        uuid.New(),
		Name:      event.Name(),
		Exchange:  event.Exchange(),
		Routing:   event.Routing(),
		TimeStamp: time.Now(),
		Event:     event,
	}
}
