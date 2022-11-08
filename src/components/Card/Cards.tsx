import { FC, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { Props } from '../../Types/Types'

const Cards: FC<Props> = ({ title, imageUrl, summary, flexDirection, data, fontNews, index }) => {
    const [modal, setModal] = useState(false)
    return (
        <div className='d-flex justify-content-center  mt-5 cards'>
            <Card className={`d-flex ${flexDirection} text-white bg-secondary w-50 `}>
                <Card.Img variant="top" src={imageUrl} className='imgCard' />
                <Card.Body className='d-block w-25 '>
                    <Card.Title className='fw-bold'>{title}</Card.Title>
                    <span className='d-flex flex-row justify-content-between fs-6'>
                        <div>
                            {data?.split('T').shift()?.split('-').reverse().join('-')}
                        </div>
                        <div className='border border-primary bg-secondary text-white'>{fontNews}</div>
                    </span>
                    <Card.Text className='mb-0'>
                        {summary}
                    </Card.Text>
                    <Button onClick={()=>setModal(true)} id={`CardButton${index}`} className='bg-primary border border-primary position-relative  mt-2 '>Ver mais</Button>
                </Card.Body>
            </Card>
            <Modal show={modal} size='lg' onHide={()=> setModal(false) }>
                <Modal.Body className='bg-dark text-white cards' >
                    <div className='d-flex flex-row'>
                        <div>
                            <img className='imgCard' src={imageUrl} />
                        </div>
                        <div className='ms-4'>
                            <div className='fw-bold fs-2'>{title}</div>
                            <span className='d-flex flex-row justify-content-between fs-6'>
                        <div>
                            {data?.split('T').shift()?.split('-').reverse().join('-')}
                        </div>
                    </span>
                    <div className='fs-5'>
                        {summary}
                    </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                <Button onClick={()=>setModal(false)} className='bg-primary border border-primary position-relative  mt-2 '>Ir para o site</Button> 
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cards