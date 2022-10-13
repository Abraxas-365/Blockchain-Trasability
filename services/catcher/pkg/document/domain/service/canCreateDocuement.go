package service

import "catcher/pkg/document/domain/models"

func (s *service) CanCreateDocument(new models.Document) bool {
	//check if user already hace document
	if _, exist, _ := s.repo.GetDocumentWithUserId("data", new.Data, new.UserID); exist {
		return false
	}
	return true
}
