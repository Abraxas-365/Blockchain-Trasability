
export class Document implements IDocument {
    public user_id: string;
    public data: string;
    public transaction_id: string;
    public status: string;
    public upload_date: Date;
    public creation_date: Date;
    public _id?: any


    constructor(user_id: string, data: string, transaction_id: string, status: string, upload_date: Date, creation_date: Date, id?: any) {
        this.user_id = user_id;
        this.data = data;
        this.transaction_id = transaction_id;
        this.status = status
        this.upload_date = upload_date
        this.creation_date = creation_date
        this._id = id
    }
}


export interface IDocument {
    user_id: string;
    data: string;
    transaction_id: string;
    status: string;
    upload_date: Date;
    creation_date: Date;
    _id?: any
}
