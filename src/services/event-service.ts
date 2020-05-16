const axios = require("axios")

export default class ServiceEvents {
    static getListEvents = async (numberEvent: number, period: number) => {
        try {
            const request = await axios.get(
                `https://maxline.by/api/maxlinereturn/get-data?cors=1&period=${period}&sport=${numberEvent}`
            )
            // console.log(request.data.data)
            return request.data.data
        } catch (e) {
            console.log(e)
        }
    }
}