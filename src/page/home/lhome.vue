<template>
    <div class='container'> 
        <head-top head-title="包租婆">
            <div slot="releaseHouse" class="release_house_btn"  @click.stop="goToReleaseHousePage">发布房源</div>
        </head-top> 
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide v-for="house in recommendHouseList" :key="house.id" class="swiperSlider">
                <img :src="house.imgUrl" class="img" @click.stop="goToLink(house.link)">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="same_city_house_list_div"> 
            <div class="list_header_div">
                <img src="../../images/rectangle.png" class="list_header_img">
                <div class="list_header_txt_div">同城房源</div>
            </div>
            <same-house-list class="same_house_list"> </same-house-list>
        </div>
        <foot-guide selectedItem='home'></foot-guide>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import headTop from '../../components/header/head'
import footGuide from 'src/components/footer/lfootGuide'
import sameHouseList from 'src/components/common/sameHouseList'
import {getRecommendHouseList} from '../../service/house'
import '../../plugins/dingtalk.min.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data(){
        return{
            swiperOption: {
                autoplay: {
                    stopOnLastSlide: false,
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            recommendHouseList: []
        }
    },

	mounted(){
        this.initData()
    },  

    components:{
        headTop,
        swiper,
        swiperSlide,
        footGuide,
        sameHouseList
    },

    computed:{
        ...mapState([
            'userInfo',
        ]),
    },

    methods:{
        //初始化数据
        async initData(){
            //获取 banner 条数据
            this.recommendHouseList = await getRecommendHouseList()
        },
        //链接跳转
        goToLink(link){
            console.log("goToLink:" + link);
        	this.$router.push(link);
        },
        //发布房源
        goToReleaseHousePage(){
            console.log('go to release house page')
        },
    }
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .release_house_btn{
        right: 0.4rem;
        @include sc(0.6rem, black);
        @include ct;
    }
    .swiper{
        margin-top: 1.95rem;
        @include wh(16rem, 10rem);
        .swiperSlider{
            .img{
                @include wh(16rem, 10rem);
            }
        }
        // .swiper-pagination {
        //    @include wh(16rem, 10rem);
        // }
    } 
    .same_city_house_list_div{
        margin-top: 1rem;
        .list_header_div{ 
            display: flex;
            @include wh(16rem, 1rem);
            .list_header_img{
                @include wh(0.3rem, 1rem);
            }  
            .list_header_txt_div{
                margin-left: 0.5rem;
                @include sc(0.6rem, black);
                @include wh(5rem, 1rem);
                line-height: 1rem;
            }
        } 
        .same_house_list{
            margin-top: 0.3rem;
            margin-left: 0.3rem;
            margin-right: 0.3rem;
        }
    }
</style>
