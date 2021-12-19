import API from "./api"

const getSubjects = async () => {
    const response = await API.get('/subjects')
        .catch(e => {
            return {
                success: false,
                message: "The server is not okay now, but we'll fix it ASAP"
            }
        })

    if(response.data) return {
        success: true,
        data: response.data,
    }

    return response;
};

export {
    getSubjects,
};
