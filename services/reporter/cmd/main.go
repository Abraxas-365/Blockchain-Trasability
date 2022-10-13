package main

import (
	"os"
	"reporter/pkg/report/application"
	"reporter/pkg/report/infrastructure/repository/mongo"
	"reporter/pkg/report/infrastructure/rest/handlers"
	"reporter/pkg/report/infrastructure/rest/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {

	mongoUri := os.Getenv("MONGODB_URI")

	repo, _ := mongo.NewMongoRepository(mongoUri, "MagicTrust", 10, "documents")
	application := application.ApplicationConstructor(repo)

	handler := handlers.HandlerConstructor(application)
	app := fiber.New()
	app.Use(cors.New())
	app.Use(logger.New())
	routes.ReportRoute(app, handler)

	app.Listen(":3004")
}
