package ports

import "bouner/pkg/domain/models"

type Repository interface {
	CreateUser(new models.User) (bool, error)
	GetPrivateUser(document string, value interface{}) (models.User, bool, error)
	CreateCompany(company models.Company) (bool, error)
	GetCompanies() (models.Companies, error)
	GetUsers() (models.Users, error)
}
