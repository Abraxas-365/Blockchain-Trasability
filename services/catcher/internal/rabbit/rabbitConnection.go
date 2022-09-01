package rabbit

import (
	"errors"

	"github.com/streadway/amqp"
)

var (
	ErrConflict            = errors.New("Allready exist")
	ErrCantConnectToRabbit = errors.New("CANT CONNECT TO Rabbit")
)

type MQueue struct {
	channel *amqp.Channel
}

func NewMQueueConection(uri string) (MQueue, error) {
	conn, err := amqp.Dial(uri)
	if err != nil {
		return MQueue{}, ErrCantConnectToRabbit
	}

	ch, err := conn.Channel()
	if err != nil {
		return MQueue{}, err
	}
	return MQueue{channel: ch}, nil

}
