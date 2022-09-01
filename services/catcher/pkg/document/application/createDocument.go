package application

import "catcher/pkg/document/domain/models"

func (a *application) Create(doc models.Document) error {
	if event, check, err := a.repo.Create(doc); !check {
		return err
	} else {
		a.messaqueue.PublishEvent(event)
	}
	return nil
}
