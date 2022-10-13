export interface IBlockchainTransaction {
    transaction_id: string;
    transaction_info?: string;
    technologie?: string;
}

export class BlockchainTransaction implements IBlockchainTransaction {
    public transaction_id: string;
    public transaction_info: string;
    public technologie: string;

    constructor(transaction_id: string, transaction_info: string, technologie: string) {
        this.transaction_id = transaction_id;
        this.transaction_info = transaction_info;
        this.technologie = technologie;
    }



}
