package main

import (
	rabbitMq "catcher/internal/rabbit"
	"catcher/pkg/document/application"
	"catcher/pkg/document/infrastructure/database/mongo"
	"catcher/pkg/document/infrastructure/rabbit"
	"catcher/pkg/document/infrastructure/rest/handlers"
	"catcher/pkg/document/infrastructure/rest/routes"
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	mongoUri := os.Getenv("MONGODB_URI")
	mqUri := os.Getenv("MQ_URI")

	mq, err := rabbitMq.NewMQueueConection(mqUri)
	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}
	documentMq := rabbit.NewMQPublisher(mq)

	repo, _ := mongo.NewMongoRepository(mongoUri, "MagicTrust", 10, "documents")
	application := application.DocumentApplicationConstructor(repo, documentMq)

	handler := handlers.NewHandler(application)
	app := fiber.New()
	app.Use(logger.New())
	routes.DocumentRoute(app, handler) //User routes

	app.Listen(":3002")
}
