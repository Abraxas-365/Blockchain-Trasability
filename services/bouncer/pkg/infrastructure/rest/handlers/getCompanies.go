package handlers

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) GetCompanies(c *fiber.Ctx) error {
	companies, err := h.app.GetCompanies()
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
		})

	} else if err != nil {
		return c.SendStatus(500)
	}
	return c.Status(200).JSON(companies)
}
