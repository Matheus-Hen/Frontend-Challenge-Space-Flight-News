import { ReactNode } from "react"

export type DadosType = {
    title: string,
    imageUrl: string,
    summary: string,
    publishedAt: string,
    newsSite: string,
}


export type ArticleContextType = {
    search: string,
    setSearch: (newState: string) => void,
    title: string,
    setTitle: (newState: string) => void,
}

export type ArticleContextProps = {
    children: ReactNode
}
export interface Props {
    title: string,
    imageUrl: string,
    summary: string,
    flexDirection: string,
    data: string,
    fontNews: string,
    index: number
}