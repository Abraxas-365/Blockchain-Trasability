package ports

import "catcher/pkg/document/domain/events"

type DocumentMessageQueue interface {
	PublishEvent(events.EventInfo) error
	// PublishEvents(events.EventsInfo) error
}
