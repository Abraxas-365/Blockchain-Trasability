import type { IBlockMetadata } from '@iota/types';

export default interface BlockchainRepository {
    getBlockInfo(transaction_id: string): Promise<IBlockMetadata>
}
