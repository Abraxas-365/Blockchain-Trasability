import { BlockchainTransaction } from "../../domain/models/BlockchainTransaction";
import { IUser } from "../../domain/models/User";
import { LacchainRepo } from "./initLacchain";

export async function postMessage(this: LacchainRepo, user: IUser, data: {}): Promise<any> {
  console.log("getting cout account");
  const transactionCount = await this.web3.eth.getTransactionCount(user.company.lacchain.wallet, "pending");
  console.log("---- transactionCount ----", transactionCount);
  const dataWeb3 = this.web3.utils.fromAscii(JSON.stringify(data));
  const valueInEther = 0;

  const args = {
    nonce: this.web3.utils.numberToHex(transactionCount),
    from: user.company.lacchain.wallet,
    to: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
    value: this.web3.utils.numberToHex(this.web3.utils.toWei(valueInEther.toString(), "ether")),
    gasPrice: this.web3.utils.numberToHex(0),
    gasLimit: this.web3.utils.numberToHex(50000000),
    data: dataWeb3,
  };
  const { rawTransaction } = await this.web3.eth.accounts.signTransaction(args, user.company.lacchain.key);

  console.log("-->rawTransaction: ", rawTransaction);

  let transactionId = await this.web3.eth.sendSignedTransaction(rawTransaction);
  console.log(transactionId);
  return new BlockchainTransaction(transactionId, "", "L");
}
