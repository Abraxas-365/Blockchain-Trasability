
import type { IBlockMetadata } from '@iota/types';
import { IotaRepo } from "./initIota";

import { Client, utf8ToHex } from '@iota/client';

export async function getBlockInfo(this: IotaRepo, transaction_id: string): Promise<IBlockMetadata> {
    const client = new Client({
        // Insert your node URL in the .env.
        nodes: [this.uri],
        localPow: true,
    });
    // Get the metadata for the block.
    const blockMetadata = await client.getBlockMetadata(transaction_id);
    return blockMetadata

}
