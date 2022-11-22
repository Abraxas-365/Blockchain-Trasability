package handlers

import (
	"bouner/pkg/application"

	"github.com/gofiber/fiber/v2"
)

type Handler interface {
	CreateUser(c *fiber.Ctx) error
	CreateCompany(c *fiber.Ctx) error
	GetCompanies(c *fiber.Ctx) error
	GetUsers(c *fiber.Ctx) error
	EditUser(c *fiber.Ctx) error
	EditCompany(c *fiber.Ctx) error
	DeleteUser(c *fiber.Ctx) error
	DeleteCompany(c *fiber.Ctx) error
}

type handler struct {
	app application.Application
}

func NewHandler(app application.Application) Handler {
	return &handler{
		app,
	}
}
