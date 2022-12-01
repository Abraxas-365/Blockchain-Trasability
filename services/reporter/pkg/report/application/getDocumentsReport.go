package application

import (
	"reporter/pkg/report/domain/models"
)

func (a *application) GetDocumentsReport(userId string) (models.Reports, error) {
	return a.repo.GetAllReportsByUserAndType("user_id", userId, "T")
}
