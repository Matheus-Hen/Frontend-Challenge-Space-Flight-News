import { useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { api } from '../../../pages/api/axios'
import Cards from '../Card/Cards'
import { ArticleContext } from '../../Context/ArticlesContext'
import { DadosType } from '../../Types/Types'



const Listagem = () => {
    const { search, title } = useContext(ArticleContext)
    const [dados, setDados] = useState([])
    const [quant, setQuant] = useState(10)
    const [filter, setFilter] = useState([])
    useEffect(() => {
        Loading()
        api.get(`/articles?_limit=${quant}`).then(response => {
            setDados(response.data)
        })
        console.log(dados);
        
    }, [quant])
    useEffect(() => {
        if (search != '') {
            setFilter(dados.filter(function (date: DadosType) {
                if (date?.title.includes(search) == true) return dados
            }))
        }
    }, [search])

    async function handClick() {
        setQuant(quant + 10)
    }
    function Loading() {
        return <div className='d-flex flex-row justify-content-center mt-5'><div className=" planet"></div></div>
    }
    const Lista = () => {
        if (search == '') {
            if (title == 'Mais antigas') {
                dados.sort(function (x: DadosType, y: DadosType) {
                    let data1 = x.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let data2 = y.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let a = parseInt(data1),
                        b = parseInt(data2)
                    return a - b
                })

            } else if (title == 'Mais novas') {
                dados.sort(function (x: DadosType, y: DadosType) {
                    let data1 = x.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let data2 = y.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let a = parseInt(data1),
                        b = parseInt(data2)
                    return b - a
                })
            }
            return dados.map((date: DadosType, index) => {
                if ((index % 2) == 0) return <Cards title={date.title} index={index} key={index} imageUrl={date?.imageUrl} summary={date?.summary} data={date?.publishedAt} fontNews={date?.newsSite} flexDirection="flex-row" />
                else return <Cards title={date?.title} index={index} key={index} imageUrl={date?.imageUrl} summary={date?.summary} data={date?.publishedAt} fontNews={date?.newsSite} flexDirection="flex-row-reverse" />
            })
        } else {
            if (title == 'Mais antigas') {
                filter.sort(function (x: DadosType, y: DadosType) {
                    let data1 = x.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let data2 = y.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let a = parseInt(data1),
                        b = parseInt(data2)
                    return a - b
                })
            } else if (title == 'Mais novas') {
                filter.sort(function (x: DadosType, y: DadosType) {
                    let data1 = x.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let data2 = y.publishedAt?.split('T').shift()?.split('-').reverse().join('-').split('-')?.shift()
                    let a = parseInt(data1),
                        b = parseInt(data2)
                    return b - a
                })
            }
            return filter.map((date: DadosType, index) => {
                if ((index % 2) == 0) return <Cards title={date.title} index={index} key={index} imageUrl={date?.imageUrl} summary={date?.summary} data={date?.publishedAt} fontNews={date?.newsSite} flexDirection="flex-row" />
                else return <Cards title={date?.title} index={index} key={index} imageUrl={date?.imageUrl} summary={date?.summary} data={date?.publishedAt} fontNews={date?.newsSite} flexDirection="flex-row-reverse" />
            })
        }
    }

    return (
        <main className='bg-dark'  >
            {Lista()}
            {Loading()}
            <div className='d-flex flex-row justify-content-center mt-5'>
                <Button onClick={handClick} id='LoadingMore' className='w-25'>Carregar mais</Button>
            </div>
        </main>
    )
}

export default Listagem