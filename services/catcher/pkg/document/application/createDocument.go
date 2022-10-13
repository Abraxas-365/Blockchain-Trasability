package application

import (
	"catcher/pkg/document/domain/models"
)

func (a *application) Create(doc models.Document) error {
	//check if thos user can create transaction
	if ok := a.service.CanCreateDocument(doc); !ok {
		//return nothing because it already exist
		return nil
	}
	//TODO:si el docuemnto existe poner al usuario dentro del array de usuarios

	//send to queue
	if event, check, err := a.repo.Create(doc); !check {
		return err
	} else {
		a.messaqueue.PublishEvent(event)
	}
	return nil
}
