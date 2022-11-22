package main

import (
	"bouner/pkg/application"
	"bouner/pkg/domain/service"
	"bouner/pkg/infrastructure/databse/mongo"
	"bouner/pkg/infrastructure/rest/handlers"
	"bouner/pkg/infrastructure/rest/routes"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {

	mongoUri := os.Getenv("MONGODB_URI")

	repo, _ := mongo.NewMongoRepository(mongoUri, "MagicTrust", 10)
	service := service.NewUserService(repo)
	application := application.ApplicationConstructor(repo, service)

	handler := handlers.NewHandler(application)
	app := fiber.New()
	app.Use(cors.New())
	app.Use(logger.New())
	routes.Routes(app, handler) // User routes

	app.Listen(":3001")
}
