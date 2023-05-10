import React, { useEffect, useState } from 'react'
import './ViewStory.css'
import { Button, Container, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteStoryAsync, getStoryAsync, getStorysAsync } from '../services/action/Story.action'

function ViewStory() {
    
    const { storys, isLoading, isEdit } = useSelector(state => state.StoryReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleIsEdit = (id) => {
        dispatch(getStoryAsync(id));
    }

    const [isDelete, setIsDelete] = useState(false)

    const handleDelete = (id) => {

        dispatch(DeleteStoryAsync(id))
        setIsDelete(!isDelete)
    }

    useEffect(() => {
        console.log("story view useeffect");
        dispatch(getStorysAsync());
    }, [])

    if (isEdit) {
        navigate('/updateStory');
    } else {

        return (
            <>
                <Container className='d-flex'>
                    <div className='col-6'>
                        {
                            isLoading ? <h1>Loading...!</h1> :
                                storys.map((s) => {
                                    return (
                                        <>
                                            <Card className="mb-2" style={{ height: 'auto', width: 'auto', display: 'flex', padding: '30px', backgroundColor: 'rgb(172, 124, 124)', color: 'white' }}>
                                                <Row className='justify-content-center'>
                                                    <Col md={12}>
                                                        <Card.Body >
                                                            <Card.Title className=''>{s.title}</Card.Title>
                                                            <Card.Text>{s.designation}</Card.Text>
                                                        </Card.Body>
                                                        <div className='text-center d-flex justify-content-start mt-2 align-items-center'>
                                                            <Button className='text-dark btn btn-primary' onClick={() => handleIsEdit(s.id)}>
                                                                {/* <PenFill /> */}Edit
                                                            </Button>&nbsp;&nbsp;&nbsp;
                                                            <Button variant='danger' onClick={() => handleDelete(s.id)} >
                                                                {/* <TrashFill  /> */} Delete
                                                            </Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </>
                                    )
                                })
                        }

                    </div >
                   
                </Container>


            </>
        )
    }

}

export default ViewStory