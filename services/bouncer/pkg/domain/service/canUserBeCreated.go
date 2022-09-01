package service

import (
	"bouner/pkg/domain/models"
	"fmt"
)

func (s *service) CanUserBeCreated(new models.User) (bool, error) {
	//TODO: applay the logic of chaeck email , check pass , etc
	if !new.IsValid() {
		fmt.Println("ES INVALIDO EL PASS")
		return false, nil
	}
	_, exist, _ := s.repo.GetPrivateUser("email", new.Email)
	if exist {
		fmt.Println("EXISTEEE")
		return false, nil
	}

	fmt.Println("SI SE PUEDE ")
	return true, nil
}
