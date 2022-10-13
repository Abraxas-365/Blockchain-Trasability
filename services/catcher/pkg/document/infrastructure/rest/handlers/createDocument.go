package handlers

import (
	"catcher/internal/auth"
	"catcher/pkg/document/domain/models"
	"crypto/md5"
	"encoding/hex"
	"io"
	"time"

	"github.com/gofiber/fiber/v2"
)

func (h *handler) CreateDocument(c *fiber.Ctx) error {
	userTokenData, err := auth.ExtractTokenMetadata(c)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	newDocument := new(models.Document)
	formHeader, err := c.FormFile("file")
	if err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}

	//get file from header
	formFile, err := formHeader.Open()
	if err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}
	md5 := md5.New()
	if _, err := io.Copy(md5, formFile); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
			"message":   err.Error(),
		})
	}
	newDocument.Data = hex.EncodeToString(md5.Sum(nil))

	if err := h.app.Create(newDocument.New(userTokenData.ID, "D")); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"timestamp": time.Now(),
			"error":     fiber.ErrBadRequest.Message,
		})
	}

	return c.SendStatus(201)
}
