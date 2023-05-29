import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuthContext } from './useAuthContext';

export const useUser = () => {
	const { user } = useAuthContext();
	const [ userData, setUserData ] = useState({});

	const params = useParams();

    const username = params.id

	useEffect(() => {
		const getUser = async () => {
			const response = await fetch(`/api/user/profile/${username}`);
			const data = await response.json();

            console.log(data)

			setUserData(data);
		};

		getUser();
	}, [username]);

	return { userData };
};
