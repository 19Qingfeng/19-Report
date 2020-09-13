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

function wapperObject(o, k) {
    if (o && k.includes('.')) {
        const key = k.split('.')
        key.forEach(i => {
            o = o[i]
        })
        return o
    } else {
        return o && o[k] ? o[k] : {}
    }

}

function format(v) {
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    return `${v}`.replace(reg, '$&,')
}

function wapperArray(o, k) {
    return o && o[k] ? o[k] : []
}

// 这个mixins和provide架构思想 在项目一定要学习思想
export default {
    inject: ["getReportData", "getWordCloud", "getMapData"],
    methods: {
        formatPermillage(data) {
            return format(data)
        }
    },
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
        },
        orderFullYear() {
            return wapperArray(this.reportData, 'orderFullYear')
        },
        orderFullYearAxis() {
            return wapperArray(this.reportData, 'orderFullYearAxis')
        },
        orderRank() {
            return wapperArray(this.reportData, 'orderRank')
        },
        userFullYear() {
            return wapperArray(this.reportData, 'userFullYear')
        },
        userFullYearAxis() {
            return wapperArray(this.reportData, 'userFullYearAxis')
        },
        userRank() {
            return wapperArray(this.reportData, 'userRank')
        },
        // 搜索量组件API
        wordCloud() {
            return this.getWordCloud()
        },
        category1() {
            return wapperObject(this.reportData, 'category.data1')
        },
        category2() {
            return wapperObject(this.reportData, 'category.data2')
        }

        // 未完 继续补充
    },
}