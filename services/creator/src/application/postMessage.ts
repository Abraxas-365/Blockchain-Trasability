import Application from "./initApp";


export async function postMessage(this: Application, userId: string, data: string, documentId: string): Promise<any> {
    // get user from database
    let user = await this.dataBaseRepository.getUserById(userId);
    // //send to iota
    let TransactionResult = user.company.tecnologies == "I" ?
        await this.iotaRepository.postMessage(user, data)
        :
        await this.lacchainRepository.postMessage(user, data)

    await this.dataBaseRepository.updateTransaction(documentId, TransactionResult);

    // //send event of transaction posted
    // this.messageQueue.postEvent(new EventInfo(new TransactionPosted(user.id, transactionId, iotaTransactionResult.messageId)))

}
