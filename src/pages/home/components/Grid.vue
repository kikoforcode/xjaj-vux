<template>
  <div id="grid-wrapper">
    <div id="basic-grid">
      <grid :cols="3" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item>
          <img slot="icon" src="@/assets/images/homegrid/icon_txl.svg">
          <span slot="label">通讯录</span>
        </grid-item>
        <grid-item>
          <img slot="icon" src="@/assets/images/homegrid/icon_txl.svg">
          <span slot="label">事故报警</span>
        </grid-item>
        <grid-item>
          <img slot="icon" src="@/assets/images/homegrid/icon_txl.svg">
          <span slot="label">资源快速检索</span>
        </grid-item>
        <grid-item>
          <img slot="icon" src="@/assets/images/homegrid/icon_txl.svg">
          <span slot="label">事故列表</span>
        </grid-item>
        <grid-item>
          <img slot="icon" src="@/assets/images/homegrid/icon_txl.svg">
          <span slot="label">历史信息</span>
        </grid-item>
        <grid-item>
          <img slot="icon" src="@/assets/images/homegrid/icon_txl.svg">
          <span slot="label">草稿信息</span>
        </grid-item>
      </grid>
    </div>
    <div id="grid-hidden-01">
      <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item>
          <i class="iconfont icon-zybzfx"></i>
          <span slot="label">资源保障分析</span>
        </grid-item>
      <grid-item>
          <i class="iconfont icon-zybzfx"></i>
          <span slot="label">周边环境分析</span>
        </grid-item>
        <grid-item>
          <i class="iconfont icon-zybzfx"></i>
          <span slot="label">救援部署</span>
        </grid-item>
        <grid-item>
          <i class="iconfont icon-zybzfx"></i>
          <span slot="label">处置方案</span>
        </grid-item>
      </grid>
    </div>
    <div id="grid-hidden-02">
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item>
          <i class="iconfont icon-zybzfx"></i>
          <span slot="label">资源保障分析</span>
        </grid-item>
        <grid-item>
          <i class="iconfont icon-zybzfx"></i>
          <span slot="label">周边环境分析</span>
        </grid-item>
        <grid-item>
          <i class="iconfont icon-zybzfx"></i>
          <span slot="label">救援部署</span>
        </grid-item>
      </grid>
    </div>
    <div id="grid-hidden-03">
      <group>
        <cell title="现场应急一张图" value="点击查看" border-intent="false" is-link></cell>
      </group>
    </div>
  </div>
</template>
<script>
import { Grid, GridItem, Cell, CellBox, Group } from 'vux'
export default {
  name: 'HomeGrid',
  components: {
    Grid,
    GridItem,
    Cell,
    CellBox,
    Group
  },
  data () {
    return {
      msg: '123'
    }
  }
}
</script>
<style lang="stylus" scoped>
  #grid-wrapper
    position: absolute
    top: 1.8rem
    padding: 0 .32rem
    height: 100% 
    width: 100%
    z-index: 6
    #basic-grid
      overflow: hidden
      width: 100%
      border-radius: 0.08rem
      box-shadow: 0 3px 8px rgba(0, 46, 63, .18)
      background: #fff
      & >>> .weui-grid__icon
        width: 0.7rem
        height: 0.7rem
        margin: 0 auto
        padding: 0.1rem
        border-radius: 0.08rem
        background: #00cafa
    #grid-hidden-01
      margin-top: .36rem
      border-radius: 0.08rem
      box-shadow: 0 3px 8px rgba(0, 46, 63, .18)
      background: #fff
      & >>> .weui-grid
        padding: 0
        .weui-grid__label
          float: left
          height: .9rem
          line-height: .9rem
          margin-left: 1rem
        .iconfont
          position: absolute
          left: .32rem
          font-size: .5rem
          color: #a2b4b9
    #grid-hidden-02
      margin-top: .36rem
      border-radius: 0.08rem
      box-shadow: 0 3px 8px rgba(0, 46, 63, .18)
      background: #fff
      & >>> .weui-grid
        padding: 15px
        .weui-grid__label
          float: left
          width: 100%
          margin-top: .6rem
          text-align: center
        .iconfont
          position: absolute
          left: 50%
          top: .1rem
          margin-left: -.26rem
          font-size: .52rem
          color: #a2b4b9
    #grid-hidden-03
      margin-top: .36rem
      border-radius: 0.08rem
      box-shadow: 0 3px 8px rgba(0, 46, 63, .18)
      background: #fff
</style>
