package application

import (
	"bouner/internal/auth"
	"bouner/pkg/domain/models"
)

func (r *application) LoginUser(email string, password string) (models.UserQuery, string, error) {
	user, err := r.service.Auth(email, models.Password(password))
	if err != nil {
		return models.UserQuery{}, "", err
	}
	token, err := auth.GereteToken(user.Email, user.Id, int(user.Rol))
	if err != nil {
		return models.UserQuery{}, "", err
	}

	return user.ToPublic(), token, nil
}
