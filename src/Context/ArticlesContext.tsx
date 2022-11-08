import { createContext, useState } from "react";
import { ArticleContextProps, ArticleContextType } from "../Types/Types";


const initialValue = {
    search : '',
    setSearch: ()=>{},
    title : 'Ordernar',
    setTitle: ()=>{},
}

export const ArticleContext = createContext<ArticleContextType>(initialValue)


export const ArticleContextProvider = ({children}:ArticleContextProps ) =>{
    const [search, setSearch] = useState(initialValue.search)
    const [title, setTitle] = useState(initialValue.title)
    return (
        <ArticleContext.Provider value={{search, setSearch, title,setTitle}}>
            {children}
        </ArticleContext.Provider>
    )
}