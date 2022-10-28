package application

import "catcher/pkg/document/domain/models"

func (a *application) CreateInBatch(docs models.Documents) error {

	for _, doc := range docs {

		if ok := a.service.CanCreateDocument(*doc); !ok {
			//continue because it already exist
			continue
		}

		//send to queue
		if event, check, err := a.repo.Create(*doc); !check {
			return err
		} else {
			a.messaqueue.PublishEvent(event)
		}

	}
	//check if thos user can create transaction
	return nil
}
