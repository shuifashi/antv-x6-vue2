export const edges = ["{\"id\":\"1627981927096\",\"source\":\"97405\",\"target\":\"12870\"}"]
export const nodes = [
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"调节开关\",\"label\":\"调节开关\",\"type\":\"ellipse\",\"actionType\":\"TRIGGER\",\"size\":[100,50],\"x\":155,\"y\":105,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"97405\",\"category\":0,\"nodeId\":1182}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"灯被打开\",\"label\":\"灯被打开\",\"type\":\"rect\",\"actionType\":\"ACTION\",\"size\":[100,50],\"x\":196,\"y\":293,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"12870\",\"category\":2,\"nodeId\":1183}"
]

export const x6Edges = [
    "{\"shape\":\"edge\",\"id\":\"1627981927096\",\"source\":{\"cell\":\"97405\"},\"target\":{\"cell\":\"12870\"},\"zIndex\":1}"
]
export const x6Nodes = [
    {
        "position": { "x": 196, "y": 293 }, "size": { "width": 100, "height": 50 },
        "attrs": {
            "body": { "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#8dc1ff" },
            "label": {
                "text": "语音朗读文本“21321”",
                "fill": "#fff", "strokeWidth": 0.4, "fontSize": 12
            }
        }, "shape": "rect", "id": "12870", "zIndex": 100,
        "markup": [{ "tagName": "rect", "selector": "body" }, { "tagName": "text", "selector": "label" }], "ports": {
            "items": [{ "group": "port-top", "id": "p_top" }, { "group": "port-bottom", "id": "p_bottom" }],
            "groups": {
                "port-top": { "position": "top", "zIndex": 20, "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff" } } },
                "port-bottom": { "position": "bottom", "zIndex": 20, "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff" } } }
            }
        }
    },
    {
        "position": { "x": 155, "y": 105 }, "size": { "width": 100, "height": 50 },
        "attrs": {
            "body": { "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#8dc1ff" },
            "label": {
                "text": "多媒体音量被调节",
                "fill": "#fff", "strokeWidth": 0.4, "fontSize": 12
            }
        },
        "shape": "ellipse",
        "id": "97405",
        "zIndex": 100,
        "ports": {
            "items": [{ "group": "port_g", "id": "p_bottom" }],
            "groups": { "port_g": { "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff" } }, "position": "bottom" } }
        }
    }]
// 多剧情测试
export const fullEdges = [
    "{\"id\":\"1625715145882\",\"source\":\"67745\",\"target\":\"12068\"}",
    "{\"id\":\"1625715824949\",\"source\":\"86898\",\"target\":\"82513\"}",
    "{\"id\":\"1625715990445\",\"source\":\"31738\",\"target\":\"62956\"}",
    "{\"id\":\"1625724850719\",\"source\":\"77499\",\"target\":\"67745\"}",
    "{\"id\":\"1625724891313\",\"source\":\"27910\",\"target\":\"86898\"}",
    "{\"id\":\"1625724895452\",\"source\":\"27910\",\"target\":\"31738\"}",
    "{\"id\":\"1625724906481\",\"source\":\"04751\",\"target\":\"80732\"}"
]

export const fullNodes = [
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"点火\",\"label\":\"点火\",\"type\":\"ellipse\",\"actionType\":\"TRIGGER\",\"size\":[100,50],\"x\":189.90277099609375,\"y\":-134.920166015625,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"77499\",\"category\":0,\"nodeId\":1141}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"12【暂无定义】【暂无定义】\",\"label\":\"12【暂无定义】【暂无定义】\",\"type\":\"diamond\",\"actionType\":\"CONDITION\",\"size\":[100,50],\"x\":186.90277099609375,\"y\":142.079833984375,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"67745\",\"category\":1,\"nodeId\":1142}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"语音朗读文本“呵呵哈哈哈”\",\"label\":\"语音朗读文本“呵呵哈哈哈”\",\"type\":\"rect\",\"actionType\":\"ACTION\",\"size\":[100,50],\"x\":137.90277099609375,\"y\":283.079833984375,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"12068\",\"category\":2,\"nodeId\":1143}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"语音朗读文本“788888”\",\"label\":\"语音朗读文本“788888”\",\"type\":\"rect\",\"actionType\":\"ACTION\",\"size\":[100,50],\"x\":462.90277099609375,\"y\":301.4131851196289,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"82513\",\"category\":2,\"nodeId\":1144}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"疲劳驾驶程度为重度疲劳，可信度区间为[0,100]\",\"label\":\"疲劳驾驶程度为重度疲劳，可信度\",\"type\":\"diamond\",\"actionType\":\"CONDITION\",\"size\":[100,50],\"x\":486.90277099609375,\"y\":74.4131851196289,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"86898\",\"category\":1,\"nodeId\":1145}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"当天是用户生日\",\"label\":\"当天是用户生日\",\"type\":\"diamond\",\"actionType\":\"CONDITION\",\"size\":[100,50],\"x\":659.9027709960938,\"y\":63.413185119628906,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"31738\",\"category\":1,\"nodeId\":1146}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"语音朗读文本“生日快乐”\",\"label\":\"语音朗读文本“生日快乐”\",\"type\":\"rect\",\"actionType\":\"ACTION\",\"size\":[100,50],\"x\":679.9027709960938,\"y\":311.4131851196289,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"62956\",\"category\":2,\"nodeId\":1147}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"多媒体音量被调节\",\"label\":\"多媒体音量被调节\",\"type\":\"ellipse\",\"actionType\":\"TRIGGER\",\"size\":[100,50],\"x\":614.9027709960938,\"y\":-121.5868148803711,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"27910\",\"category\":0,\"nodeId\":1148}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"语音朗读文本“的啦啦啦啊”\",\"label\":\"语音朗读文本“的啦啦啦啊”\",\"type\":\"rect\",\"actionType\":\"ACTION\",\"size\":[100,50],\"x\":975.9027709960938,\"y\":299.4131851196289,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"80732\",\"category\":2,\"nodeId\":1149}",
    "{\"color\":\"#5B8FF9\",\"labelCfg\":{\"style\":{\"fontSize\":12,\"fill\":\"#fff\"}},\"linkPoints\":{\"top\":false,\"size\":10,\"left\":false,\"bottom\":false,\"right\":false},\"tooltip\":\"语音指令文本为”你好”，【暂无定义】,语音指令意图为【暂无定义】,语音指令的场景为【暂无定义】\",\"label\":\"语音指令文本为”你好”，【暂无\",\"type\":\"ellipse\",\"actionType\":\"TRIGGER\",\"size\":[100,50],\"x\":939.9027709960938,\"y\":-46.920166015625,\"anchorPoints\":[[0.5,0],[0.5,1]],\"style\":{\"highlight\":{\"text-shape\":{\"fontWeight\":500},\"fill\":\"rgb(223, 234, 255)\",\"stroke\":\"#4572d9\",\"lineWidth\":2},\"hover\":{\"fill\":\"#9EC9FF\"},\"inactive\":{\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(191, 213, 255)\",\"lineWidth\":1},\"disable\":{\"fill\":\"rgb(250, 250, 250)\",\"stroke\":\"rgb(224, 224, 224)\",\"lineWidth\":1},\"active\":{\"shadowBlur\":10,\"fill\":\"rgb(247, 250, 255)\",\"stroke\":\"rgb(95, 149, 255)\",\"shadowColor\":\"rgb(95, 149, 255)\",\"lineWidth\":2},\"fill\":\"#9EC9FF\",\"selected\":{\"fill\":\"steelblue\",\"stroke\":\"#666\",\"lineWidth\":2}},\"id\":\"04751\",\"category\":0,\"nodeId\":1150}"
]

export const exampleNodes1 = [
    "{\"position\":{\"x\":210,\"y\":100},\"size\":{\"width\":100,\"height\":50},\"attrs\":{\"body\":{\"stroke\":\"#A4C2FF\",\"strokeWidth\":1,\"fill\":\"#cceaff\"},\"label\":{\"text\":\"触发器\",\"fill\":\"#7D7671\",\"strokeWidth\":0.4,\"fontSize\":12}},\"shape\":\"ellipse\",\"id\":\"6c01db2c-4bf2-41f4-866c-94aca99c55ad\",\"data\":{\"actionType\":\"TRIGGER\",\"initialization\":true,\"tooltip\":\"触发器\"},\"ports\":{\"items\":[{\"group\":\"port_g\",\"id\":\"p_bottom\"}],\"groups\":{\"port_g\":{\"attrs\":{\"circle\":{\"dataClass\":\"choice-point\",\"r\":6,\"magnet\":true,\"stroke\":\"#5b8ffa\",\"strokeWidth\":1,\"fill\":\"#fff\"}},\"position\":\"bottom\"}}},\"zIndex\":1}",
    "{\"position\":{\"x\":235,\"y\":220},\"size\":{\"width\":50,\"height\":50},\"attrs\":{\"body\":{\"transform\":\"rotate(-45,25,25)\",\"stroke\":\"#FDBE94\",\"strokeWidth\":1,\"fill\":\"#ffe6bc\",\"rx\":5,\"ry\":5},\"label\":{\"text\":\"条件\",\"fill\":\"#7D7671\",\"strokeWidth\":0.4,\"fontSize\":12}},\"shape\":\"rect\",\"id\":\"dab253d6-b31c-4a1b-a542-f29f464d3390\",\"markup\":[{\"tagName\":\"rect\",\"selector\":\"body\"},{\"tagName\":\"text\",\"selector\":\"label\"}],\"data\":{\"actionType\":\"CONDITION\",\"initialization\":true,\"tooltip\":\"条件\"},\"ports\":{\"items\":[{\"group\":\"in\",\"id\":\"p_top\",\"connected\":true},{\"group\":\"out\",\"id\":\"p_bottom\"}],\"groups\":{\"in\":{\"attrs\":{\"circle\":{\"dataClass\":\"choice-point\",\"r\":6,\"magnet\":true,\"stroke\":\"#5b8ffa\",\"strokeWidth\":1,\"fill\":\"#fff\",\"transform\":\"translate(0, -7)\"}},\"position\":\"top\"},\"out\":{\"attrs\":{\"circle\":{\"dataClass\":\"choice-point\",\"r\":6,\"magnet\":true,\"stroke\":\"#5b8ffa\",\"strokeWidth\":1,\"fill\":\"#fff\",\"transform\":\"translate(0, 7)\"}},\"position\":\"bottom\"}}},\"zIndex\":2}",
    "{\"position\":{\"x\":210,\"y\":352},\"size\":{\"width\":100,\"height\":50},\"attrs\":{\"body\":{\"stroke\":\"#C4C4C4\",\"strokeWidth\":1,\"fill\":\"#ececec\"},\"label\":{\"text\":\"动作\",\"fill\":\"#7D7671\",\"strokeWidth\":0.4,\"fontSize\":12}},\"shape\":\"rect\",\"id\":\"e8639719-8b39-40b5-b384-ff32ac5c91c7\",\"markup\":[{\"tagName\":\"rect\",\"selector\":\"body\"},{\"tagName\":\"text\",\"selector\":\"label\"}],\"data\":{\"actionType\":\"ACTION\",\"initialization\":true,\"tooltip\":\"动作\"},\"ports\":{\"items\":[{\"group\":\"port-top\",\"id\":\"p_top\",\"connected\":true},{\"group\":\"port-bottom\",\"id\":\"p_bottom\"}],\"groups\":{\"port-top\":{\"position\":\"top\",\"zIndex\":20,\"attrs\":{\"circle\":{\"dataClass\":\"choice-point\",\"r\":6,\"magnet\":true,\"stroke\":\"#5b8ffa\",\"strokeWidth\":1,\"fill\":\"#fff\"}}},\"port-bottom\":{\"position\":\"bottom\",\"zIndex\":20,\"attrs\":{\"circle\":{\"dataClass\":\"choice-point\",\"r\":6,\"magnet\":true,\"stroke\":\"#5b8ffa\",\"strokeWidth\":1,\"fill\":\"#fff\"}}}}},\"zIndex\":3}"
]

export const exampleEdges1 = [
    "{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#7c68fc\",\"strokeDasharray\":\"\"}},\"id\":\"953501bf-e263-428a-bf67-97deff0e018a\",\"zIndex\":-1,\"source\":{\"cell\":\"6c01db2c-4bf2-41f4-866c-94aca99c55ad\",\"port\":\"p_bottom\"},\"target\":{\"cell\":\"dab253d6-b31c-4a1b-a542-f29f464d3390\",\"port\":\"p_top\"},\"labels\":[{\"attrs\":{\"label\":{\"text\":\"\"}}}]}",
    "{\"shape\":\"edge\",\"attrs\":{\"line\":{\"stroke\":\"#7c68fc\",\"strokeDasharray\":\"\"}},\"id\":\"4c0d4787-3a25-4e56-adef-553876936c7c\",\"zIndex\":-1,\"source\":{\"cell\":\"dab253d6-b31c-4a1b-a542-f29f464d3390\",\"port\":\"p_bottom\"},\"target\":{\"cell\":\"e8639719-8b39-40b5-b384-ff32ac5c91c7\",\"port\":\"p_top\"},\"labels\":[{\"attrs\":{\"label\":{\"text\":\"\"}}}]}"
]

export const nodes1 = [
    { "position": { "x": 150, "y": 110 }, "size": { "width": 100, "height": 50 }, "attrs": { "body": { "stroke": "#A8D7CD", "strokeWidth": 1, "fill": "#d0fff5" }, "label": { "text": "触发器", "fill": "#7D7671", "strokeWidth": 0.4, "fontSize": 12 } }, "shape": "ellipse", "id": "22560874-ed43-4d40-8c07-a921066b282a", "data": { "actionType": "TRIGGER", "initialization": false, "tooltip": "触发器1" }, "ports": { "items": [{ "group": "port_g", "id": "p_bottom" }], "groups": { "port_g": { "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff" } }, "position": "bottom" } } }, "zIndex": 1 },
    { "position": { "x": 175, "y": 236 }, "size": { "width": 50, "height": 50 }, "attrs": { "body": { "transform": "rotate(-45,25,25)", "stroke": "#FDBE94", "strokeWidth": 1, "fill": "#ffe6bc", "rx": 5, "ry": 5 }, "label": { "text": "条件", "fill": "#7D7671", "strokeWidth": 0.4, "fontSize": 12 } }, "shape": "rect", "id": "8f609250-f17d-46e6-a726-ebf1397cdcf6", "markup": [{ "tagName": "rect", "selector": "body" }, { "tagName": "text", "selector": "label" }], "data": { "actionType": "CONDITION", "initialization": false, "tooltip": "状态条件1" }, "ports": { "items": [{ "group": "in", "id": "p_top", "connected": true }, { "group": "out", "id": "p_bottom" }], "groups": { "in": { "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff", "transform": "translate(0, -7)" } }, "position": "top" }, "out": { "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff", "transform": "translate(0, 7)" } }, "position": "bottom" } } }, "zIndex": 2 },
    { "position": { "x": 150, "y": 372 }, "size": { "width": 100, "height": 50 }, "attrs": { "body": { "stroke": "#C4C4C4", "strokeWidth": 1, "fill": "#ececec" }, "label": { "text": "动作", "fill": "#7D7671", "strokeWidth": 0.4, "fontSize": 12 } }, "shape": "rect", "id": "69cd77ef-6b89-4e15-ae31-bed2192bf6ab", "markup": [{ "tagName": "rect", "selector": "body" }, { "tagName": "text", "selector": "label" }], "data": { "actionType": "ACTION", "initialization": false, "tooltip": "执行动作1" }, "ports": { "items": [{ "group": "port-top", "id": "p_top", "connected": true }, { "group": "port-bottom", "id": "p_bottom" }], "groups": { "port-top": { "position": "top", "zIndex": 20, "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff" } } }, "port-bottom": { "position": "bottom", "zIndex": 20, "attrs": { "circle": { "dataClass": "choice-point", "r": 6, "magnet": true, "stroke": "#5b8ffa", "strokeWidth": 1, "fill": "#fff" } } } } }, "zIndex": 3 }
]
export const edges1 = [
    { "shape": "edge", "attrs": { "line": { "stroke": "#7c68fc", "strokeDasharray": "" } }, "id": "eb63384f-4792-4e5e-afbc-e0e3817752c5", "zIndex": -1, "source": { "cell": "22560874-ed43-4d40-8c07-a921066b282a", "port": "p_bottom" }, "target": { "cell": "8f609250-f17d-46e6-a726-ebf1397cdcf6", "port": "p_top" }, "labels": [{ "attrs": { "label": { "text": "" } } }] },
    { "shape": "edge", "attrs": { "line": { "stroke": "#7c68fc", "strokeDasharray": "" } }, "id": "69e70454-c971-4366-ad10-8aa0bb792d5d", "zIndex": -1, "source": { "cell": "8f609250-f17d-46e6-a726-ebf1397cdcf6", "port": "p_bottom" }, "target": { "cell": "69cd77ef-6b89-4e15-ae31-bed2192bf6ab", "port": "p_top" }, "labels": [{ "attrs": { "label": { "text": "" } } }] }
]