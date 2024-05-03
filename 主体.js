const types = {
    type: "SLIGHTNING_COCO_CLOUD_SPACE",
    title: "椰子云空间",
    author: "SLIGHTNING",
    icon: "icon-widget-cloud-table",
	version: "1.0.0",
    isInvisibleWidget: true,
    isGlobalWidget: true,
    properties: [
        {
            key: "asyncUpload",
            label: "异步上传",
            valueType: "boolean",
            defaultValue: false
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
                    line: "作品",
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
                valueType: ["number", "string"],
                blockOptions: { color: color.table }
            }, {
                key: "tableEmpty",
                label: "清空",
                params: [ param.tableName ],
                blockOptions: {
                    color: color.table,
                    space: 40
                }
            }, {
                key: "tableSelect",
                label: "查询",
                params: [
                    param.tableName, ...param.select
                ],
                valueType: ["number", "string"],
                blockOptions: { color: color.table }
            }, {
                key: "tableGet",
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
    events: []
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

var timeDifference

async function Task(name, func) {
    var argumentArray = Array.from(arguments).slice(2)
    try {
        return await func.apply(this, argumentArray)
    } catch (error) {
        error.message = `${name} 失败：${error.message}`
        throw error
    }
}

class Widget extends InvisibleWidget {

    constructor(props) {
        super(props)
        this.asyncUpload = props.asyncUpload
        for (let method of methods) {
            let original = this[method.key]
            this[method.key] = async function () {
                var taskName = method.label || "获取"
                for (let i = 0; i < method.params.length; i++) {
                    let param = method.params[i]
                    if ("label" in param) {
                        taskName += param.label
                    }
                    if ("dropdown" in param) {
                        taskName += ` ${param.dropdown.find(item => item.value == arguments[i]).label} `
                    } else {
                        taskName += ` ${JSON.stringify(arguments[i])} `
                    }
                    if ("labelAfter" in param) {
                        taskName += param.labelAfter
                    }
                }
                var argumentArray = Array.from(arguments)
                argumentArray.unshift(taskName)
                try {
                    return await this.MainTask(taskName, original, ...argumentArray)
                } catch (error) {
                    this.error(error)
                }
            }
        }
    }

    load(taskName, workID, channel) {
        this.work = this.MainTask(taskName, async () => {
            var {data} = await Task("获取作品数据", this.axios, {
                method: "GET",
                url: `https://api-creation.codemao.cn/coconut/web/work/${workID}/load?channel=${channel}`
            })
            var bcmc = await Task("加载作品发布文件", this.axios, {
                method: "GET",
                url: data.bcmc_url
            })
            var work = {
                token: bcmc.apiToken,
                dictionary: {},
                table: {}
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
                        name: widget.title
                    }
                    work.dictionary[dictionary.name] = dictionary
                    work.dictionary[dictionary.id] = dictionary
                } else if (widget.type == "CLOUD_SPACE_TABLE_WIDGET") {
                    let table = {
                        ...DataManager,
                        id: widget.attributes.cloudTableId,
                        widgetName: widget.title
                    }
                    tableLoadPromiseArray.push((async () => {
                        try {
                            await Task(`加载云数据表控件 ${table.widgetName} 的源数据表（ID：${table.id}）`, async () => {
                                var tableInfo = (await this.axiosWithToken({
                                    method: "GET",
                                    url: `https://api-creation.codemao.cn/coconut/clouddb/v2/runtime/list?db_ids=${table.id}`,
                                    verify: `ids=[${table.id}]`
                                })).data[0]
                                table.name = tableInfo.name
                                work.table[table.widgetName] = table
                                work.table[table.id] = table
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

    async dictionarySet(taskName, name, key, value) {
        var dictionary = await this.getDictionary(name)
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

    async dictionaryDelete(taskName, name, key) {
        var dictionary = await this.getDictionary(name)
        await dictionary.uploadTask(taskName, this.axiosWithToken, {
            method: "DELETE",
            url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/${dictionary.id}/remove?key=${key}`,
            verify: `dictId=${dictionary.id}&id=&key=${key}`
        })
    }

    async dictionaryEmpty(taskName, name) {
        var dictionary = await this.getDictionary(name)
        await dictionary.uploadTask(taskName, this.axiosWithToken, {
            method: "DELETE",
            url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/clear/${dictionary.id}`,
            verify: `dictId=${dictionary.id}`
        })
    }

    async dictionaryCopy(taskName, name) {
        var dictionary = await this.getDictionary(name)
        await dictionary.waitUpload()
        var keyList = await this.dictionaryList(name, "key")
        var copy = {}
        for (let key of keyList) {
            copy[key] = this.dictionaryGet(name, key)
        }
        for (let key in copy) {
            copy[key] = await copy[key]
        }
        return copy
    }

    async dictionaryList(taskName, name, type) {
        var dictionary = await this.getDictionary(name)
        await dictionary.waitUpload()
        switch (type) {
            case "key":
                return (await this.axiosWithToken({
                    method: "GET",
                    url: `https://api-creation.codemao.cn/coconut/webdb/try/dict/${dictionary.id}/keys`,
                    verify: `dictId=${dictionary.id}`
                })).data
            case "value":
                return Object.values(await this.dictionaryCopy(name))
            case "dictionary":
                var dictionaryCopy = await this.dictionaryCopy(name)
                var dictionaryList = []
                for (let key of Object.keys(dictionaryCopy)) {
                    dictionaryList.push({
                        "键": key,
                        "值": dictionaryCopy[key]
                    })
                }
                return dictionaryList
            case "list":
                var dictionaryCopy = await this.dictionaryCopy(name)
                var listList = []
                for (let key of Object.keys(dictionaryCopy)) {
                    listList.push([key, dictionaryCopy[key]])
                }
                return listList
        }
    }

    async dictionaryLength(taskName, name) {
        var dictionary = await this.getDictionary(name)
        await dictionary.waitUpload()
        return (await this.dictionaryList(name, "key")).length
    }

    async dictionaryContain(taskName, name, type, value) {
        var dictionary = await this.getDictionary(name)
        await dictionary.waitUpload()
        return (await this.dictionaryList(name, type)).includes(value)
    }

    async dictionaryGet(taskName, name, key) {
        var dictionary = await this.getDictionary(name)
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

    async MainTask(name, func) {
        try {
            var result = await Task.apply(this, arguments)
            return result
        } catch (error) {
            this.error(error)
        }
    }

    async ImportantTask(name, func) {
        try {
            var result = await Task.apply(this, arguments)
            return result
        } catch (error) {
            this.warn(error)
        }
    }

    async axiosWithToken(argument) {
        var {url, method, headers={}, data, verify} = argument
        const CryptoJS = require("crypto-js")
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
        return await this.axios({url, method, headers, data})
    }

    async axios(argument) {
        const axios = require("axios")
        var {url, method} = argument
        try {
            return await Task(`${method.toUpperCase()} ${url} `, async () => {
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

    log(message) {
        this.widgetLog(message)
    }

    warn(message) {
        if (message instanceof Error) {
            console.warn(message)
            message = message.message
        }
        this.widgetWarn(message)
    }

    error(error) {
        console.error(error)
        this.widgetError(error.message)
    }
}

exports.types = types;
exports.widget = Widget;
