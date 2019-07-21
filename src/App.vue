<template>
  <div id="app">
    <mt-header fixed class="header-bg" title="Vortex博客">

      <div class="abe" slot="left">
        <mt-button class="vortex-text"> <img src="./assets/vortex.png" height="40" width="60" slot="icon"></mt-button>
      </div>

      <mt-button slot="right"><img src="./assets/shuaxin.png" height="40" width="40" slot="icon"></mt-button>
    </mt-header>


    <router-view></router-view>


    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item bar-icon-color" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link> 

      <router-link class="mui-tab-item bar-icon-color" to="/public">
        <span class="mui-icon mui-icon-compose"></span>
        <span class="mui-tab-label">发布</span>
      </router-link> 

      <router-link class="mui-tab-item bar-icon-color" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link> 

      <router-link class="mui-tab-item bar-icon-color" to="/setup">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link> 

    </nav>

  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {selected:首页}
  },
  watch: {
    selected: function(val, oldval){
      console.log(val)
    }
  },
  methods: {
    
  }

}
</script>

<style lang="scss" scoped>

#app {
  background-color: #F0F8FF;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
  // height: auto;

}

.header-bg{
  background-color:#FFF;
  color: black;
  height: 50px;
  font-size: 18px;
}
.mui-bar-tab .bar-icon-color{
  color: #1296DB;
}

</style>



