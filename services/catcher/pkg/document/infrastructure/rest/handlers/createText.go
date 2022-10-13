package handlers

import (
	"catcher/internal/auth"
	"catcher/pkg/document/domain/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) CreateText(c *fiber.Ctx) error {
	userTokenData, err := auth.ExtractTokenMetadata(c)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	newDocument := new(models.Document)
	if err := c.BodyParser(&newDocument); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}
	if err := h.app.Create(newDocument.New(userTokenData.ID, "T")); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
		})
	}

	return c.SendStatus(201)
}
