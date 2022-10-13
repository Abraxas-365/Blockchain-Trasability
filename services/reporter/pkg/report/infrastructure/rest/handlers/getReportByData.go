package handlers

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) GetReportByData(c *fiber.Ctx) error {
	body := struct {
		Data string `json:"data"`
	}{}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     err.Error(),
		})
	}
	report, check, err := h.app.GetReportByData(body.Data)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     err.Error(),
		})

	}
	if !check {
		return c.Status(404).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     err.Error(),
		})
	}
	return c.Status(200).JSON(report)

}
