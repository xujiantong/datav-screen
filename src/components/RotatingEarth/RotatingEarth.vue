<template>
  <div class="rotating-earth">
    <mk-vue-echarts :options="options"/>
  </div>
</template>

<script>
  import { ref, onMounted, onUnmounted } from 'vue'
  import echarts from 'echarts'
  import 'echarts-gl'

  const ROOT_PATH = './'
  export default {
    name: 'RotatingEarth',
    setup () {
      const options = ref({})
      const update = () => {
        options.value = {
          globe: {
            baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`, //基础纹理贴图
            heightTexture:  `${ROOT_PATH}assets/datav-gl-texture.jpg`, // 高度纹理贴图
            environment: `${ROOT_PATH}assets/star-bg.jpg`,//环境背景贴图
            displacementScale: 0.04, //地球顶点位置大小
            shading: 'realistic',
            realisticMaterial: {
              roughness: 0
            },
            postEffect:{
              enable: true
            },
            light:{
              main:{
                intensity: 2,
                shadow: true
              },
              ambient: {
                intensity: 2
              }
            }

          }
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
  .rotating-earth {
    width: 100%;
    height: 100%;
  }
</style>
