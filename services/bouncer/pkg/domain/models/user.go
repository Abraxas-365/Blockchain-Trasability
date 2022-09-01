package models

import "github.com/google/uuid"

type User struct {
	Id       string   `bson:"_id,omitempty" json:"id"`
	Rol      Rol      `bson:"roles" json:"roles"`
	Email    string   `bson:"email" json:"email"`
	Name     string   `bson:"name" json:"name"`
	Company  string   `bson:"company" json:"company"`
	Password Password `bson:"password" json:"password"`
}

type UserQuery struct {
	Id      string `bson:"_id,omitempty" json:"id"`
	Email   string `bson:"email" json:"email"`
	Name    string `bson:"name" json:"name"`
	Company string `bson:"company" json:"company"`
}

func (u *User) New() User {
	u.Id = uuid.New().String()
	u.Rol = 0

	return *u
}

func (u *User) ToPublic() UserQuery {
	return UserQuery{
		Id:    u.Id,
		Email: u.Email,
		Name:  u.Name,
	}

}

func (u *User) IsValid() bool {
	// switch true {
	// case len(u.Name) == 0 || u.Name == "":
	// 	return false
	// case len(u.Nickname) == 0:
	// 	return false
	// }

	if !u.Password.Validate() {
		return false
	}
	return true
}
