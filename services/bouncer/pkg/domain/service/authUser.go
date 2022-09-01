package service

import "bouner/pkg/domain/models"

func (r *service) Auth(email string, password models.Password) (models.User, error) {

	user, check, err := r.repo.GetPrivateUser("email", email)
	if !check {
		return models.User{}, err
	}
	if !password.EqualTo(user.Password) {
		return models.User{}, ErrUnauthorized
	}

	return user, nil

}
