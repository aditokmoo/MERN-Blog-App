import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../hooks/useUser'
import { toast } from 'react-toastify';

export const useCreatePost = () => {
	const [ blogData, setBlogData ] = useState({
		title: '',
		desc: ''
	});
	const [ images, setImages ] = useState([]);
    const [ files, setFiles ] = useState([])
	const [ activeTab, setActiveTab ] = useState(0);
    const { userData } = useUser();

	// Create post
	const createPost = async (e) => {
		e.preventDefault();

		const formData = new FormData();
        formData.append('userId', userData._id);
        formData.append('author', userData.username);
        formData.append('title', blogData.title);
        formData.append('desc', blogData.desc);
		Array.from(files).forEach(file => {
			formData.append('images', file)
		})

        try {
			const res = await axios.post('/api/blogs/', formData);
            const data = await res.data;		
        } catch (error) {
            console.log(error)
        }
	};

	// Handle form data change
	const handleFormChange = (e) => {
		setBlogData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value
		}));
	};

	// Handle Image Change
	const handleImageChange = (e) => {
		const images = [];

        setFiles(e.target.files)

		// File reader
		Array.from(e.target.files).forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				images.push(reader.result);
				if (e.target.files.length < 5) {
					setImages(images);
				}
			};

			reader.readAsDataURL(file);
		});

        if(e.target.files.length > 4) {
            // Error message
					return toast.error('You cant uploud more then 4 images', {
						position: 'bottom-right',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
						progress: undefined,
						theme: 'dark'
					});
        }
	};

	// Handle tab
	const handleTab = (tab) => {
		switch (tab) {
			case 0:
				return setActiveTab(0);
			case 1:
				return setActiveTab(1);
			default:
				return activeTab;
		}
	};

	return { activeTab, images, handleTab, handleFormChange, handleImageChange, createPost };
};
