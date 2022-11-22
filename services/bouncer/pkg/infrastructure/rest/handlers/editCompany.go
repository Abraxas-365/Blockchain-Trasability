package handlers

import (
	"bouner/pkg/domain/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) EditCompany(c *fiber.Ctx) error {

	editCompany := new(models.Company)

	if err := c.BodyParser(&editCompany); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}

	if err := h.app.EditCompany(*editCompany); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			//TODO: make error tipe depending on err
			"error":   fiber.ErrBadRequest.Message,
			"message": err.Error(),
		})
	}

	return c.SendStatus(201)
}
