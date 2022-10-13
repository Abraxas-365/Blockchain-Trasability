package handlers

import (
	"reporter/pkg/report/application"

	"github.com/gofiber/fiber/v2"
)

type Handler interface {
	GetDocumentsReport(*fiber.Ctx) error
	GetReportByData(*fiber.Ctx) error
}

type handler struct {
	app application.Application
}

func HandlerConstructor(app application.Application) Handler {
	return &handler{
		app,
	}
}
