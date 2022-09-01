package handlers

import (
	"bouner/pkg/domain/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) CreateCompany(c *fiber.Ctx) error {
	newCompany := new(models.Company)
	if err := c.BodyParser(&newCompany); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}
	if check, err := h.app.CreateCompany(newCompany.New()); !check {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
		})

	} else if err != nil {
		return c.SendStatus(500)
	}
	return c.SendStatus(201)
}
