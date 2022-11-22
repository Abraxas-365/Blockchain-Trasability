package application

import "bouner/pkg/domain/models"

func (a *application) CreateCompany(company models.Company) (bool, error) {
	if check, err := a.repo.CreateCompany(company); !check {
		return false, err
	}

	return true, nil
}
