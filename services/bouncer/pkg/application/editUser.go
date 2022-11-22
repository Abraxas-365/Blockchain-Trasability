package application

import "bouner/pkg/domain/models"

func (a *application) EditUser(edit models.User) error {

	if err := a.repo.EditUser(edit); err != nil {
		return err
	}

	return nil
}
