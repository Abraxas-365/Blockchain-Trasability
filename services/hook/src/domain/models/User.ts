export class User implements IUser {
  public tecnologies: string;
  public company: ICompany;
  public api_hook: IApiHook;
  public _id?: any;

  constructor(tecnologies: string, company: ICompany, id?: any) {
    this.tecnologies = tecnologies;
    this._id = id;
    this.company = company;
  }
}

export interface IUser {
  _id?: any;
  tecnologies: string;
  company: ICompany;
}

interface ICompany {
  _id: string;
  name: string;
  tecnologies: string;
  api_hook: IApiHook;
}

interface IApiHook {
  url: string;
  email: string;
  password: string;
}
