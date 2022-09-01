package application

import "bouner/pkg/domain/models"

func (a *application) CreateUser(new models.User) (bool, error) {

	if can, err := a.service.CanUserBeCreated(new); !can {
		return false, err
	}
	if worked, err := a.repo.CreateUser(new); !worked {
		return false, err
	}
	return true, nil
}
