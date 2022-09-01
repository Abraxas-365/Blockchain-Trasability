export interface IIotaTransaction {
    message: IMessage;
    messageId: string;
}

export interface IMessage {
    networkId: string;
    parentMessageIds: string[];
    payload: IPayload;
    nonce: string;
}

export interface IPayload {
    type: number;
    index: string;
    data: string;
}
