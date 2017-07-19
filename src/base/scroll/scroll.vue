<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BSscroll from 'better-scroll'

  export default{
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll:{
        type:Boolean,
        default:false
      },
      data: {
        //  用来监听数据的变化
        type: Array,
        default: null
      }
    },
    mounted(){
      //  确保dom渲染
      setTimeout(() => {
           this._initScroll();
      }, 20)
    },
    methods: {
      _initScroll(){
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BSscroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
        })
      },
      enable(){
        this.scroll && this.scroll.enable()
      },
      disable(){
        this.scroll && this.scroll.disable()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    },
    watch: {
      //  监听数据的变化
      data(){
        setTimeout(() => {
          this.refresh();
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
