import axios from '../../axios-config';
import { GALLERY_SUCCESS } from '../action-types';

export const addGallery = (galleryData) => {
    return async dispatch => {
        try {
            console.log('adding gallery');
            const response = await axios.post('gallery', galleryData);
            const { gallery } = response.data;
            console.log('gallery',gallery);
            dispatch(gallerySuccess(gallery));
        } catch (err) {
            throw err;
        }
    }
}

export const removeGallery = (id) => {
    return async dispatch => {
        try {
            await axios.delete('gallery/' + id);
            dispatch(gallerySuccess());
        } catch (err) {
            throw err;
        }
    }
}

const gallerySuccess = (gallery) => {
    return {
        type: GALLERY_SUCCESS,
        gallery,
    }
}