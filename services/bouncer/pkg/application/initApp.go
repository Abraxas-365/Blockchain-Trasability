package application

import (
	"bouner/pkg/domain/models"
	"bouner/pkg/domain/ports"
	"bouner/pkg/domain/service"
)

type Application interface {
	CreateUser(user models.User) (bool, error)
	CreateCompany(company models.Company) (bool, error)
}

type application struct {
	repo    ports.Repository
	service service.Service
}

func ApplicationConstructor(repo ports.Repository, service service.Service) Application {
	return &application{
		repo:    repo,
		service: service,
	}
}
