export const generateUniqueID = () => {
    return Math.floor(Math.random() * Math.floor(Date.now() / 10000));
} 