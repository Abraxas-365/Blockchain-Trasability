export interface IIotaWallet {
    mnemonic: string;
    // primary: IWallet
    // secondary: IWallet
}

interface IWallet {
    seed: string,
    wallet: string,
}
