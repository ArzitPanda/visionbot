import {createContext,useContext,useState} from 'react';
import NavBar from '../components/NavBar';
// import Context from '../Context'
import '../styles/globals.css'

export const Store =createContext();




export const useStore = () => useContext(Store);

















function MyApp({ Component, pageProps }) {
  const[toggle,setToggle]=useState(false);
  const[name,setName]=useState("arz");
  const[color,setColor]=useState("#05010E")
  const[invColor,setInvColor]=useState("#FFFFFF")
  const[nav,setNav]=useState(1);

    
  
  return ( 
    <Store.Provider value={{toggle,setToggle,name,setName,color,setColor,invColor,setInvColor,nav,setNav}}>
           
             <Component {...pageProps} />
             
             </Store.Provider>
  )
}

export default MyApp
