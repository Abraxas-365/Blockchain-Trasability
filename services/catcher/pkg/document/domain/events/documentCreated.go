package events

type DocumentCreated struct {
	UserId     string `json:"user_id"`
	DocumentId string `json:"document_id"`
	Data       string `json:"data"`
}

func (u DocumentCreated) Name() string {
	return "event.transaction.created"
}
func (u DocumentCreated) Exchange() string {
	return "Transaction"
}
func (u DocumentCreated) Routing() string {
	return "created"
}
