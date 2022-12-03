import { BlockchainTransaction, IBlockchainTransaction } from "../../domain/models/BlockchainTransaction";
import { IUser } from "../../domain/models/User";
import { IotaRepo } from "./initIota";

import { Client, utf8ToHex, SecretManager } from "@iota/client";

export async function postMessage(this: IotaRepo, user: IUser, data: {}): Promise<IBlockchainTransaction> {
  console.log("----POSTMESSAGE----");
  const client = new Client({
    // Insert your node URL in the .env.
    nodes: [this.uri],
    localPow: true,
  });
  const secretManager: SecretManager = { mnemonic: user.company.iota.mnemonic };

  // Create block with tagged payload
  const addresses = await client.generateAddresses(secretManager, {
    range: {
      start: 1,
      end: 2,
    },
  });
  // We prepare the transaction
  // Insert the output address and amount to spend. The amount cannot be zero.
  const blockIdAndBlock = await client.buildAndPostBlock(secretManager, {
    tag: utf8ToHex("MagicTrust"),
    data: utf8ToHex(JSON.stringify(data)),
    output: {
      address: addresses[0],
      amount: "1000000",
    },
  });

  console.log("data", data);

  return new BlockchainTransaction(blockIdAndBlock[0], JSON.stringify(blockIdAndBlock[1]), "I");
}
