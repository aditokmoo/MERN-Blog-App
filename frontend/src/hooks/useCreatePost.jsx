import { useState } from "react"

export const useCreatePost = () => {
    const [ activeTab, setActiveTab ] = useState(0);

    const handleTab = (tab) => {
        switch(tab) {
            case 0:
                return setActiveTab(0)
            case 1:
                return setActiveTab(1)
            default:
                return activeTab
        }
    }

    return { activeTab, handleTab }
}