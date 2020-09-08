import request from "../utils/request"

export function screenData() {
    return request({
        method: "GET",
        url: "/screen/data",
        params: {
            icode: "2BB0FF8B9CA6179B"
        }
    })
}

export function scatter() {
    return request({
        method: "GET",
        url: "/screen/map/scatter",
        params: {
            icode: "2BB0FF8B9CA6179B"
        }
    })
}
export function wordCloudApi() {
    return request({
        method: "GET",
        url: "/screen/wordcloud",
        params: {
            icode: "2BB0FF8B9CA6179B"
        }
    })
}

export function screenMap() {
    return request({
        method: "GET",
        url: "/screen/map",
        params: {
            icode: "2BB0FF8B9CA6179B"
        }
    })
}