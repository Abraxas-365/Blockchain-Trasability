package handlers

import (
	"catcher/internal/auth"
	"catcher/pkg/document/domain/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) CreateTextBatch(c *fiber.Ctx) error {
	userTokenData, err := auth.ExtractTokenMetadata(c)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	newDocuments := new(models.Documents)
	if err := c.BodyParser(&newDocuments); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}
	for _, newDocument := range *newDocuments {
		newDocument.New(userTokenData.ID, "T")
	}
	if err := h.app.CreateInBatch(*newDocuments); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
		})
	}

	return c.SendStatus(201)
}
