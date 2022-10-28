package handlers

import (
	"catcher/pkg/document/application"

	"github.com/gofiber/fiber/v2"
)

type DocumentHandler interface {
	CreateDocument(c *fiber.Ctx) error
	CreateText(c *fiber.Ctx) error
	CreateTextBatch(c *fiber.Ctx) error
}

type handler struct {
	app application.DocumentApplication
}

func NewHandler(app application.DocumentApplication) DocumentHandler {
	return &handler{
		app,
	}
}
