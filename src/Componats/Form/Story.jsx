import React, { useState } from 'react';
import './Story.css';
import story from '../../img/story.png'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createStoryAsync } from '../services/action/Story.action';
import { useNavigate } from 'react-router-dom';


function Story() {

    const [initial, setInitial] = useState({
        imgUrl: "",
        title: "",
        designation: ""
    })

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value })
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(createStoryAsync(initial))
        navigate('/');
        setInitial({
            title: "",
            designation: ""
        })
    }
    return (
        <>
            <div className='d-flex'>

                <div className='col-6 p-2'>
                    <div className='form-wrapper d-flex justify-content-center align-items-center'>
                        <Container className='wrapper'>

                            <h1>
                                Create Story :-
                            </h1>

                            <Form onSubmit={(e) => { handleSubmit(e) }}>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject title" name='title' value={initial.title} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Story</Form.Label>
                                    <Form.Control as="textarea" rows={11} placeholder="Write a story" name='designation' value={initial.designation} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>
                                <div className='d-flex justify-content-start'>
                                    <Button variant="success" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Container>
                    </div>
                </div>
                <div className='col-6'>
                    <img src={story} alt="" className='me-5 mt-5'/>
                </div>
            </div>

        </>
    )
}

export default Story