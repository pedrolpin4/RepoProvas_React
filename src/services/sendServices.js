import API from "./api"

const getExam = async () => {
    const response = await API.get('/exams-info')
        .catch(e =>{
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
                    message: "Please follow the sign-up instructions"
                }

                if(e.response.status === 409) return{
                    success: false,
                    message: "Looks like this link has already been registered"
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
