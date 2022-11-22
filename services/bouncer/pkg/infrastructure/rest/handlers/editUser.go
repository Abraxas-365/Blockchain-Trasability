package handlers

import (
	"bouner/pkg/domain/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) EditUser(c *fiber.Ctx) error {

	editUser := new(models.User)

	if err := c.BodyParser(&editUser); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}

	if err := h.app.EditUser(*editUser); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			//TODO: make error tipe depending on err
			"error":   fiber.ErrBadRequest.Message,
			"message": err.Error(),
		})
	}

	return c.SendStatus(201)
}
