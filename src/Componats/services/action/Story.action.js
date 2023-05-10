import Api from '../../Apis/FakeApi';
import { CREATE_STORY, GET_STORYS, GET_STORY, IS_LOADING, UPDATE_STORY, DELETE_STORY } from "../constant/actionType";

export const createStory = (data) => {
    return {
        type : CREATE_STORY,
        payload : data
    }
}
export const createStoryAsync = (data) => {

    return async (dispatch) => {
        
        const result = await Api.post("/Story", data)

        dispatch(getStorysAsync())
    }
}
export const isloading = () => {
    return {
        type: IS_LOADING
    }
}
export const getStorys = (data) => {
    return {
        type : GET_STORYS,
        payload : data
    }
}
export const getStorysAsync = () => {

    return async dispatch => {
        
        dispatch(isloading())

        const result = await Api.get("/Story")

        dispatch(getStorys(result.data))
    }
}
export const getStory = (data) => {
    return {
        type : GET_STORY,
        payload : data
    }
}
export const getStoryAsync = (id) => {

    return async dispatch => {
        const res = await Api.get(`/Story/${id}`)
        dispatch(getStory(res.data))
    }
}
export const UpDateStory = (data) => {
    return {
        type : UPDATE_STORY,
        payload : data
    }
}
export const UpdateStoryAsync = (data) => {

    return async dispatch => {
        const res = await Api.put(`/Story/${data.id}`, data)
        dispatch(getStorysAsync(res.data))
    }
}
export const DeleteStory = () => {
    return {
        type : DELETE_STORY
    }
}


export const DeleteStoryAsync = (id) => {
    return async dispatch => {
        dispatch(isloading())
        const res = await Api.delete(`/Story/${id}`)
        dispatch(getStorysAsync())
    }
}