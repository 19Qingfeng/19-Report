function wapperNumber(o, k) {
    return o && o[k] ? format(o[k]) : "0"
}

function wapperOriginNumber(o, k) {
    return o && o[k]
}

function wapperPercent(o, k) {
    return o && o[k] ? `${o[k]}%` : '0%'
}

function wapperMoney(o, k) {
    return o && o[k] ? `¥ ${format(o[k])}` : '¥ 0'
}

function format(v) {
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    return `${v}`.replace(reg, '$&,')
}

function wapperArray(o, k) {
    return o && o[k] ? o[k] : []
}


export default {
    inject: ["getReportData", "getWordCloud", "getMapData"],
    computed: {
        reportData() {
            return this.getReportData()
        },
        salesToday() {
            return wapperMoney(this.reportData, 'salesToday')
        },
        salesGrowthLastData() {
            return wapperNumber(this.reportData, 'salesGrowthLastData')
        },
        salesGrowthLastDay() {
            return wapperPercent(this.reportData, 'salesGrowthLastDay')
        },
        salesGrowthLastMonth() {
            return wapperPercent(this.reportData, 'salesGrowthLastMonth')
        },
        salesLastData() {
            return wapperMoney(this.reportData, 'salesLastDay')
        },
        orderToday() {
            return wapperNumber(this.reportData, 'orderToday')
        },
        orderLastToday() {
            return wapperNumber(this.reportData, 'orderLastDay')
        },
        orderTrend() {
            return wapperArray(this.reportData, 'orderTrend')
        },
        orderUser() {
            return wapperNumber(this.reportData, 'orderUser')
        },
        returnRate() {
            return wapperPercent(this.reportData, 'returnRate')
        },
        orderUserTrend() {
            return wapperArray(this.reportData, 'orderUserTrend')
        },
        orderUserTrendAxis() {
            return wapperArray(this.reportData, 'orderUserTrendAxis')
        },
        userToday() {
            return wapperNumber(this.reportData, 'userToday')
        },
        userTodayOrigin() {
            return wapperOriginNumber(this.reportData, 'userToday')
        },
        userGrowthLastDay() {
            return wapperNumber(this.reportData, 'userGrowthLastDay')

        },
        userGrowthLastMonth() {
            return wapperNumber(this.reportData, 'userGrowthLastMonth')
        },
        userLastMonth() {
            return wapperOriginNumber(this.reportData, 'userLastMonth')
        }
        // 未完 继续补充
    },
}