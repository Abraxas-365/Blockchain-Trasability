package routes

import (
	"reporter/internal/auth"
	"reporter/pkg/report/infrastructure/rest/handlers"

	"github.com/gofiber/fiber/v2"
)

func ReportRoute(app *fiber.App, handler handlers.Handler) {
	users := app.Group("/api/reports")
	/*update user*/
	users.Get("/", auth.JWTProtected(), handler.GetDocumentsReport)
	users.Get("/bydata", handler.GetReportByData)
}
