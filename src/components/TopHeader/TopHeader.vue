<template>
    <div class="top-header">
      <mk-logo
        :width="120"
        :height="120"
        :stroke="'#ffffff'"


      ></mk-logo>
      <div class="logo-text">
        <div class="cn-text">Mok88外卖业务数据大盘</div>
        <div class="en-text">Mok88 Delivery Overview of Business</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'TopHeader'
  }
</script>

<style scoped lang="scss">
  .top-header{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(36,31,32,1);
    padding: 0 34px;
    box-sizing: border-box;

    .logo {
      width: 120px;
      height:120px;
    }
    .logo-text {
      flex: 1;
      margin-left: 40px;
      .cn-text {
        color: #fff;
        font-weight: bold;
        font-size: 60px;
        letter-spacing: 2px;
      }
      .en-text {
        color: #fff;
        font-size: 35px;
        letter-spacing: 1px;
      }
    }
  }
</style>
