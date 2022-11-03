import { useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { apiAlbum } from "../../lib/Data/api/apiCalls";

interface IValues {
    id?: number,
    name: string,
    artist: string,
    year: number,
    url: string,
};

export const handleFormSubmit = async (values: IValues, id: number, navigate: NavigateFunction) => {
    await apiAlbum.put(`/update/${id}`, values)
    navigate('/album')
};

export const useGetAlbum = (id: number) => {
    const [album, setAlbum] = useState({} as IValues)
    const [isLoading, setIsLoading] = useState(true)

    const getAlbum = async () => {
        const { data } = await apiAlbum.get(`${id}`)
        setAlbum(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getAlbum();
    }, [])

    return { album, isLoading }
}
