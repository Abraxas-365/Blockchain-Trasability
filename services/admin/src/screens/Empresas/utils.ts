import { useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { apiBouncer } from "../../lib/Data/api/apiCalls";

interface IIota {
  mnemonic: string;
}

interface ILacchain {
  wallet: string;
  key: string;
}

export interface IEmpresa {
  id?: string;
  name?: string;
  status?: string;
  tecnologies?: string;
  iota?: IIota;
  lacchain?: ILacchain;
}

export const handleFormSubmit = async (values: IEmpresa, navigate: NavigateFunction) => {
  console.log(values);
  await apiBouncer.post(`/create/company`, values);
  navigate("/users");
};

export const useGetEmpresas = () => {
  const [empresas, setEmpresas] = useState([] as Array<IEmpresa>);
  const [isLoading, setIsLoading] = useState(true);

  const getEmpresas = async () => {
    const { data } = await apiBouncer.get("/get/company");
    console.log(data);
    setEmpresas(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getEmpresas();
  }, []);

  return { empresas, isLoading };
};
