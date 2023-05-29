import { useEffect, useState } from "react"

export const useUsers = () => {
    const [ usersData, setUsersData ] = useState();
    
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('/api/user/');
            const data = await response.json();
    
            setUsersData(data);
        }

        getUsers();
    }, [])

    return { usersData }
}