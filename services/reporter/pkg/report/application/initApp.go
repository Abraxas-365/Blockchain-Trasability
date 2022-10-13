package application

import (
	"reporter/pkg/report/domain/models"
	"reporter/pkg/report/domain/ports"
)

type Application interface {
	GetDocumentsReport(userId string) (models.Reports, error)
	GetReportByData(value string) (models.Report, bool, error)
}

type application struct {
	repo ports.ReportRepo
}

func ApplicationConstructor(repo ports.ReportRepo) Application {
	return &application{
		repo,
	}
}
