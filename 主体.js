const types = {
    type: "SLIGHTNING_COCO_CLOUD_SPACE",
    title: "椰子云空间",
    author: "SLIGHTNING",
    icon: "icon-widget-cloud-table",
	version: "0.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: "asyncUpload",
            label: "异步上传",
            valueType: "boolean",
            defaultValue: false
        }, {
            key: "autoReportError",
            label: "自动上报错误",
            valueType: "boolean",
            defaultValue: true
        }
    ],
    methods: (function () {
        const color = {
            work: "#56a5d0",
            dictionary: "#7b7eea",
            table: "#bf6bd2"
        }
        const type = {
            value: "string"
        }
        const param = {
            dictionaryName: {
                key: "dictionaryName",
                valueType: "string",
                defaultValue: "云字典"
            },
            key: {
                key: "key",
                valueType: "string",
                defaultValue: "键"
            },
            tableName: {
                key: "tableName",
                valueType: "string",
                defaultValue: "云数据表"
            },
            select: [
                {
                    key: "selectColumn",
                    valueType: "string",
                    defaultValue: "列"
                }, {
                    key: "selectOperator",
                    dropdown: [
                        { label: "=", value: "EQ" },
                        { label: "≠", value: "NE" }
                    ]
                }, {
                    key: "selectValue",
                    labelAfter: "的行",
                    valueType: type.value,
                    defaultValue: "筛选值"
                }
            ],
            column: {
                key: "column",
                valueType: "string",
                defaultValue: "列"
            },
            value: {
                key: "value",
                valueType: type.value,
                defaultValue: "新的值"
            }
        }
        return [
            {
                key: "load",
                label: "加载",
                params: [
                    {
                        key: "workID",
                        valueType: "number",
                        defaultValue: 0
                    }, {
                        key: "channel",
                        labelAfter: "通道",
                        dropdown: [
                            { label: "社区", value: "1" },
                            { label: "H5", value: "0" }
                        ]
                    }
                ],
                blockOptions: {
                    color: color.work,
                    line: "作品"
                }
            }, {
                key: "list",
                label: "作品的",
                params: [
                    {
                        key: "type",
                        labelAfter: "列表",
                        dropdown: [
                            { label: "云字典", value: "dictionary" },
                            { label: "云数据表", value: "table" }
                        ]
                    }
                ],
                valueType: "array",
                blockOptions: {
                    color: color.work,
                    space: 40
                }
            }, {
                key: "dictionarySet",
                label: "设置",
                params: [
                    param.dictionaryName, {
                        ...param.key,
                        label: "键"
                    }, {
                        ...param.value,
                        label: "的值为"
                    }
                ],
                blockOptions: {
                    color: color.dictionary,
                    line: "云字典"
                }
            }, {
                key: "dictionaryDelete",
                label: "删除",
                params: [
                    param.dictionaryName, {
                        ...param.key,
                        label: "键",
                        labelAfter: "及其值"
                    }
                ],
                blockOptions: { color: color.dictionary }
            }, {
                key: "dictionaryEmpty",
                label: "清空",
                params: [ param.dictionaryName ],
                blockOptions: { color: color.dictionary }
            }, {
                key: "dictionaryWaitUpload",
                label: "等待",
                params: [
                    {
                        ...param.dictionaryName,
                        labelAfter: "上传"
                    }
                ],
                blockOptions: {
                    color: color.dictionary,
                    space: 40
                }
            }, {
                key: "dictionaryCopy",
                params: [
                    {
                        ...param.dictionaryName,
                        labelAfter: "副本"
                    }
                ],
                valueType: "object",
                blockOptions: { color: color.dictionary }
            }, {
                key: "dictionaryList",
                params: [
                    {
                        ...param.dictionaryName,
                        labelAfter: "的"
                    }, {
                        key: "type",
                        labelAfter: "列表",
                        dropdown: [
                            { label: "键", value: "key" },
                            { label: "值", value: "value" },
                            { label: "键值字典", value: "dictionary" },
                            { label: "键值列表", value: "list" }
                        ]
                    }
                ],
                valueType: "array",
                blockOptions: { color: color.dictionary }
            }, {
                key: "dictionaryGet",
                params: [
                    param.dictionaryName, {
                        ...param.key,
                        label: "键",
                        labelAfter: "的值"
                    }
                ],
                valueType: type.value,
                blockOptions: { color: color.dictionary }
            }, {
                key: "dictionaryLength",
                params: [
                    {
                        ...param.dictionaryName,
                        labelAfter: "的长度"
                    }
                ],
                valueType: "number",
                blockOptions: {
                    color: color.dictionary
                }
            }, {
                key: "dictionaryContain",
                params: [
                    {
                        ...param.dictionaryName,
                        labelAfter: "包含"
                    }, {
                        key: "type",
                        dropdown: [
                            { label: "键", value: "key" },
                            { label: "值", value: "value" }
                        ]
                    }, {
                        key: "value",
                        valueType: "string",
                        defaultValue: ""
                    }
                ],
                valueType: "boolean",
                blockOptions: {
                    color: color.dictionary,
                    space: 40
                }
            }, {
                key: "tableUpdate",
                label: "更新",
                params: [
                    param.tableName, ...param.select, {
                        ...param.column,
                        label: "的"
                    }, {
                        ...param.value,
                        label: "的值为"
                    }
                ],
                blockOptions: {
                    color: color.table,
                    line: "云数据表"
                }
            }, {
                key: "tableAdd",
                label: "添加",
                params: [
                    {
                        key: "line",
                        valueType: "string",
                        defaultValue: "行"
                    }, {
                        ...param.tableName,
                        label: "到"
                    }
                ],
                blockOptions: { color: color.table }
            }, {
                key: "tableDelete",
                label: "删除",
                params: [
                    param.tableName, ...param.select
                ],
                blockOptions: { color: color.table }
            }, {
                key: "tableEmpty",
                label: "清空",
                params: [ param.tableName ],
                blockOptions: { color: color.table }
            }, {
                key: "tableWaitUpload",
                label: "等待",
                params: [
                    {
                        ...param.tableName,
                        labelAfter: "上传"
                    }
                ],
                blockOptions: {
                    color: color.table,
                    space: 40
                }
            }, {
                key: "tableSelect",
                label: "查询",
                params: [
                    param.tableName, ...param.select, {
                        key: "type",
                        valueType: "string",
                        dropdown: [
                            { label: "字典", value: "dictionary" },
                            { label: "列表", value: "list" }
                        ]
                    }
                ],
                valueType: "array",
                blockOptions: { color: color.table }
            }, {
                key: "tableTitleList",
                params: [
                    {
                        ...param.tableName,
                        labelAfter: "的标题列表"
                    }
                ],
                valueType: "array",
                blockOptions: { color: color.table }
            }, {
                key: "tableCount",
                params: [
                    param.tableName, {
                        key: "type",
                        valueType: "string",
                        dropdown: [
                            { label: "行数", value: "row" },
                            { label: "列数", value: "column" }
                        ]
                    }
                ],
                valueType: "number",
                blockOptions: { color: color.table }
            }
        ]
    })(),
    events: [
        {
            key: "onError",
            label: "出错",
            params: [
                {
                    key: "message",
                    label: "信息",
                    valueType: "string"
                }
            ]
        }
    ]
}

var {methods, properties} = types

;[...methods, ...properties].forEach(method => {
    method.blockOptions ||= {}
    var {blockOptions} = method
    method.blockOptions = {
        callMethodLabel: false,
        ...blockOptions
    }
})

const requirmentArray = ["axios", "crypto-js"]
for (let requirment of requirmentArray) {
    require(requirment)
}

var timeDifference
var noticeForUse =
`重要提示：访问和使用椰子云空间，即表示您同意在下文的条款与条件。如果您不同意这些条款或条件，请不要访问或使用椰子云空间。
本控件可以访问和修改 CoCo 已发布作品所关联的源码云空间中的云字典和云数据表（以下简称“源码云数据”）。在使用椰子云空间之前，被许可方应确保适用的许可协议未禁止访问和修改源码云数据（适用法律明确允许被许可方的情况除外），或者被许可方已从版权所有者处获得访问和修改源码云数据的许可。
是否使用椰子云空间完全由您决定。许可方既不鼓励也不纵容使用椰子云空间，并对被许可方违反适用法律使用椰子云空间不承担任何责任。`
var bugReporter

function loadBugReporter() {
    bugReporter = new Widget({
        asyncUpload: true,
        autoReportError: false
    })
    for (let method of ["Log", "Warn", "Error"]) {
        bugReporter[`widget${method}`] = function (message) {}
    }
    bugReporter.load(223766326, "0")
}

class Widget extends InvisibleWidget {

    constructor(props) {
        super(props)
        this.asyncUpload = props.asyncUpload
        this.autoReportError = props.autoReportError
        for (let method of methods) {
            let original = this[method.key]
            if (original == null) {
                original = function () {
                    throw new Error("该功能暂未实现")
                }
            }
            let getTaskName = function () {
                var taskName = method.label || (method.valueType == "boolean" ? "判断" : "获取")
                for (let i = 0; i < method.params.length; i++) {
                    let param = method.params[i]
                    if ("label" in param) {
                        taskName += param.label
                    }
                    if ("dropdown" in param) {
                        var item = param.dropdown.find(item => item.value == arguments[i])
                        taskName += ` ${item == null ? arguments[i] : item.label} `
                    } else {
                        taskName += ` ${JSON.stringify(arguments[i])} `
                    }
                    if ("labelAfter" in param) {
                        taskName += param.labelAfter
                    }
                }
                return taskName
            }
            this[`_${method.key}`] = async function () {
                var taskName = getTaskName.apply(this, arguments)
                var argumentArray = Array.from(arguments)
                argumentArray.unshift(taskName)
                return await this.Task(taskName, original, ...argumentArray)
            }
            this[method.key] = async function () {
                var taskName = getTaskName.apply(this, arguments)
                var argumentArray = Array.from(arguments)
                argumentArray.unshift(taskName)
                return await this.MainTask(taskName, original, ...argumentArray)
            }
        }
    }

    load(taskName, workID, channel) {
        if (noticeForUse != null) {
            this.warn(noticeForUse)
            noticeForUse = null
        }
        this.work = this.MainTask(taskName, async () => {
            await new Promise(resolve => setTimeout(resolve, 0))
            this.work.ID = workID
            this.work.channel = channel
            var {data} = await this.Task("获取作品数据", this.axios, {
                method: "GET",
                url: `https://api-creation.codemao.cn/coconut/web/work/${workID}/load?channel=${channel}`
            })
            var bcmc = await this.Task("加载作品发布文件", this.axios, {
                method: "GET",
                url: data.bcmc_url
            })
            var work = {
                ID: workID,
                channel: channel,
                token: bcmc.apiToken,
                dictionary: {},
                dictionaryList: [],
                table: {},
                tableList: []
            }
            this.work.token = work.token
            var tableLoadPromiseArray = []
            var widget = this
            const DataManager = {
                async waitUpload() {
                    await Promise.allSettled(Object.values(this.asyncTaskMap))
                },
                asyncTaskMap: {},
                asyncTaskCount: 0,
                async uploadTask(name, func) {
                    if (widget.asyncUpload) {
                        var id = this.asyncTaskCount++
                        this.asyncTaskMap[id] = (async () => {
                            try {
                                await widget.MainTask.apply(widget, arguments)
                            } catch (error) {}
                            delete this.asyncTaskMap[id]
                        })()
                    } else {
                        await this.waitUpload()
                        try {
                            await widget.MainTask.apply(widget, arguments)
                        } catch (error) {}
                    }
                }
            }
            for (let widget of Object.values(bcmc.widgetMap)) {
                if (widget.type == "CLOUD_SPACE_DICT_WIDGET") {
                    let dictionary = {
                        ...DataManager,
                        id: widget.attributes.cloudDictId,
                        widgetName: widget.title
                    }
                    for (let index of ["widgetName", "id"]) {
                        work.dictionary[dictionary[index]] = dictionary
                    }
                    work.dictionaryList.push(dictionary)
                } else if (widget.type == "CLOUD_SPACE_TABLE_WIDGET") {
                    let table = {
                        ...DataManager,
                        id: widget.attributes.cloudTableId,
                        widgetName: widget.title,
                        columnMap: {},
                        getColumn(column) {
                            if (!(column in this.columnMap)) {
                                throw new Error(`该数据表不存在 ${column} 列`)
                            }
                            return this.columnMap[column]
                        }
                    }
                    tableLoadPromiseArray.push((async () => {
                        try {
                            await this.Task(`加载云数据表控件 ${table.widgetName} 的源数据表（ID：${table.id}）`, async () => {
                                var tableInfo = (await this.axiosWithToken({
                                    method: "GET",
                                    url: `https://api-creation.codemao.cn/coconut/clouddb/v2/runtime/list?db_ids=${table.id}`,
                                    verify: `ids=[${table.id}]`
                                })).data[0]
                                table.columnNameList = tableInfo.columns.map(column => column.name)
                                table.name = tableInfo.name
                                for (let column of tableInfo.columns) {
                                    for (let index of ["name", "id"]) {
                                        table.columnMap[column[index]] = column
                                    }
                                }
                                for (let index of ["name", "id", "widgetName"]) {
                                    work.table[table[index]] = table
                                }
                                work.tableList.push(table)
                            })
                        } catch (error) {
                            this.warn(error)
                        }
                    })())
                }
            }
            await Promise.allSettled(tableLoadPromiseArray)
            this.work = work
        })
    }

    async waitLoad() {
        try {
            await this.work
        } catch (error) {}
        if (this.work == null || this.work instanceof Promise) {
            throw new Error("未加载作品")
        }
    }

    async list(taskName, type) {
        await this.waitLoad()
        switch (type) {
            case "dictionary":
                return Object.values(this.work.dictionaryList).map(dictionary => {
                    return {
                        "ID": dictionary.id,
                        "对应控件名称": dictionary.widgetName
                    }
                })
            case "table":
                return Object.values(this.work.tableList).map(table => {
                    return {
                        "ID": table.id,
                        "名称": table.name,
                        "对应控件名称": table.widgetName
                    }
                })
        }
    }

    async getDictionary(name) {
        await this.waitLoad()
        var dictionary = this.work.dictionary[name]
        if (dictionary == null) {
            if (name in this.work.table) {
                throw new Error(`未找到云字典 ${name}，存在 ${name} 为云数据表，不能对其进行云字典操作`)
            } else {
                throw new Error(`未找到云字典 ${name}`)
            }
        }
        return dictionary
    }

    async dictionarySet(taskName, dictionaryName, key, value) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.uploadTask(taskName, this.axiosWithToken, {
            method: "POST",
            url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/${dictionary.id}/set`,
            data: {
                key,
                type: typeof value,
                value
            }
        })
    }

    async dictionaryDelete(taskName, dictionaryName, key) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.uploadTask(taskName, this.axiosWithToken, {
            method: "DELETE",
            url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/${dictionary.id}/remove?key=${key}`,
            verify: `dictId=${dictionary.id}&id=&key=${key}`
        })
    }

    async dictionaryEmpty(taskName, dictionaryName) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.uploadTask(taskName, this.axiosWithToken, {
            method: "DELETE",
            url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/clear/${dictionary.id}`,
            verify: `dictId=${dictionary.id}`
        })
    }

    async dictionaryWaitUpload(taskName, dictionaryName) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.waitUpload()
    }

    async dictionaryCopy(taskName, dictionaryName) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.waitUpload()
        var keyList = await this._dictionaryList(dictionaryName, "key")
        var copy = {}
        for (let key of keyList) {
            copy[key] = this._dictionaryGet(dictionaryName, key)
        }
        for (let key in copy) {
            copy[key] = await copy[key]
        }
        return copy
    }

    async dictionaryList(taskName, dictionaryName, type) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.waitUpload()
        switch (type) {
            case "key":
                return (await this.axiosWithToken({
                    method: "GET",
                    url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/${dictionary.id}/keys`,
                    verify: `dictId=${dictionary.id}`
                })).data
            case "value":
                return Object.values(await this._dictionaryCopy(dictionaryName))
            case "dictionary":
                var dictionaryCopy = await this._dictionaryCopy(dictionaryName)
                var dictionaryList = []
                for (let key of Object.keys(dictionaryCopy)) {
                    dictionaryList.push({
                        "键": key,
                        "值": dictionaryCopy[key]
                    })
                }
                return dictionaryList
            case "list":
                var dictionaryCopy = await this._dictionaryCopy(dictionaryName)
                var listList = []
                for (let key of Object.keys(dictionaryCopy)) {
                    listList.push([key, dictionaryCopy[key]])
                }
                return listList
        }
    }

    async dictionaryLength(taskName, dictionaryName) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.waitUpload()
        return (await this._dictionaryList(dictionaryName, "key")).length
    }

    async dictionaryContain(taskName, dictionaryName, type, value) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.waitUpload()
        return (await this._dictionaryList(dictionaryName, type)).includes(value)
    }

    async dictionaryGet(taskName, dictionaryName, key) {
        var dictionary = await this.getDictionary(dictionaryName)
        await dictionary.waitUpload()
        var {data} = await this.axiosWithToken({
            method: "GET",
            url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/${dictionary.id}/getvalue?key=${key}`,
            verify: `dictId=${dictionary.id}&key=${key}`
        })
        return data[2]
    }

    async getTable(name) {
        await this.waitLoad()
        var table = this.work.table[name]
        if (table == null) {
            if (name in this.work.dictionary) {
                throw new Error(`未找到云数据表 ${name}，存在 ${name} 为云字典，不能对其进行云数据表操作`)
            } else {
                throw new Error(`未找到云数据表 ${name}`)
            }
        }
        return table
    }

    async tableUpdate(taskName, tableName, selectColumn, selectOperator, selectValue, column, value) {
        var table = await this.getTable(tableName)
        await table.uploadTask(taskName, this.axiosWithToken, {
            method: "PUT",
            url: `https://api-creation.codemao.cn/coconut/clouddb/runtime/${table.id}/update`,
            data: {
                querys: {
                    querys: [{
                        column_id: table.getColumn(selectColumn).id,
                        op: selectOperator,
                        value: selectValue
                    }]
                },
                values: [{
                    column_id: table.getColumn(column).id,
                    value: value
                }]
            }
        })
    }

    async tableAdd(taskName, line, tableName) {
        var table = await this.getTable(tableName)
        var values = line.split(",")
        if (values.length > table.columnNameList.length) {
            this.warn(`${taskName}：数据 ${JSON.stringify(line)} 数量 ${values.length} 超过云数据表 ${tableName} 列数 ${table.columnNameList.length}，溢出部分（${JSON.stringify(values.slice(table.columnNameList.length).join(","))}）将存储失败`)
        }
        await table.uploadTask(taskName, this.axiosWithToken, {
            method: "POST",
            url: `https://api-creation.codemao.cn/coconut/clouddb/runtime/${table.id}/insert`,
            data: {
                values: values
            }
        })
    }

    async tableDelete(taskName, tableName, selectColumn, selectOperator, selectValue) {
        var table = await this.getTable(tableName)
        await table.uploadTask(taskName, this.axiosWithToken, {
            method: "PUT",
            url: `https://api-creation.codemao.cn/coconut/clouddb/runtime/${table.id}/delete`,
            data: {
                querys: {
                    querys: [{
                        column_id: table.getColumn(selectColumn).id,
                        op: selectOperator,
                        value: selectValue
                    }]
                }
            }
        })
    }

    async tableEmpty(taskName, tableName) {
        var table = await this.getTable(tableName)
        await table.uploadTask(taskName, this.axiosWithToken, {
            method: "PUT",
            url: `https://api-creation.codemao.cn/coconut/clouddb/v2/runtime/${table.id}/clear`,
            verify: `id=${table.id}`,
            data: {}
        })
    }

    async tableWaitUpload(taskName, tableName) {
        var table = await this.getTable(tableName)
        await table.waitUpload()
    }

    async tableSelect(taskName, tableName, selectColumn, selectOperator, selectValue, type) {
        var table = await this.getTable(tableName)
        await table.waitUpload()
        var {data} = await this.axiosWithToken({
            method: "POST",
            url: `https://api-creation.codemao.cn/coconut/clouddb/runtime/${table.id}/select`,
            data: {
                querys: {
                    querys: [{
                        column_id: table.getColumn(selectColumn).id,
                        op: selectOperator,
                        value: selectValue
                    }]
                }
            }
        })
        var recordArray = data.records
        switch (type) {
            case "dictionary":
                return recordArray.map(record => {
                    var dictionary = {}
                    var {values} = record
                    for (let id of Object.keys(values)) {
                        dictionary[table.getColumn(id).name] = values[id]
                    }
                    return dictionary
                })
            case "list":
                return recordArray.map(record => {
                    var list = []
                    var {values} = record
                    for (let name of table.columnNameList) {
                        list.push(values[table.getColumn(name).id])
                    }
                    return list
                })
        }
    }

    async tableTitleList(taskName, tableName) {
        var table = await this.getTable(tableName)
        return table.columnNameList
    }

    async tableCount(taskName, tableName, type) {
        var table = await this.getTable(tableName)
        switch (type) {
            case "row":
                await table.waitUpload()
                return (await this.axiosWithToken({
                    method: "GET",
                    url: `https://api-creation.codemao.cn/coconut/clouddb/runtime/${table.id}/count?type=RECORD`,
                    verify: `id=${table.id}&type=RECORD`
                })).data
            case "column":
                return table.columnNameList.length
        }
    }

    async getTimestamp() {
        if (timeDifference == null) {
            timeDifference = this.ImportantTask("校准时间", async () => {
                try {
                    timeDifference = (await this.axios({
                        method: "GET",
                        url: "https://api-creation.codemao.cn/coconut/clouddb/currentTime"
                    })).data - Math.round(new Date().getTime() / 1000)
                } catch (error) {
                    timeDifference = 0
                    throw error
                }
            })
        }
        if (timeDifference instanceof Promise) {
            try {
                await timeDifference
            } catch (error) {}
        }
        return Math.round(new Date().getTime() / 1000) + timeDifference
    }

    async axiosWithToken(argument) {
        var {url, method, headers={}, data, verify} = argument
        await this.Task(`${method.toUpperCase()} ${url} ：添加校验信息`, async () => {
            const CryptoJS = this.require("crypto-js")
            var timestamp = await this.getTimestamp()
            if (verify == null) {
                verify = method == "GET" ? url.split("?")[1] : JSON.stringify(data)
            }
            var sign = CryptoJS.SHA256("pBlYqXbJDu" + timestamp + verify)
            sign = sign.toString(CryptoJS.enc.Hex).toLocaleUpperCase()
            headers = {
                ...headers,
                env: 1,
                Sign: sign,
                "X-Coconut-Authorization": this.work.token,
                Timestamp: timestamp
            }
        })
        return await this.axios({url, method, headers, data})
    }

    async axios(argument) {
        var {url, method} = argument
        const axios = await this.Task(`${method.toUpperCase()} ${url} ：获取 Axios 依赖`, () => this.require("axios"))
        try {
            return await this.Task(`${method.toUpperCase()} ${url} `, async () => {
                try {
                    const response = await axios(argument)
                    const { data } = response
                    if (data.success == false) {
                        let error = new Error()
                        error.response = response
                        throw error
                    }
                    return data
                } catch (error) {
                    const { response } = error
                    if (response) {
                        const { data } = response
                        throw new Error(data.error_message || data.error || data.msg || "未知错误")
                    } else if (error.request) {
                        throw new Error("请已发送，但未收到响应")
                    } else {
                        throw new Error("请求发送失败")
                    }
                }
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    require(name) {
        var module = require(name)
        if (module == null) {
            throw new Error(`缺少 ${name} 依赖`)
        }
        return require(name)
    }

    async Task(name, func) {
        var argumentArray = Array.from(arguments).slice(2)
        try {
            return await func.apply(this, argumentArray)
        } catch (error) {
            error.message = `${name} 失败：${error.message}`
            throw error
        }
    }

    async MainTask(name, func) {
        try {
            var result = await this.Task.apply(this, arguments)
            return result
        } catch (error) {
            this.error(error)
        }
    }

    async ImportantTask(name, func) {
        try {
            var result = await this.Task.apply(this, arguments)
            return result
        } catch (error) {
            this.warn(error)
        }
    }

    log(message) {
        this.widgetLog(message)
    }

    warn(message) {
        if (message instanceof Error) {
            this.reportBug(error)
            console.warn(message)
            message = message.message
        }
        this.widgetWarn(message)
        this.emit("onError", message)
    }

    error(error) {
        this.reportBug(error)
        console.error(error)
        this.widgetError(error.message)
        this.emit("onError", error.message)
    }

    reportBug(bug) {
        if (!this.autoReportError) {
            return
        }
        if (bugReporter == null) {
            loadBugReporter()
        }
        var date = new Date().toLocaleString()
        var version = types.version
        var stack = bug.stack.match(/(?<=^[\s]*)[^\s].*?(?=$| \()/gm).join("\\n")
        var work = `${this.work.ID}（${{"0": "H5", "1": "社区"}[this.work.channel]} 通道）`
        var message = `${date},${version},${work},${stack}`
        bugReporter.tableAdd(message, "错误报告")
    }
}

exports.types = types;
exports.widget = Widget;
