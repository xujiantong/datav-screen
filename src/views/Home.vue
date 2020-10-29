<template>
  <div class="home">
    <mk-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </mk-loading>
    <mk-container
      :options="{width: 3840, height: 2160}"
      v-else
    >
      <div class="header">
        <div class="header">
          <top-header></top-header>
        </div>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth"
            ></total-user>
          </div>
          <div class="left2">
            <average-age
              :data="ageData"
              :avg-age="averageAge"
            ></average-age>
          </div>
          <div class="left3">
            <total-device :data="deviceData"></total-device>
          </div>
          <div class="left4">
            <total-gender :data="genderData"/>
          </div>
          <div class="left5">
            <total-rider :data="riderData" />
          </div>
          <div class="left6">
            <hot-category :data="hotCategoryData" />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData" />
          </div>
          <div class="right-top2">
            <transform-category
              :data="['All','北京','上海','深圳','杭州','南京','武汉']"

            />
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <order-map />
              </div>
              <div class="right-left2">
                <transform-category
                  :data="['订单量','销售额','用户数','退单量']"
                  :color="['rgba(178,209,126)','rgba(116,166,49)']"
                />
              </div>
              <div class="right-left3">
                <mk-fly-box starColor="rgb(251,253,142)">
                  <real-time-order :data="realTimeOrderData" />
                </mk-fly-box>
              </div>
              <div class="right-left4">
                <schedule-view :data="scheduleViewData" />
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sales-list :data="salesListData"></sales-list>
              </div>
              <div class="right-right2">
                <sales-rank :data="salesRankData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </mk-container>
  </div>
</template>

<script>

  import { ref, onMounted} from 'vue'
  import useScreenData from '../hooks/useScreenData'
  import TopHeader from '../components/TopHeader/TopHeader'
  import TotalUser from '../components/TotalUser/TotalUser'
  import AverageAge from '../components/AverageAge/AverageAge'
  import 'echarts/lib/chart/bar'
  import TotalDevice from '../components/TotalDevice/TotalDevice'
  import TotalGender from '../components/TotalGender/TotalGender'
  import TotalRider from '../components/TotalRider/TotalRider'
  import HotCategory from '../components/HotCategory/HotCategory'
  import CenterHeader from '../components/CenterHeader/CenterHeader'
  import TransformCategory from '../components/TransformCategory/TransformCategory'
  import SalesList from '../components/SalesList/SalesList'
  import OrderMap from '../components/OrderMap/OrderMap'
  import RealTimeOrder from '../components/RealTimeOrder/RealTimeOrder'
  import ScheduleView from '../components/ScheduleView/ScheduleView'
  import SalesRank from '../components/SalesRank/SalesRank'

  export default {
    name: 'Home',
    components: { SalesRank, ScheduleView, RealTimeOrder, OrderMap,  SalesList, TransformCategory, CenterHeader, HotCategory, TotalRider, TotalGender, TotalDevice, AverageAge, TotalUser, TopHeader },
    setup () {
      const loading = ref(true)
      onMounted(()=>{
        setTimeout(()=>{
          loading.value = false
        },500)
      })
      const screenData = useScreenData();
      return {
        loading,
        ...screenData,
        options:{
          xAxis: {
            data: ['a','b','c','d']
          },
          yAxis: {
          },
          series:[
            {
              name: 'sales',
              type: 'bar',
              data: [10,15,20,25]
            }
          ]
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .home{
    width: 100%;
    height: 100%;
    background: rgb(29, 29, 29);
    color: #fff;
    font-size: 48px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    #mk-container {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .header{
        width: 100%;
        height: 167px;
        background: #211C1D;
      }
      .separator {
        width: 100%;
        height: 10px;
        background: rgb(92, 88, 89);
      }
      .center {
        width: 100%;
        flex: 1;
        display: flex;
        .left{
          flex: 0 0 860px;
          background: #353437;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 860px;
          height: 100%;
          padding-bottom: 20px;
          box-sizing: border-box;
          .left1{
            height: 300px;
            background: grey;
          }

          .left2{
            height: 320px;
            background: grey;
          }
          .left3{
            height: 280px;
            background: grey;

          }
          .left4{
            height: 230px;
            background: grey;
          }
          .left5{
            height: 360px;
            background: grey;
          }
          .left6{
            height: 360px;
            background: grey;
          }

        }
        .right{
          flex: 1;
          background: #1F1D20;
          display: flex;
          flex-flow: column nowrap;
          margin-left: 10px;
          .right-top1{
            width: 100%;
            height: 206px;
            background: grey;
          }
          .right-top2{
            width: 100%;
            height: 48px;
            /*background: grey;*/
            margin: 10px 0;
          }
          .right-bottom {
            flex: 1;
            display: flex;
            padding-bottom: 20px;
            .right-left{
              display: flex;
              flex-flow: column nowrap;
              flex: 0 0 1917px;
              justify-content: space-between;
              width: 1917px;
              .right-left1{
                height: 999px;
                background: grey;
              }
              .right-left2{
                height: 80px;

              }
              .right-left3{
                height: 350px;
                background: grey;
              }
              .right-left4{
                height: 220px;
                background: grey;
              }
            }
            .right-right{
              display: flex;
              flex-flow: column nowrap;
              justify-content: space-between;
              margin-left: 10px;
              flex: 1;
              margin-right: 20px;
              .right-right1{
                width: 100%;
                height: 999px;
              }
              .right-right2{
                width: 100%;
                flex: 1;
                margin-top: 20px;
                background: grey;
              }
            }
          }
        }
      }
    }

  }
  .loading-text{
    font-size: 20px;
    margin-top: 10px;
    color: #fff;
  }
</style>
