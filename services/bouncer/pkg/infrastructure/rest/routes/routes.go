package routes

import (
	"bouner/pkg/infrastructure/rest/handlers"

	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App, handler handlers.Handler) {
	bouncer := app.Group("/api/bouncer")
	/*Register user*/
	bouncer.Post("/register", handler.CreateUser)
	/*Create company*/
	bouncer.Post("/create/company", handler.CreateCompany)

	/*Get All companies*/
	bouncer.Get("/get/company", handler.GetCompanies)

	/*Get All users*/
	bouncer.Get("/get/users", handler.GetUsers)

	/*Edit User*/
	bouncer.Put("/company/edit/", handler.EditUser)

	/*Edit conpany*/
	bouncer.Put("/company/edit/", handler.EditCompany)

	/*Delete conpany*/
	bouncer.Delete("/company/:id", handler.DeleteCompany)

	/*Delete user*/
	bouncer.Delete("/user/:id", handler.DeleteUser)
}
