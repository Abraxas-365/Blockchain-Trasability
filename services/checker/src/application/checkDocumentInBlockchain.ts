import { DocumentCreated } from "../domain/events/documentCreated";
import { EventInfo } from "../domain/events/initEvent";
import Application from "./initApp";

export async function CheckDocumetInBlockchain(this: Application): Promise<any> {
    //get pending documents
    let documents = await this.dataBaseRepository.getDocuments("status", "P")
    for (let index = 0; index < documents.length; index++) {
        let doc = documents[index];
        //check if at least 30 sec have pased
        let now = new Date();
        now.setSeconds(now.getSeconds() - 30)
        if (doc.upload_date.getTime() <= now.getTime()) {
            let transaction = await this.iotaRepository.getBlockInfo(doc.transaction_id)
            if (transaction.ledgerInclusionState != "included") {
                //resend to the queue
                this.messageQueue.postEvent(new EventInfo(new DocumentCreated(doc.user_id, doc._id, doc.data)))
            } else {
                this.dataBaseRepository.updateDocument("_id", doc._id, "C")
            }
        }
    }
}
