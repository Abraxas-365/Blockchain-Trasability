package ports

import (
	"catcher/pkg/document/domain/events"
	"catcher/pkg/document/domain/models"
)

type DocumetRepository interface {
	Create(models.Document) (events.EventInfo, bool, error)
}
