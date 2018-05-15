<template>
	<div class="list_container">
		<ul v-load-more="loaderMoreMethod" v-if="tenementListArr.length" type="1">
			<div v-for="item in tenementListArr" tag='li' :key="item.ID" class="house_li" @click.stop="goToDetailPage(item.ID)">
				<div class="info_div"> 
					<img :src="item.imgURLList[0]" class="house_img">
					<div class="middle_div"> 
						<div class="title"> {{item.title}} </div>
						<div class="area_orient_div">
							<div class="area"> {{item.area}}㎡ </div>
							<div class="orient"> {{item.orientations}} </div>
						</div>
						<div class="address"> 地址: {{item.address}} </div>
					</div>
					<div class="right_div">
						<div class="leaseType"> {{item.leaseType}} </div>
						<div class="rentForMonth"> {{item.rentForMonth}}元/月</div>
					</div>
				</div> 
				<div class="operation_div"> 
					<div v-if="leaseStatus === '待出租'" class="edit_btn" @click.stop="editPage(item)"> 编辑 </div>
					<div v-if="leaseStatus === '待出租'" class="delete_btn" @click.stop="delPage(item)"> 删除 </div>
					<div v-if="leaseStatus === '出租中'" class="agress_throw_lease_btn" @click.stop="agressthrowLease(item)"> 同意退租 </div>
					<div v-if="leaseStatus === '已删除'" class="recovery_btn" @click.stop="recovery(item)"> 恢复 </div>
				</div>
			</div>
		</ul>
		<ul v-else class="animation_opactiy">
			<li class="list_back_li" v-for="item in 10" :key="item">
				<img src="../../images/shopback.svg" class="list_back_svg">
			</li>
		</ul>
		<p v-if="touchend" class="empty_data">没有更多了</p>
		<aside class="return_top" @click="backTop" v-if="showBackStatus">
			<svg class="back_top_svg">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backtop"></use>
			</svg>
		</aside>
		<div ref="abc" style="background-color: red;"></div>
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { getHouseListByLeaseStatus } from "src/service/house";
import { showBack, animate } from "src/config/mUtils";
import { loadMore } from "./mixin";
import loading from "./loading";

export default {
  data() {
    return {
      offset: 0, // 批次加载店铺列表，每次加载10个 limit = 10
      tenementListArr: [], // 租房列表数据
      preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
      showBackStatus: false, //显示返回顶部按钮
      showLoading: true, //显示加载动画
      touchend: false //没有更多数据
    };
  },
  mounted() {
    this.initData();
  },
  props: ["leaseStatus"],
  components: {
    loading
  },
  mixins: [loadMore],
  computed: {
    ...mapState([])
  },
  updated() {},
  methods: {
    async initData() {
      //获取数据
      let res = await getHouseListByLeaseStatus(this.leaseStatus, this.offset);
      console.log("asfadfasfas");
      console.log(this.leaseStatus);
      this.tenementListArr = [...res];
      console.log(res.length);
      if (res.length < 10) {
        this.touchend = true;
      }
      this.hideLoading();
      console.log(this.preventRepeatReuqest);
      //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
      showBack(status => {
        this.showBackStatus = status;
      });
    },
    //到达底部加载更多数据
    async loaderMoreMethod() {
      console.log(
        "**************************loderMoreMethod------------------"
      );
      console.log(this.offset);
      if (this.touchend) {
        console.log("*************************endTouch");
        return;
      }
      //防止重复请求
      if (this.preventRepeatReuqest) {
        console.log("*************************preventRepeatReuqest");
        return;
      }
      this.showLoading = true;
      this.preventRepeatReuqest = true;

      //数据的定位加10位
      console.log("old offset:" + this.offset);
      this.offset = this.offset + 10;
      console.log("new offset:" + this.offset);
      let res = await getHouseListByLeaseStatus(this.leaseStatus, this.offset);
      console.log(res);
      this.hideLoading();
      this.tenementListArr = [...this.tenementListArr, ...res];
      //当获取数据小于10，说明没有更多数据，不需要再次请求数据
      if (res.length < 10) {
        this.touchend = true;
        return;
      }
      this.preventRepeatReuqest = false;
    },
    //返回顶部
    backTop() {
      animate(document.body, { scrollTop: "0" }, 400, "ease-out");
    },
    //开发环境与编译环境loading隐藏方式不同
    hideLoading() {
      this.showLoading = false;
    },

    goToDetailPage(id) {
      console.log("goToBillPage " + id);
      this.$router.push("/tenement/" + id);
	},
	editPage(item){
		console.log('editPage')
	},
	delPage(item){
		console.log('delPage')
	}, 
	agressthrowLease(item){
		console.log('agressthrowLease')
	},
	recovery(item){
		console.log('recovery') 
	}
  },
  watch: {
    leaseStatus: function() {
      console.log("leaseStatus change");
      this.initData();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/style/mixin";
.list_container {
  background-color: #fff;
  margin-bottom: 2rem;
}
.house_li {
	border-bottom: 0.025rem solid #f1f1f1;
    padding: 0.5rem;
  .info_div {
    display: flex;
    @include sc(0.5rem, #666);
    .house_img {
      @include wh(5rem, 2.5rem);
      display: block;
      margin-right: 0.4rem;
    }
    .middle_div {
      @include wh(6.5rem, 2.5rem);
      .title {
      }
      .area_orient_div {
        margin-top: 0.2rem;
        display: flex;
        .area {
        }
        .orient {
          margin-left: 0.1rem;
        }
      }
      .address {
        margin-top: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .right_div {
      margin-left: 0.2rem;
      @include wh(3.5rem, 2.5rem);
      .leaseType {
        margin-top: 0.2rem;
        text-align: right;
      }
      .rentForMonth {
        margin-top: 1rem;
        text-align: right;
      }
    }
  }
  .operation_div {
	display: flex;
	margin-top: 0.2rem;
    .edit_btn {
		margin-left: 7.5rem;
		@include sc(0.6rem, white);
		@include wh(4rem, 1.2rem);
		line-height: 1.2rem;
		text-align: center;
		background: #9cdcfe;
		border-radius: 0.08rem;
    }
    .delete_btn {
		margin-left: 0.25rem;
		@include sc(0.6rem, white);
		@include wh(4rem, 1.2rem);
		line-height: 1.2rem;
		text-align: center;
		background: #cc0001;
		border-radius: 0.08rem;
    }
    .agress_throw_lease_btn {
		margin-left: 11.75rem;
		@include sc(0.6rem, white);
		@include wh(4rem, 1.2rem);
		line-height: 1.2rem;
		text-align: center;
		background: #9cdcfe;
		border-radius: 0.08rem;
    }
    .recovery_btn {
		margin-left: 11.75rem;
		@include sc(0.6rem, white);
		@include wh(4rem, 1.2rem);
		line-height: 1.2rem;
		text-align: center;
		background: #9cdcfe;
		border-radius: 0.08rem;
    }
  }
}
.list_back_li {
  height: 4.85rem;
  .list_back_svg {
    @include wh(100%, 100%);
  }
}
.loader_more {
  @include font(0.6rem, 3);
  text-align: center;
  color: #999;
}
.empty_data {
  @include sc(0.5rem, #666);
  text-align: center;
  line-height: 2rem;
}
.return_top {
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  .back_top_svg {
    @include wh(2rem, 2rem);
  }
}
.loading-enter-active,
.loading-leave-active {
  transition: opacity 1s;
}
.loading-enter,
.loading-leave-active {
  opacity: 0;
}
</style>