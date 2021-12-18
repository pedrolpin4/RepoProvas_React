import API from "./api"

const getProfesors = async () => {
    const response = await API.get('/profesors')
        .catch(e => {
            return {
                success: false,
                message: "The server is not okay now, but we'll fix it ASAP"
            }
        })

    console.log(response.data);
    if(response.data) return {
        success: true,
        data: response.data,
    }

    return response;
};

export {
    getProfesors,
};
