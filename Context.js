import {createContext,useContext,useState} from 'react';


export const Store =createContext();




export const useStore = () => useContext(Store);


const ContextProvider=({childern})=>{

        const[toggle,setToggle]=useState(false);
        const[name,setName]=useState("name");


        return(
            <Store.Provider value={{toggle,setToggle,name,setName}}>

                {childern}


            </Store.Provider>



        )





}

export default ContextProvider;