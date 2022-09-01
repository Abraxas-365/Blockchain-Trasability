import { IBlockchainTransaction } from "../models/BlockchainTransaction";
import { IUser } from "../models/User"

export default interface DataBaseRepository {
    updateTransaction(documentId: string, transactionData: IBlockchainTransaction): Promise<any>;
    getUserById(userId: string): Promise<IUser>;
}
