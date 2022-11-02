package application

import "bouner/pkg/domain/models"

func (a *application) GetUsers() (models.Users, error) {
	users, err := a.repo.GetUsers()
	if err != nil {
		return nil, err
	}

	return users, nil

}
