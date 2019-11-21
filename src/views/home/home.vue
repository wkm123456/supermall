<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"/>
    <feature-view></feature-view>
    <tab-control :titles="titles"></tab-control>

    <ul>
      <li>liebiao1</li>
      <li>liebiao2</li>
      <li>liebiao3</li>
      <li>liebiao4</li>
      <li>liebiao5</li>
      <li>liebiao6</li>
      <li>liebiao7</li>
      <li>liebiao8</li>
      <li>liebiao9</li>
      <li>liebiao10</li>
      <li>liebiao11</li>
      <li>liebiao12</li>
      <li>liebiao13</li>
      <li>liebiao14</li>
      <li>liebiao15</li>
      <li>liebiao16</li>
      <li>liebiao17</li>
      <li>liebiao18</li>
      <li>liebiao19</li>
      <li>liebiao20</li>
      <li>liebiao21</li>
      <li>liebiao22</li>
      <li>liebiao23</li>
      <li>liebiao24</li>
      <li>liebiao25</li>
      <li>liebiao26</li>
      <li>liebiao27</li>
      <li>liebiao28</li>
      <li>liebiao29</li>
      <li>liebiao30</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import homeSwiper from "./childComps/homeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "home",
    components:{
      NavBar,
      getHomeMultidata,
      homeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data(){
      return{
        banners:[],
        recommends:[],
        titles: ['流行','新款','精选']
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
