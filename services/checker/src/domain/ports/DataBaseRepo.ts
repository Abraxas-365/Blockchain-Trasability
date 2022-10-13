import { IDocument } from "../models/Document";

export default interface DataBaseRepository {
    updateDocument(key: string, value: string, status: string): Promise<any>;
    getDocuments(key: string, value: string): Promise<Array<IDocument>>;
}
