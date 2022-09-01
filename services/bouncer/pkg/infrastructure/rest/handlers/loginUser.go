package handlers

import "github.com/gofiber/fiber/v2"

func (h *handler) LoginUser(c *fiber.Ctx) error {
	body := struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}{}
	if err := c.BodyParser(&body); err != nil {
		return fiber.ErrBadRequest
	}
	user, token, err := h.app.LoginUser(body.Email, body.Password)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{"user": user, "token": token})
}
