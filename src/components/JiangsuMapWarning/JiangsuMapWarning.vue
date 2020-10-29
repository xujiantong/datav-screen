<template>
  <div style="width: 100%; height: 100%;">
    <mk-vue-echarts :options="options"/>
  </div>
</template>

<script>
  import { ref, onMounted , onUnmounted} from 'vue'
  import echarts from 'echarts'
  import cloneDeep from 'lodash/cloneDeep'
  export default {
    name: 'JiangsuMapWarning',
    setup () {
      const options = ref({})
      let timer = null;
      const update = () => {
        const zoom = 1
        const roam = false
        fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
          .then(response => response.json())
          .then(data => {
            const center = []
            data.features.forEach(item => {
              if (item.properties) {
                center.push({
                  key: item.properties.name,
                  value: item.properties.center
                })
              }
            })

            // 注册地图
            echarts.registerMap('jiangsu', data)
            options.value = {
              visualMap: {
                show: true, // 左下角标识是否显示
                max: 100,
                seriesIndex: [0], // 选择数据源 (多组数据时)
                inRange: {
                  color: ['#a5dcf4', '#006edd']
                }
              },
              geo: [{
                map: 'jiangsu',
                zoom, // 默认显示级别
                roam, //启动鼠标滚轮地图缩放拖动功能
                scaleLimit: {
                  min: 0,
                  max: 3
                }, //控制最大最小缩放比例
                itemStyle: {
                  areaColor: '#013c62',
                  shadowColor: '#013c62',
                  shadowBlur: 20,
                  shadowOffsetX: -5,
                  shadowOffsetY: 15,
                }
              }],
              series: [
                {
                  type: 'map',
                  mapType: 'jiangsu',
                  zoom,
                  roam,
                  label: {
                    show: true,
                    color: '#fff',
                    emphasis: {
                      color: '#fff',
                      show: false
                    }
                  },
                  itemStyle: {
                    normal: {
                      borderColor: '#2980b9',
                      borderWidth: 1,
                      areaColor: '#12235c',
                    },
                    emphasis: {
                      areaColor: '#fa8c16',
                      borderWidth: 0
                    }
                  },
                  data: center.map(centerItem => {
                    const value = Math.random() * 100 //人口数 (单位: 万)
                    return {
                      name: centerItem.key,
                      value
                    }
                  })
                },
                {
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: [],
                  getIndex: 0,
                  symbolSize: 14,
                  itemStyle: {
                    color: '#feae21'
                  },
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                      formatter: function (params) {
                        return `{title|${params.data.city}}\n{content|发生 xx 事件}`
                      },
                      backgroundColor: 'rgba(254,174,33,0.8)',
                      padding: [0, 0],
                      borderRadius: 3,
                      lineHeight: 32,
                      color: '#f7fafb',
                      rich: {
                        title: {
                          padding: [0, 10, 10 ,10],
                          color: "#fff"
                        },
                        content:{
                          padding: [10, 10, 0 ,10],
                          color: "#fff"
                        }
                      }
                    },
                    emphasis: {
                      show: true
                    }
                  }
                },
                {
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: [],
                  getIndex: 0,
                  symbolSize: 14,
                  itemStyle: {
                    color: '#e93f42'
                  },
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                      formatter: function (params) {
                        return `{title|${params.data.city}}\n{content|发生 xx 事件}`
                      },
                      backgroundColor: 'rgba(233,63,66,0.9)',
                      padding: [0, 0],
                      borderRadius: 3,
                      lineHeight: 32,
                      color: '#ffffff',
                      rich: {
                        title: {
                          padding: [0, 10, 10 ,10],
                          color: "#fff"
                        },
                        content:{
                          padding: [10, 10, 0 ,10],
                          color: "#fff"
                        }
                      }
                    },
                    emphasis: {
                      show: true
                    }
                  }
                },
                {
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  data: [],
                  getIndex: 0,
                  symbolSize: 14,
                  itemStyle: {
                    color: '#08baec'
                  },
                  label: {
                    normal: {
                      show: true,
                      position: 'top',
                      formatter: function (params) {
                        return `{title|${params.data.city}}\n{content|发生 xx 事件}`
                      },
                      backgroundColor: 'rgba(8,186,236,0.9)',
                      padding: [0, 0],
                      borderRadius: 3,
                      lineHeight: 32,
                      color: '#ffffff',
                      rich: {
                        title: {
                          padding: [0, 10, 10 ,10],
                          color: "#fff"
                        },
                        content:{
                          padding: [10, 10, 0 ,10],
                          color: "#fff"
                        }
                      }
                    },
                    emphasis: {
                      show: true
                    }
                  }
                },
              ]
            }
            // 测试: 随机展示事件信息
            timer = setInterval(()=>{
              const _options = cloneDeep(options.value);
              for(let i=1; i<4; i++){
                _options.series[i].data = [];
              }
              // 生成城市随机数
              const cityLength = center.length;
              const cityIndex = Math.floor(Math.random() * cityLength);
              const eventIndex = Math.floor(Math.random()*3) + 1;
              _options.series[eventIndex].data = [{
                city: center[cityIndex].key,
                value: center[cityIndex].value,
              }]
              options.value = _options;
            }, 2000)

          })
      }
      // { value: center[0].value, city: center[0].key }
      onMounted(update)
      onUnmounted(()=> timer && clearInterval(timer))
      return {
        options
      }
    }
  }
</script>

<style scoped>

</style>
