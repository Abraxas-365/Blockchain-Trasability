import { useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { apiUsers } from "../../lib/Data/api/apiCalls";

interface IAuthentiction {
  avtive: boolean;
  token: string;
}
export interface IUser {
  id?: number;
  role?: number;
  email?: string;
  company?: string;
  password?: string;
  authentication?: IAuthentiction;
  name?: string;
}

export const handleFormSubmit = async (values: IUser, navigate: NavigateFunction) => {
  await apiUsers.post(`/register`, values);
  navigate("/users");
};

export const useGetUsers = () => {
  const [users, setUsers] = useState([] as Array<IUser>);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const { data } = await apiUsers.get("/get/users");
    setUsers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return { users, isLoading };
};
