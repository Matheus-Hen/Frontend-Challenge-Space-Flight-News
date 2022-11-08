import {useContext, useState} from 'react'

import { Navbar, Nav, NavDropdown, Form, Container, Button } from 'react-bootstrap'
import { HiSearch } from 'react-icons/hi'
import { IoRocketSharp } from 'react-icons/io5'
import { ArticleContext } from '../../Context/ArticlesContext'
const NavBar = () => {
    const {setSearch,title, setTitle} = useContext(ArticleContext)
    
    function handClickOld(){
        setTitle('Mais antigas')
    }
    function handClickNew(){
        setTitle('Mais novas')
    }
    return (
        <div >
            <Navbar bg="dark" expand="lg" className='d-flex flex-column border-bottom border-primary'>
                <Container fluid className='d-flex flex-row justify-content-end' >
                    <Nav className='d-flex flex-row justify-content-end  w-100'>
                        <Form className="d-flex border border-1 me-3 h-25 rounded bg-dark">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 border-0 text-white bg-dark"
                                aria-label="Search"
                                onChange={(e)=>setSearch(e.currentTarget.value)}
                            />
                            <Button variant='white' className='bg-button'><HiSearch size={30} color='#fff' /></Button>
                        </Form>
                        <NavDropdown title={title} align={'end'} menuVariant='dark' className='border border-white text-white' >
                            <NavDropdown.Item id='Old' onClick={handClickOld} >
                                Mais antigas
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item id='New' onClick={handClickNew}>
                                Mais novas
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
                <Container fluid className='d-flex flex-row justify-content-center' >
                    <Navbar.Brand href="#" className='d-flex flex-column justify-content-center'>
                        <div className="circle">
                            <IoRocketSharp size={100} color='#D07017' />
                        </div>
                        <div className='text-center mt-3 text-title'>
                            Space Flight News
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div >
    )
}

export default NavBar