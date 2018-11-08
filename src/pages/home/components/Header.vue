<template>
  <div class="head-wrap">
    <div class="ellipse">
      <a class="message">
        <i class="iconfont icon-tzxx"></i>
      </a>
      <a class="setting"><i class="iconfont icon-grzx"></i></a>
      <h1 class="title">新疆安监</h1>
      <a id="curDate" style="position:absolute;left: 14%;top: 45px;height:40px;line-height: 40px;color: #fff;font-size: 14px;">{{this.curDate}}</a>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'

export default {
  name: 'HomeHeader',
  components: {
    Grid,
    GridItem
  },
  data () {
    return {
      curDate: ''
    }
  },
  beforeCreate () {
    function p (s) {
      return s < 10 ? '0' + s : s
    }
    var myDate = new Date()
    // 获取当前年
    var year = myDate.getFullYear()
    // 获取当前月
    var month = myDate.getMonth() + 1
    // 获取当前日
    var date = myDate.getDate()
    // 获取星期
    var day = '星期' + '日一二三四五六'.charAt(myDate.getDay())
    var now = year + ' 年 ' + p(month) + ' 月 ' + p(date) + ' 日 ' + '，' + day
    this.curDate = now
  }
}
</script>

<style lang='stylus' scope>
.head-wrap
  z-index: 4
  position: fixed
  top: 0
  width: 100%
  height: 170px
  overflow: hidden
  transition: height .5s
  transform: preserve-3d 1000
  backface-visibility: hidden
  background: #f5f5f5
  .ellipse
    position: absolute 
    top: 0
    left: 50%
    margin: 0 auto
    margin-left: -65%
    width: 130%
    height: 170px
    background: #00b6f8
    background: linear-gradient(#00e5fe, #00b6f8)
    border-radius: 0 0 50% 50%
    .message
      position:absolute
      left: 14%
      top: 17px
      z-index: 9999
      i
        font-size: 26px
        color: #fff
    .setting
      position:absolute
      right: 14%
      top: 17px
      z-index: 9999
      i
        font-size: 26px
        color: #fff
    .title
      text-align: center
      height: 56px
      line-height: 56px
      margin: 0
      text-align: center
      font-size: 20px
      color: #fff
  &.fixed-head
    top: 0
    height: 56px
    z-index: 999
    box-shadow: 1px 0 6px rgba(0, 0, 0, 0.4)
    transition: height .5s
    transform: preserve-3d 1000
    backface-visibility: hidden
    .ellipse
      border-radius: 0
      background: linear-gradient(#00e5fe, #00b6f8)
      transition: all 1s
      transform: preserve-3d 1000
      backface-visibility: hidden

</style>
