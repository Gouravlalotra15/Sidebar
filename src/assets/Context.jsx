import { createContext,useContext,useState } from "react";

const AppContext=createContext();

export const AppProvider=({children})=>{

    const [isSidebarOpen,setIsSidebarOpen]=useState(true);
    const [isModalOpen,setIsModalOpen]=useState(false);

        const openSidebar=()=>{
            return setIsSidebarOpen(true);
        }
        const closeSidebar=()=>{
            return setIsSidebarOpen(false);
        }
        const openModal=()=>{
            return setIsModalOpen(true);
        }
        const closeModal=()=>{
            return setIsModalOpen(false);
        }
    return <AppContext.Provider value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal}}>
            {children}
        </AppContext.Provider>
}

export const useGlobalContext=()=>{

    return useContext(AppContext);
}