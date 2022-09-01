package application

import (
	"catcher/pkg/document/domain/models"
	"catcher/pkg/document/domain/ports"
)

type DocumentApplication interface {
	Create(doc models.Document) error
}

type application struct {
	repo       ports.DocumetRepository
	messaqueue ports.DocumentMessageQueue
}

func DocumentApplicationConstructor(repo ports.DocumetRepository, messaqueue ports.DocumentMessageQueue) DocumentApplication {
	return &application{
		repo,
		messaqueue,
	}
}
