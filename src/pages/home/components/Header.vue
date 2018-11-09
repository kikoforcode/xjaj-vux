<template>
  <div class="head-wrap">
    <div class="ellipse">
      <a class="message">
        <i class="iconfont icon-tzxx"></i>
      </a>
      <a class="setting"><i class="iconfont icon-grzx"></i></a>
      <h1 class="title">新疆安监</h1>
      <a id="curDate">{{this.curDate}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      curDate: String
    }
  },
  created () {
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
  height: 3.4rem
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
    height: 3.4rem
    background: #00b6f8
    background: linear-gradient(#00e5fe, #00b6f8)
    border-radius: 0 0 50% 50%
    .message
      position:absolute
      left: 14%
      top: 0.34rem
      z-index: 9999
      i
        font-size: 0.52rem
        color: #fff
    .setting
      position:absolute
      right: 14%
      top: 0.34rem
      z-index: 9999
      i
        font-size: 0.52rem
        color: #fff
    .title
      text-align: center
      height: 1.12rem
      line-height: 1.12rem
      margin: 0
      text-align: center
      font-size: 0.4rem
      color: #fff
    #curDate
      position:absolute
      left: 14%
      top: 0.9rem
      height: 0.8rem
      line-height: 0.8rem
      color: #fff
      font-size: 0.28rem
  &.fixed-head
    top: 0
    height: 1.12rem
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
