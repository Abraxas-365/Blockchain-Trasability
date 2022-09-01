package rabbit

import (
	"catcher/internal/rabbit"
	"catcher/pkg/document/domain/ports"
)

type mqPublisher struct {
	publisher rabbit.MQueue
}

func NewMQPublisher(mq rabbit.MQueue) ports.DocumentMessageQueue {
	return &mqPublisher{
		mq,
	}
}
