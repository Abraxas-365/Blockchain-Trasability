package application

import "bouner/pkg/domain/models"

func (a *application) EditCompany(edit models.Company) error {

	if err := a.repo.EditCompany(edit); err != nil {
		return err
	}

	return nil
}
