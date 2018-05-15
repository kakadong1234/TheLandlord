<template>
    <div class='container'> 
       <head-top head-title="个人房源" go-back='true'>
            <div slot="releaseHouse" class="del_house_btn"  @click.stop="delHousePage">删除</div>
       </head-top>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="imgUrl in houseDetail.imgURLList" :key="imgUrl" class="swiperSlider">
          <img :src="imgUrl" class="img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="title"> </div>
    </div>
</template>

<script>
import headTop from "../../../components/header/head";
import footGuide from "src/components/footer/lfootGuide";
import {
  getTenemnetDetail,
  ddConfig,
  getDdUserID
} from "../../../service/getData";
import { getHouseDetail } from "../../../service/house";
import "../../../plugins/dingtalk.min.js";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      houseDetail: {
        imgURLList: []
      },
      tenementDetail: {
        landlord: {},
        renter: {}
      },
      swiperOption: {
        autoplay: {
          stopOnLastSlide: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [],
      tenementID: this.$route.params.tenementID
    };
  },

  mounted() {
    this.initData();
  },

  components: {
    headTop,
    swiper,
    swiperSlide,
    footGuide
  },

  computed: {},

  methods: {
    async initData() {
      this.houseDetail = await getHouseDetail(this.tenementID);
    },

    // startDD() {
    //   console.log("--startDD");
    //   ddConfig().then(config => {
    //     console.log(config);
    //     config.jsApiList = [
    //       "runtime.info",
    //       "biz.user.get",
    //       "biz.contact.choose",
    //       "biz.telephone.call",
    //       "biz.ding.post"
    //     ];
    //     console.log(location.href);
    //     dd.config(config);
    //     dd.error(function(err) {
    //       alert(
    //         "href is " + location.href + ", dd error: " + JSON.stringify(err)
    //       );
    //     });
    //     console.log("start ready");
    //     dd.ready(function() {
    //       alert("--dd requestAuthCode");
    //       console.log("--dd requestAuthCode");
    //       dd.runtime.permission.requestAuthCode({
    //         corpId: config.corpid,
    //         onSuccess: function(result) {
    //           alert("--success result is " + JSON.stringify(result));
    //           console.log("--success");
    //           console.log(result);
    //           const code = result.code;
    //           //get userID by code
    //           getDdUserID(code).then(res => {
    //             console.log(res);
    //           });
    //         },
    //         onFail: function(err) {
    //           console.log("--fail");
    //           //TODO: fail 处理
    //           console.log(err);
    //         }
    //       });
    //     });
    //   });
    // },

    delHousePage() {
      console.log("delHousePage");
    },

    showDetailLandlordInfo() {
      console.log("showDetailLandlordInfo");
      //TODO:  弹框
    },

    goToBillPage() {
      console.log("goToBillPage" + this.tenementID);
      this.$router.push("/tenement/" + this.tenementID + "/billTotal");
    },

    goToDegreePage() {
      console.log("goToDegreePage");
      this.$router.push("/tenement/" + this.tenementID + "/degree");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin";
.del_house_btn {
  right: 0.4rem;
  @include sc(0.6rem, black);
  @include ct;
}
.swiper {
  margin-top: 1.95rem;
  @include wh(16rem, 10rem);
  .swiperSlider {
    .img {
      @include wh(16rem, 10rem);
    }
  }
  // .swiper-pagination {
  //    @include wh(16rem, 10rem);
  // }
}
</style>
