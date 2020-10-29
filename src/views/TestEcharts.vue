<template>
  <div style="width: 100%; height: 100%">
    <mk-vue-echarts :options="options"></mk-vue-echarts>
  </div>
</template>

<script>
  import {ref, onMounted, onUnmounted} from 'vue'

  export default {
    name: 'TestEcharts',
    setup(){
      const options = ref({});

      const  update = () => {
        options.value = {
          baseOption: {
            timeline:{
              axisType: 'category',
              autoPlay: true, //是否自动播放
              playInterval: 1000, //播放的时间间隔
              loop: true, //是否循环播放
              inverse: false, // 是否反向播放
              rewind: false, // 是否反向放置timeline
              currentIndex:1,// 启动播放位置
              realTime: true, // 拖动时是否实时更新视图
              data: Array.from({length:9},(v,i)=> {
                return {
                  value: `200${i}-01-01`,
                  symbol: `${i === 0 || i === 8 ? 'diamond' : 'circle'}`,
                  symbolSize: 20
                }
              }),
              label: {
                formatter(v){
                  return new Date(v).getFullYear();
                }
              },
              controlStyle: {
                position: 'left'
              }
            }
          },
          options: [
            {},
            {}
          ]
        }

      }

      onMounted(update)

      return {
        options
      }
    }
  }
</script>

<style scoped>

</style>
