package ports

import (
	"reporter/pkg/report/domain/models"
)

type ReportRepo interface {
	GetAllReportsByUserAndType(key string, value interface{}, typeOfDocument string) (models.Reports, error)
	GetReport(key string, value interface{}) (models.Report, bool, error)
}
