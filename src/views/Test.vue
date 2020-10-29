<template>
  <div style="width: 500px; height: 400px;">
    <mk-base-scroll-list
      :config="config"
    />
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'Test',
    setup (ctx) {
      // 列头
      const config = ref({})
      const headerData = ['姓名', '年龄', '月薪']
      const headerStyle = [
        {
          color: 'red',
          width: '200px'
        },
        { color: 'white' },
        { color: 'white' },
      ]
      const rowStyle = [
        { color: 'white'},
        { color: 'white'},
        { color: 'white'}
      ]
      const rowBg = ['rgba(40,40,40)','rgba(55,55,55)'];
      const aligns = ['left', 'center', 'center', 'center']
      const headerFontSize = 24;
      const rowFontSize = 20;
      const headerColor = '#ffffff';
      const rowColor = 'white';

      // 行数据
      const data = []
      for (let i = 0; i < 10; i++) {
        data.push(['同学' + (i + 1),
          Math.floor(Math.random() * 10 + 20),
          Math.floor(Math.random() * 10000 + 10000)
        ])
      }
      config.value = {
        headerData,
        headerStyle,
        rowStyle,
        rowBg,
        headerBg: 'rgba(90,90,90)',
        headerHeight: '40',
        headerIndex: true,
        data,
        rowNum: 10,
        aligns,
        headerFontSize,
        rowFontSize,
        headerColor,
        rowColor,
        headerIndexContent: ''
      }
      return {
        config
      }
    }
  }
</script>

<style scoped>

</style>
