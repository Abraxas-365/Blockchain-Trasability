package handlers

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) DeleteUser(c *fiber.Ctx) error {
	userId := c.Params("id")
	if err := h.app.DeleteUser(userId); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     err,
		})
	}
	return c.SendStatus(201)
}
