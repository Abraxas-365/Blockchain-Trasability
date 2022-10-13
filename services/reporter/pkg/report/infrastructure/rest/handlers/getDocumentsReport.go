package handlers

import (
	"reporter/internal/auth"
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) GetDocumentsReport(c *fiber.Ctx) error {
	userTokenData, err := auth.ExtractTokenMetadata(c)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	reports, err := h.app.GetDocumentsReport(userTokenData.ID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     err.Error(),
		})
	}

	return c.Status(200).JSON(reports)
}
