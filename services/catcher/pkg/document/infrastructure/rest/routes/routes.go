package routes

import (
	"catcher/internal/auth"
	"catcher/pkg/document/infrastructure/rest/handlers"

	"github.com/gofiber/fiber/v2"
)

func DocumentRoute(app *fiber.App, handler handlers.DocumentHandler) {
	users := app.Group("/api/catcher")
	users.Post("/create", auth.JWTProtected(), handler.CreateDocument)
	users.Post("/create-batch", auth.JWTProtected(), handler.CreateTextBatch)
	users.Post("/create-single", auth.JWTProtected(), handler.CreateText)
}
