import { apiLessBaseUrl } from './base-url';

const baseUrl = apiLessBaseUrl;

export const mediaUrl = (url, isResourceUrl = false) => {
    return isResourceUrl ? url : baseUrl + url;
}

export const galleryUrl = ({ url, caption, type, isResourceUrl }) => {
    const defaultImage = '/images/profiles/default-profiles/image-1.jpg';

    if (isResourceUrl) {
        if (type === 'image') {
            if (!url || url.trim().length === 0)
                return defaultImage;
            return url;
        } else {
            if (!url || url.trim().length === 0)
                return defaultImage;
            return url;
        }
    }

    return baseUrl + url;
}