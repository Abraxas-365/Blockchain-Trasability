package service

import (
	"bouner/pkg/domain/models"
	"bouner/pkg/domain/ports"
	"errors"
)

var (
	ErrUnauthorized = errors.New("Unauthorized")
	ErrUserNotFound = errors.New("User not found")
	ErrEmptyParams  = errors.New("Empty parameters")
	ErrUserExists   = errors.New("User already exists")
	ErrBadPassword  = errors.New("Bad Password Param")
)

type Service interface {
	Auth(email string, password models.Password) (models.User, error)
	CanUserBeCreated(user models.User) (bool, error)
}

type service struct {
	repo ports.Repository
}

func NewUserService(repo ports.Repository) Service {
	return &service{
		repo,
	}
}
