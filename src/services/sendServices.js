import API from "./api"

const getExam = async () => {
    const response = await API.get('/exams')
        .catch(e =>{
            console.log(e.response);
            if(e.response){
                if(e.response.status === 400) return{
                    success: false,
                    message: "Please follow the sign-up instructions"
                }
            }
            return{
                success: false,
                message: "The server is not okay now, but we'll fix it ASAP"
            }
        })

    if(response.data) return {
        success: true,
        data: response.data,
    }

    return response
}

const postExam = async (forms) => {
    console.log(forms);
    const response = await API.post('/exams', forms)
        .catch(e =>{
            if(e.response){
                if(e.response.status === 400) return{
                    success: false,
                    message: e.response.message
                }

                if(e.response.status === 409) return{
                    success: false,
                    message: e.response.message
                }
            }

            return{
                success: false,
                message: "The server is not okay now, but we'll fix it ASAP"
            }
        })

    if(response.data) return{
        success: true
    }

    return response
}

export {
    postExam,
    getExam,
}
