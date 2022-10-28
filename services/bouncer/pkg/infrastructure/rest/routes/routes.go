package routes

import (
	"bouner/pkg/infrastructure/rest/handlers"

	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App, handler handlers.Handler) {
	users := app.Group("/api/bouncer")
	/*Register user*/
	users.Post("/register", handler.CreateUser)
	/*Create company*/
	users.Post("/create/company", handler.CreateCompany)
}
