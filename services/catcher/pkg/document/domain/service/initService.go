package service

import (
	"catcher/pkg/document/domain/models"
	"catcher/pkg/document/domain/ports"
)

type Service interface {
	CanCreateDocument(new models.Document) bool
}

type service struct {
	repo ports.DocumetRepository
}

func ServiceConstructor(repo ports.DocumetRepository) Service {
	return &service{
		repo,
	}
}
