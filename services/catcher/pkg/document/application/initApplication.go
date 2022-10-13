package application

import (
	"catcher/pkg/document/domain/models"
	"catcher/pkg/document/domain/ports"
	"catcher/pkg/document/domain/service"
)

type DocumentApplication interface {
	Create(doc models.Document) error
}

type application struct {
	repo       ports.DocumetRepository
	messaqueue ports.DocumentMessageQueue
	service    service.Service
}

func DocumentApplicationConstructor(repo ports.DocumetRepository, messaqueue ports.DocumentMessageQueue, service service.Service) DocumentApplication {
	return &application{
		repo,
		messaqueue,
		service,
	}
}
