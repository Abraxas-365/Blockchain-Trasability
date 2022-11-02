package handlers

import (
	"bouner/pkg/application"

	"github.com/gofiber/fiber/v2"
)

type Handler interface {
	CreateUser(c *fiber.Ctx) error
	CreateCompany(c *fiber.Ctx) error
	GetCompanies(c *fiber.Ctx) error
}

type handler struct {
	app application.Application
}

func NewHandler(app application.Application) Handler {
	return &handler{
		app,
	}
}
