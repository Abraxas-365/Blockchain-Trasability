import { IBlockchainTransaction } from "../models/BlockchainTransaction";
import { IUser } from "../models/User";

export default interface BlockchainRepository {
  postMessage(user: IUser, data: string): Promise<IBlockchainTransaction>;
}
