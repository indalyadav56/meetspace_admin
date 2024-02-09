package handlers

import (
	"super_admin/config"
	"super_admin/models"

	"github.com/gofiber/fiber/v2"
)

func GetAllUsers(ctx *fiber.Ctx) error{
	return nil
}


func DeleteUser(ctx *fiber.Ctx) error{
	return nil
	
}

func GetAllClients(ctx *fiber.Ctx) error {
	var clients []models.Client
	config.DB.Find(&clients)
	ctx.JSON(clients)
	return nil
}

func DeleteClient(ctx *fiber.Ctx) error{
	ctx.JSON("awerawer")
	return nil
	
}