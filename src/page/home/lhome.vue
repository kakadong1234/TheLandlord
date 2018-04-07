<template>
    <div class='container'> 
        <swiper :options="swiperOption" class="mySwiper">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.index" class="mySwiperSlider">
                <img :src="slide.imgUrl" class="swiperImg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import {ddConfig, getDdUserID, cityGuess, hotcity, groupcity, rePostVerify} from '../../service/getData'
import '../../plugins/dingtalk.min.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data(){
        return{
            swiperOption: {
                autoplay: {
                    stopOnLastSlide: true,
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperSlides: [
                {
                    index: 0,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090108454&di=666d0ab2ea4f624ca3533d4c6c0f22b8&imgtype=0&src=http%3A%2F%2Fwww.mz.gov.cn%2Fattachment%2Fcms%2Fitem%2F2016_08%2F19_17%2F80eea6307e4a716f.png.cthumb.jpg',
                },
                {
                    index: 1,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090336213&di=e7aa898e0fec45153a5d2c95a9941099&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D42952174%2C4038341886%26fm%3D214%26gp%3D0.jpg',
                },
                                {
                    index: 2,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090108454&di=666d0ab2ea4f624ca3533d4c6c0f22b8&imgtype=0&src=http%3A%2F%2Fwww.mz.gov.cn%2Fattachment%2Fcms%2Fitem%2F2016_08%2F19_17%2F80eea6307e4a716f.png.cthumb.jpg',
                },
                {
                    index: 3,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090336213&di=e7aa898e0fec45153a5d2c95a9941099&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D42952174%2C4038341886%26fm%3D214%26gp%3D0.jpg',
                },
                
            ]
        }
    },

	mounted(){
    //     setInterval(() => {
    //     console.log('simulate async data')
    //     if (this.swiperSlides.length < 10) {
    //       this.swiperSlides.push(this.swiperSlides.length + 1)
    //     }
    //   }, 3000)
        //开始钉钉相关设置
        this.startDD()
        // 获取当前城市
        cityGuess().then(res => {
            this.guessCity = res.name;
            this.guessCityid = res.id;
        })

        //获取热门城市
        hotcity().then(res => {
            this.hotcity = res;
        })

        //获取所有城市
        groupcity().then(res => {
            this.groupcity = res;
        })
    },

    components:{
        headTop,
        swiper,
        swiperSlide
    },

    computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupcity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                }
            }
            return sortobj
        }
    },

    methods:{
        //点击图标刷新页面
        reload(){
            window.location.reload();
        },

        startDD(corpid){
            console.log('--startDD')
            ddConfig().then(config => {
                console.log(config)
                config.jsApiList = [
                    'runtime.info',
                    'biz.user.get',
                    'biz.contact.choose',
                    'biz.telephone.call',
                    'biz.ding.post'
                ]
                console.log(location.href)
                dd.config(config);
                dd.error(function(err) {
                    alert('href is ' + location.href + ', dd error: ' + JSON.stringify(err));  
                }); 
                console.log('start ready')
                dd.ready(function() {
                    alert('--dd requestAuthCode')
                    console.log('--dd requestAuthCode')
                    dd.runtime.permission.requestAuthCode({
                        corpId: config.corpid,
                        onSuccess: function(result) {
                            alert('--success result is ' + JSON.stringify(result))
                            console.log('--success')
                            console.log(result)
                            const code = result.code
                            //get userID by code
                            getDdUserID(code).then(res => {
                                console.log(res)
                            })  
                        },
                        onFail : function(err) {
                            console.log('--fail')
                            //TODO: fail 处理
                            console.log(err)
                        }
                    });
                })
            })
        }
    }
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .container{
        background-color:black;
        .mySwiper{
        width: 90%;
        .mySwiperSlider{
            width: 100%;
            height: 250px;
            .swiperImg{
                width: 100%;
                height: 100%;
            }
        }
        // .swiper-pagination {
        //     height: 5%;
        // }
    } 
    }
    // .head_logo{
    //     left: 0.4rem;
    //     font-weight: 400;
    //     @include sc(0.7rem, #fff);
    //     @include wh(2.3rem, 0.7rem);
    //     @include ct;
    // }
    // .city_nav{
    //     padding-top: 2.35rem;
    //     border-top: 1px solid $bc;
    //     background-color: #fff;
    //     margin-bottom: 0.4rem;
    //     .city_tip{
    //         @include fj;
    //         line-height: 1.45rem;
    //         padding: 0 0.45rem;
    //         span:nth-of-type(1){
    //             @include sc(0.55rem, #666);
    //         }
    //         span:nth-of-type(2){
    //             font-weight: 900;
    //             @include sc(0.475rem, #9f9f9f);
    //         }

    //     }
    //     .guess_city{
    //         @include fj;
    //         align-items: center;
    //         height: 1.8rem;
    //         padding: 0 0.45rem;
    //         border-top: 1px solid $bc;
    //         border-bottom: 2px solid $bc;
    //         @include font(0.75rem, 1.8rem);
    //         span:nth-of-type(1){
    //             color: $blue;
    //         }
    //         .arrow_right{
    //             @include wh(.6rem, .6rem);
    //             fill: #999;
    //         }
    //     }
    // }
    // #hot_city_container{
    //     background-color: #fff;
    //     margin-bottom: 0.4rem;
    // }
    // .citylistul{
    //     li{
    //         float: left;
    //         text-align: center;
    //         color: $blue;
    //         border-bottom: 0.025rem solid $bc;
    //         border-right: 0.025rem solid $bc;
    //         @include wh(25%, 1.75rem);
    //         @include font(0.6rem, 1.75rem);
    //     }
    //     li:nth-of-type(4n){
    //         border-right: none;
    //     }
    // }
    // .city_title{
    //     color: #666;
    //     font-weight: 400;
    //     text-indent: 0.45rem;
    //     border-top: 2px solid $bc;
    //     border-bottom: 1px solid $bc;
    //     @include font(0.55rem, 1.45rem, "Helvetica Neue");
    //     span{
    //         @include sc(0.475rem, #999);
    //     }
    // }
    
    // .letter_classify_li{
    //     margin-bottom: 0.4rem;
    //     background-color: #fff;
    //     border-bottom: 1px solid $bc;
    //     .groupcity_name_container{
    //         li{
    //             color: #666;
    //         }
    //     }
    // }

</style>
