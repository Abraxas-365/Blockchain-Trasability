package rabbit

import (
	"fmt"

	"github.com/streadway/amqp"
)

func (mq MQueue) PublishToExchange(exchange string, routingKey string, data []byte) error {

	err := mq.channel.ExchangeDeclare(
		exchange,
		"direct",
		true,
		false,
		false,
		false,
		nil,
	)
	if err != nil {
		fmt.Println(err)
		return err
	}
	err = mq.channel.Publish(
		exchange,   // exchange
		routingKey, // routing key
		false,      // mandatory
		false,      // immediate
		amqp.Publishing{
			ContentType: "application/json",
			Body:        []byte(data),
		})
	return nil
}
