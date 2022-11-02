package application

import "bouner/pkg/domain/models"

func (a *application) GetCompanies() (models.Companies, error) {

	companies, err := a.repo.GetCompanies()
	if err != nil {
		return nil, err
	}

	return companies, nil

}
