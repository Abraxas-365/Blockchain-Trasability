package application

import "reporter/pkg/report/domain/models"

func (a *application) GetReportByData(value string) (models.Report, bool, error) {
	report, exist, err := a.repo.GetReport("data", value)
	if err != nil {
		return models.Report{}, false, err
	}
	if exist {
		return report, true, nil
	}

	return models.Report{}, false, nil

}
