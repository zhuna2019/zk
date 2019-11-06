


//1,监控在线情况
function onlineMonitor(data){
    var onlineMonitor = echarts.init(document.getElementById('onlineMonitor'));
    option = {
        title:{
            show:true,
            text:'在线比:',
            formatter: "{a} <br/>{c}: {b} ({d}%)",
            x:'20%',
            y:'30%',
            textStyle: {
                fontSize: '14',
                color:'white',
                fontWeight: 'normal'
            }
    },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{c}: {b} ({d}%)"
            
        },
        legend: {
            orient: 'vertical',
            x: "right",
            data:['在线','离线'],
            textStyle: { //图例文字的样式
                color: '#fff',
                fontSize: 12,
            },
            
        },
        color : [  'rgb(0,141,255)'  ,'rgb(2,64,125)'],
        series: [
            {
                name:'监控在线情况',
                type:'pie',
                radius: ['45%', '75%'],
                center: ['35%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        show:false,
                        textStyle: {
                            fontSize: '15',
                            color:'#fff'
                            // fontWeight: 'bold'
                        }
                    },
                    //设置百分比数字颜色
                    per : {
                        color : '#00B4FB',
                        fontSize : 14,
                        padding : [ 2, 4 ],
                        borderRadius :2,
                        
                    },
                    
                },
                
                labelLine: {
                    normal: {
                        show:false,        
                    }
                },   
                data:[
                    {value:631, name:"在线"},
                    {value:54, name:'离线'},             
                ]
            }
        ]
    };
    onlineMonitor.setOption(option);
}
onlineMonitor()
// 2,监控位置
function positionMonitor(data){
    var positionMonitor = echarts.init(document.getElementById('positionMonitor'));
    position = {

        title: {
            left: 'center',
            top: 10,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name:'位置情况',
                type:'pie',
                radius : '70%',
                center: ['50%', '40%'],
                data:[
                    {value:553, name:'仓外台数',itemStyle: {color: 'rgb(33,50,93)'}},
                    {value:192, name:'仓内台数',itemStyle: {color: 'rgb(168,51,59)'}}
                    
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {  //饼图图形上的文本标签
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize:16
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.1,
                        length: 10,
                        length2: 6
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal:{
                        label:{
                            show:true,
                            formatter:'{b}({d}%)'
                        },
                        labelLine:{show:true}
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    positionMonitor.setOption(position);
}
positionMonitor()
//3,品种情况
function breedMonitor(data){
    var breedMonitor=echarts.init(document.getElementById('breedMonitor'));
    breed = {
        title: {
            text: '品种分布',
            x:'5%',
            y:'5%',
            textStyle: {
                fontSize: '20',
                color:'rgb(81,175,237)',
                fontWeight: 'normal'
            },
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        label: {  //饼图图形上的文本标签
            normal: {
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.8)'
                }
            }
        },
        series : [
            {
                name: '品种情况',
                type: 'pie',
                radius : '60%',
                center: ['40%', '50%'],
                data:[
                    {value:335, name:'小麦及混合小麦\n',itemStyle: {color: 'rgb(207,136,32)'}},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 1,
                        shadowOffsetX: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal:{
                        label:{
                            show:true,
                            formatter:'{b}({d}%)',
                            
                        },
                        labelLine:{show:true,
                        length:10}
                    }
                }
            }
        ]
    };
    breedMonitor.setOption(breed);
}
breedMonitor()
//储粮情况
//1设计仓容
function designStorage(data){
    var designStorage=echarts.init(document.getElementById('designStorage'));
    var e=5.52/12.8*100; 
    var design={
        title:{
            show:true,
            text:'储粮情况',
            x:'5%',
            y:'5%',
            textStyle: {
                fontSize: '20',
                color:'rgb(81,175,237)',
                fontWeight: 'normal'
            }
        },
        // tooltip: {
        //     trigger: 'item',
        //     formatter: "{d}%",
        //     show:false
        // },
        legend: {
            orient: 'vertical',
            x: "left",
            y:'bottom',
            data:['实际存储5.52吨','设计仓容12.8吨'],
            textStyle: { //图例文字的样式
                color: '#fff',
                fontSize: 12,
            },
            
        },
        series: 
            {
                name:'',
                type:'pie',
                radius: ['45%', '60%'],
                center: ['60%', '45%'],
                avoidLabelOverlap: true,
                hoverAnimation:false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:e, name:'实际存储5.52吨',itemStyle: {color: 'rgb(79,190,245)'}},
                    {value:100-e, name:'设计仓容12.8吨',itemStyle: {color: 'rgb(83,83,83)'}}
                ]
            }
    }
    designStorage.setOption(design);
}
designStorage()
//粮温趋势
function grainTemperature(data){
    var grainTemperature=echarts.init(document.getElementById('grainTemperature'));
    Temperature = {
     baseOption: {
        timeline: {
                autoPlay:true,
                left:'5%',
                right:"5%",
                bottom:"0",
                data: ['2019-01-01', '2019-02-01', '2019-03-01','2019-04-01', '2019-05-01', '2019-06-01']
            },
        title: {
            // text: '粮温情况统计',
            textStyle: {
                fontSize: '20',
                color:'rgb(81,175,237)',
                fontWeight: 'normal'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['平均粮温','仓温','气温'],
            textStyle: {
                fontSize: '16',
                color:'white',
                fontWeight: 'normal'
            },
            x: "right"
           
        },
        grid: {
            left: '1%',
            right: '6%',
            bottom: '30%',
            containLabel: true,
           
        },
        xAxis: {
            type: 'category',
            boundaryGap: false, 
            splitLine: {　　　　 show: false　　 },
            axisLine: {
                lineStyle: {
                    color: '#aaa',
                    width: 1, //这里是为了突出显示加上的  
                }
            },
            data: ['1号仓','2号仓','3号仓','4号仓','5号仓','6号仓','7号仓'],
            textStyle: {
                fontSize: '20',
                color:'red',
                fontWeight: 'normal'
            },
        },  
        yAxis: {
            type: 'value',
            splitLine: {　　　　 show: false　　 },
            axisLine: {
                lineStyle: {
                    color: '#aaa',
                    width: 1, //这里是为了突出显示加上的  
                }
            },
        },
        series: [
            {
                name:'平均粮温',
                type:'line',
                // stack: '总量',
                // data:[20, 32, 10, 34, 50, 30, 110],
                itemStyle: {color: 'rgb(204,138,28)'},

            },
            {
                name:'仓温',
                type:'line',
                // stack: '总量',
                // data:[20, 82, 91, 34, 90, 30, 110],
                itemStyle: {color: '#ff0000'},
            },
            {
                name:'气温',
                type:'line',
                // stack: '总量',
                // data:[50, 32, 01, 54, 90, 30, 110],
                itemStyle: {color: 'rgb(6,136,255)'},
            }
        ]
    },
    options: [
        { // 这是'2019-01-01' 对应的 option
            title: {
                text: '2019-01-01粮温情况统计'
            },
            series: [
                {data:[30, 52, 40, 54,50, 20, 40],}, // 系列一的数据
                {data:[20, 32, 30, 24, 40, 50, 30],}, // 系列二的数据
                {data:[10, 22, 10, 34, 20, 30, 10],},  // 系列三的数据
            ]
        },
        { // 这是'2019-02-01' 对应的 option
            title: {
                text: '2019-02-01粮温情况统计'
            },
            series: [
                {data:[40, 32, 40, 14, 30, 30, 50],}, // 系列一的数据
                {data:[30, 42, 30, 34, 40, 60, 30],}, // 系列二的数据
                {data:[20, 52, 10, 24, 50, 30, 40],},  // 系列三的数据
            ]
        },
        { // 这是'2019-03-01' 对应的 option
            title: {
                text: '2019-03-01粮温情况统计'
            },
            series: [
                {data:[40, 32, 10, 34, 30, 50, 20],}, // 系列一的数据
                {data:[50, 32, 10, 24, 40, 30, 30],}, // 系列二的数据
                {data:[20, 32, 10, 14, 50, 20, 40],},  // 系列三的数据
            ]
        },
        { // 这是'2019-03-01' 对应的 option
        title: {
            text: '2019-04-01粮温情况统计'
        },
        series: [
            {data:[10, 32, 10,14, 50, 30, 50],}, // 系列一的数据
            {data:[30, 32, 20, 24, 40, 40, 30],}, // 系列二的数据
            {data:[20, 32, 30, 34, 30, 20, 40],},  // 系列三的数据
        ]
       },
       { // 这是'2019-03-01' 对应的 option
       title: {
           text: '2019-05-01粮温情况统计'
       },
       series: [
            {data:[30, 42, 20, 34, 50, 30, 60],}, // 系列一的数据
            {data:[20, 22, 10, 54, 30, 60, 40],}, // 系列二的数据
            {data:[20, 12, 30, 32, 40, 30, 30],},  // 系列三的数据
       ]
       },
       { // 这是'2019-03-01' 对应的 option
       title: {
           text: '2019-06-01粮温情况统计'
       },
       series: [
            {data:[20, 32, 10, 34, 50, 30, 110],}, // 系列一的数据
            {data:[20, 32, 10, 34, 50, 30, 110],}, // 系列二的数据
            {data:[20, 32, 20, 34, 50, 30, 110],},  // 系列三的数据
       ]
   },
   { // 这是'2019-03-01' 对应的 option
       title: {
        text: '2019-07-01粮温情况统计'
       },
       series: [
            {data:[30, 32, 10, 34, 50, 30, 110],}, // 系列一的数据
            {data:[20, 32, 50, 34, 50, 30, 110],}, // 系列二的数据
            {data:[20, 32, 10, 34, 50, 30, 110],},  // 系列三的数据
       ]
    }
    ]

    };
    grainTemperature.setOption(Temperature);
}
grainTemperature()
