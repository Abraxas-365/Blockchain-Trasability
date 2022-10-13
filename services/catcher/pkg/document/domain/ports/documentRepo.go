package ports

import (
	"catcher/pkg/document/domain/events"
	"catcher/pkg/document/domain/models"
)

type DocumetRepository interface {
	Create(models.Document) (events.EventInfo, bool, error)
	GetDocumentWithUserId(key string, value interface{}, user_id string) (models.Document, bool, error)
	GetDocument(key string, value interface{}) (models.Document, bool, error)
}
