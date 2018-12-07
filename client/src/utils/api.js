class RequestError {
    constructor(status, message){
        this.status = status
        this.message = message
    }
}

export const headers = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
})



export const makePostOptions = data => ({
    method: 'POST',
    mode: 'cors',
    headers: headers(),
    body: JSON.stringify(data)
})


const request = (url, options) => 
    fetch(url, options).then(res => {
        const {status} = res

        if(status === 204) return {}
        const json = res.json()
        if(status >= 200 && status < 400) return json
        return json.then(message =>{
            throw new RequestError(status, message)
        })

    })


export const post = (url, data) => request(url, makePostOptions(data));