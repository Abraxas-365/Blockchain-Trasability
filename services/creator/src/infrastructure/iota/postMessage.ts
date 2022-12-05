import { BlockchainTransaction, IBlockchainTransaction } from "../../domain/models/BlockchainTransaction";
import { IUser } from "../../domain/models/User";
import { IotaRepo } from "./initIota";

import { Client, utf8ToHex, SecretManager, MnemonicSecretManager } from "@iota/client";

export async function postMessage(this: IotaRepo, user: IUser, data: {}): Promise<IBlockchainTransaction> {
  console.log("----POSTMESSAGE----");
  const client = new Client({
    // Insert your node URL in the .env.
    nodes: [this.uri],
    localPow: true,
  });
  const mnemonic_manager: MnemonicSecretManager = {
    mnemonic: user.company.iota.mnemonic,
  };
  const secretManager: SecretManager = mnemonic_manager;
  console.log("secretManager:", secretManager);

  // Create block with tagged payload
  const addresses = await client.generateAddresses(secretManager, {
    range: {
      start: 1,
      end: 2,
    },
  });
  console.log("address:", addresses);
  // We prepare the transaction
  // Insert the output address and amount to spend. The amount cannot be zero.
  try {
    const blockIdAndBlock = await client.buildAndPostBlock(secretManager, {
      tag: utf8ToHex("MagicTrust"),
      data: utf8ToHex("Tangle"),
      // output: {
      //   address: addresses[0],
      //   amount: "2000000",
      // },
    });
    console.log("data", data);
    return new BlockchainTransaction(blockIdAndBlock[0], JSON.stringify(blockIdAndBlock[1]), "I");
  } catch (err: any) {
    console.log("error:", err);
  }
  return new BlockchainTransaction("", "", "I");
}
