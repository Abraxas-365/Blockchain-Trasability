package models

//iota
type IotaWallet struct {
	Mnemonic string `bson:"mnemonic" json:"mnemonic"`
	// Primary   Wallet `bson:"primary" json:"primary"`
	// Secondary Wallet `bson:"secondary" json:"secondary"`
}

type Wallet struct {
	Seed   string `bson:"seed" json:"seed"`
	Wallet string `bson:"wallet" json:"wallet"`
}

//Lacchain

type LacchainWallet struct {
	Wallet string `bson:"wallet" json:"wallet"`
	Key    string `bson:"key" json:"key"`
}

//Rol

type Rol int

func (r Rol) IsAdmin() bool {
	if r == 3 {
		return true
	}
	return false
}

//Password
//

type Password string

func (p Password) Validate() bool {
	//TODO: make more validations
	switch true {
	case len(p) < 7:
		return false
	}
	return true
}

func (p Password) EqualTo(other Password) bool {
	return p == other
}

//Authentication

type Authentication struct {
	TwoFactorAuthentication TwoFactorAuthentication `bson:"twoFactorAuthentication" json:"twoFactorAuthentication"`
}

type TwoFactorAuthentication struct {
	Active bool   `bson:"active" json:"active"`
	Token  string `bson:"token" json:"token"`
}
