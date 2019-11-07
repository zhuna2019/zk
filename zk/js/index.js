var onlineMonitor = echarts.init(document.getElementById('onlineMonitor'));
var positionMonitor = echarts.init(document.getElementById('positionMonitor'));
var breedMonitor=echarts.init(document.getElementById('breedMonitor'));
var designStorage=echarts.init(document.getElementById('designStorage'));
var grainTemperature=echarts.init(document.getElementById('grainTemperature'));
//1,监控在线情况
 var onlineMonitorData=(function(){ 
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
            x: "70%",
            y:"15%",
            data:['在线','离线'],
            textStyle: { //图例文字的样式
                color: 'rgb(231, 237, 243)',
                fontSize: 12,
            },
            
        },
        color : [  'rgb(0,141,255)'  ,'rgb(2,64,125)'],
        series: [
            {
                name:'监控在线情况',
                type:'pie',
                radius: ['45%', '70%'],
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
    }
    onlineMonitor.setOption(option);
    })()

// 2,监控位置
var positionMonitorData=(function(){
    
    option= {

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
                radius : '60%',
                center: ['50%', '35%'],
                data:[
                    {value:553, name:'仓外台数',itemStyle: {color: 'rgb(33,50,93)'}},
                    {value:192, name:'仓内台数',itemStyle: {color: 'rgb(168,51,59)'}}
                    
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {  //饼图图形上的文本标签
                    normal: {
                        textStyle: {
                            color: 'rgb(231, 237, 243)',
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
    positionMonitor.setOption(option);
})()

//3,品种情况
var breedMonitorData=(function(){   
    option= {
        // title: {
        //     text: '品种分布',
        //     x:'5%',
        //     y:'5%',
        //     textStyle: {
        //         fontSize: '20',
        //         color:'rgb(81,175,237)',
        //         fontWeight: 'normal'
        //     },
        // },
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
                center: ['40%', '40%'],
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
                        length:5}
                    }
                }
            }
        ]
    };
    breedMonitor.setOption(option);
})()

//4,储粮情况
var designStorageData=(function(){  
    var e=5.52/12.8*100; 
    var option={
        // title:{
        //     show:true,
        //     text:'储粮情况',
        //     x:'5%',
        //     y:'5%',
        //     textStyle: {
        //         fontSize: '20',
        //         color:'rgb(81,175,237)',
        //         fontWeight: 'normal'
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{d}%",
            show:true
        },
        legend: {
          
            x: "55%",
            data:['实际存储','设计仓容'],
            textStyle: { //图例文字的样式
                color: 'rgb(231, 237, 243)',
                fontSize: 12,
            },
            
        },
        series:{
                name:'',
                type:'pie',
                radius: ['40%', '60%'],
                center: ['50%', '60%'],
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
                    {value:e, name:'实际存储',itemStyle: {color:'rgb(209, 83, 10)'}},
                    {value:100-e, name:'设计仓容',itemStyle: {color: 'rgb(83,83,83)'}}
                ]
             }
    }  
    designStorage.setOption(option);
    return function(){
        var d=JSON.parse(localStorage.getItem("data"));
        option.series.data=d;
        designStorage.hideLoading();
        designStorage.setOption(option);
    }
})()

//5,粮温趋势
var grainTemperatureData=(function(){
    option = {
     baseOption: {
        timeline: {
                show:false,
                playInterval:6000,
                autoPlay:true,
                left:'5%',
                right:"5%",
                bottom:"0",
                data: ['2002', '2003', '2004','2005', '2006', '2007',]
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
            bottom: '10%',
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
            data: ['2019-11-7','2019-11-8','2019-11-9','2019-11-10','2019-11-11','2019-11-12','2019-11-13'],
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
                text: '1号仓粮温情况统计'
            },
            series: [
                {data:[30, 52, 40, 54,50, 20, 40]}, // 系列一的数据
                {data:[20, 32, 30, 24, 40, 50, 30]}, // 系列二的数据
                {data:[10, 22, 10, 34, 20, 30, 10]},  // 系列三的数据
            ]
        },
        { // 这是'2019-02-01' 对应的 option
            title: {
                text: '2号仓粮温情况统计'
            },
            series: [
                {data:[40, 32, 40, 14, 30, 30, 50]}, // 系列一的数据
                {data:[30, 42, 30, 34, 40, 60, 30]}, // 系列二的数据
                {data:[20, 52, 10, 24, 50, 30, 40]},  // 系列三的数据
            ]
        },
        { // 这是'2019-03-01' 对应的 option
            title: {
                text: '3号仓粮温情况统计'
            },
            series: [
                {data:[40, 32, 10, 34, 30, 50, 20]}, // 系列一的数据
                {data:[50, 32, 10, 24, 40, 30, 30]}, // 系列二的数据
                {data:[20, 32, 10, 14, 50, 20, 40]},  // 系列三的数据
            ]
        },
        { // 这是'2019-03-01' 对应的 option
        title: {
            text: '4号仓粮温情况统计'
        },
        series: [
            {data:[10, 32, 10,14, 50, 30, 50]}, // 系列一的数据
            {data:[30, 32, 20, 24, 40, 40, 30]}, // 系列二的数据
            {data:[20, 32, 30, 34, 30, 20, 40]},  // 系列三的数据
        ]
       },
       { // 这是'2019-03-01' 对应的 option
       title: {
           text: '5号仓粮温情况统计'
       },
       series: [
            {data:[30, 42, 20, 34, 50, 30, 60]}, // 系列一的数据
            {data:[20, 22, 10, 54, 30, 60, 40]}, // 系列二的数据
            {data:[20, 12, 30, 32, 40, 30, 30]},  // 系列三的数据
       ]
       },
       { // 这是'2019-03-01' 对应的 option
       title: {
           text: '6号仓粮温情况统计'
       },
       series: [
            {data:[20, 32, 10, 34, 50, 30, 11]}, // 系列一的数据
            {data:[20, 32, 10, 14, 30, 20, 21]}, // 系列二的数据
            {data:[20, 32, 20, 38, 50, 40, 31]},  // 系列三的数据
       ]
   },
   { 
       title: {
        text: '7号仓粮温情况统计'
       },
       series: [
            {data:[30, 32, 10, 34, 50, 30, 33]}, // 系列一的数据
            {data:[20, 32, 50, 14, 30, 40, 43]}, // 系列二的数据
            {data:[20, 32, 10, 24, 20, 50, 23]},  // 系列三的数据
       ]
    },
    { 
        title: {
         text: '8号仓粮温情况统计'
        },
        series: [
             {data:[30, 32, 10, 34, 50, 30, 33]}, // 系列一的数据
             {data:[20, 32, 50, 14, 30, 40, 43]}, // 系列二的数据
             {data:[20, 32, 10, 24, 20, 50, 23]},  // 系列三的数据
        ]
     },
     { 
        title: {
         text: '9号仓粮温情况统计'
        },
        series: [
             {data:[30, 32, 10, 34, 50, 30, 33]}, // 系列一的数据
             {data:[20, 32, 50, 14, 30, 40, 43]}, // 系列二的数据
             {data:[20, 32, 10, 24, 20, 50, 23]},  // 系列三的数据
        ]
     },
     { 
        title: {
         text: '10号仓粮温情况统计'
        },
        series: [
             {data:[30, 32, 10, 34, 50, 30, 33]}, // 系列一的数据
             {data:[20, 32, 50, 14, 30, 40, 43]}, // 系列二的数据
             {data:[20, 32, 10, 24, 20, 50, 23]},  // 系列三的数据
        ]
     }
    ]

    };
    grainTemperature.setOption(option);
})()

setTimeout(function (){
    window.onresize = function () {
        onlineMonitor.resize();
        positionMonitor.resize();
        breedMonitor.resize();
        designStorage.resize();
        grainTemperature.resize();
    }
},200)

