<template>
    <div class='container'> 
        <head-top signin-up='home'>
            <span slot='logo' class="head_logo"  @click="reload">包租婆</span>
        </head-top> 
        <swiper :options="swiperOption" class="mySwiper">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.index" class="mySwiperSlider">
                <img :src="slide.imgUrl" class="swiperImg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <router-link :to="appItem.targetUrl" v-for="appItem in appList" :key="appItem.id" class="link_to_app">
	        <figure>
	            <img :src="appItem.appIcon">
	            <figcaption>{{appItem.name}}</figcaption>
	        </figure>
	    </router-link>
        <foot-guide></foot-guide>
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import footGuide from 'src/components/footer/lfootGuide'
import {ddConfig, getDdUserID, cityGuess, hotcity, groupcity, rePostVerify} from '../../service/getData'
import '../../plugins/dingtalk.min.js'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data(){
        return{
            imgBaseUrl: 'dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=<企业corpid>&agentid=<跳转到应用的agentid>',
            appList:[
            {
            "appIcon": "http://static.dingtalk.com/media/lALOcrvqOszIzMg_200_200.png",
            "agentId": 50821899,
            "appDesc": "你的努力老板看得见",
            "name": "签到",
            "homepageLink": "https://attendance.dingtalk.com/attendance/mobile/mapAttendance.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding31148f160c24897635c2f4657eb6378f",
            "appStatus": 1,
            "isSelf": false,
            "ompLink": "https://attendance.dingtalk.com/attendance/web/web/home/index"
            },
            {
            "appIcon": "http://static.dingtalk.com/media/lALOcsYpu8zIzMg_200_200.png",
            "agentId": 50821900,
            "pcHomepageLink": "https://attend.dingtalk.com/portal/index_pc.html?corpId=ding31148f160c24897635c2f4657eb6378f",
            "appDesc": "考勤，上下班打卡",
            "name": "考勤打卡",
            "homepageLink": "https://attend.dingtalk.com/attend/index.html?corpId=ding31148f160c24897635c2f4657eb6378f&showmenu=false&dd_share=false&dd_progress=false",
            "appStatus": 1,
            "isSelf": false,
            "ompLink": "https://attend.dingtalk.com/admin/index"
            },
            {
            "appIcon": "http://static.dingtalk.com/media/lALOcsZGkszIzMg_200_200.png",
            "agentId": 50821904,
            "pcHomepageLink": "",
            "appDesc": "工作汇报，日报，周报",
            "name": "日志",
            "homepageLink": "https://landray.dingtalkapps.com/alid/app/report/home.html?showmenu=false&dd_share=false&corpid=ding31148f160c24897635c2f4657eb6378f",
            "appStatus": 1,
            "isSelf": false,
            "ompLink": "https://landray.dingtalkapps.com/alid/reportpc/getTotalDetail"
            },
            {
            "appIcon": "http://static.dingtalk.com/media/lALOcsZHFszIzMg_200_200.png",
            "agentId": 50821906,
            "pcHomepageLink": "https://app.dingtalk.com/index.html?corpId=ding31148f160c24897635c2f4657eb6378f",
            "appDesc": "企业重要信息",
            "name": "公告",
            "homepageLink": "https://app.dingtalk.com/blackboard/noticeList.html?showmenu=false&dd_progress=false&dd_share=false&corpid=ding31148f160c24897635c2f4657eb6378f",
            "appStatus": 1,
            "isSelf": false,
            "ompLink": "https://app.dingtalk.com/blackboard/api/auth"
            },
            {
            "appIcon": "http://static.dingtalk.com/media/lALOcsZGQszIzMg_200_200.png",
            "agentId": 50821907,
            "pcHomepageLink": "https://aflow.dingtalk.com/dingtalk/pc/query/pchomepage.htm?corpid=ding31148f160c24897635c2f4657eb6378f",
            "appDesc": "请假、报销，各类审批",
            "name": "审批",
            "homepageLink": "https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm?showmenu=false&dd_progress=false&dd_share=false&corpid=ding31148f160c24897635c2f4657eb6378f",
            "appStatus": 1,
            "isSelf": false,
            "ompLink": "https://aflow.dingtalk.com/dingtalk/web/code"
            },
            {
            "appIcon": "http://static.dingtalk.com/media/lALOcsah9MzIzMg_200_200.png",
            "agentId": 50821913,
            "appDesc": "企业邮箱",
            "name": "钉邮",
            "homepageLink": "http://mail.dingtalk.com/auth/login",
            "appStatus": 1,
            "isSelf": false,
            "ompLink": "https://oa.dingtalk.com/#/microApp/orgEmail"
            },
            {
                "appIcon": "http://static.dingtalk.com/media/lALOcsahiMzIzMg_200_200.png",
                "agentId": 50821914,
                "appDesc": "企业云盘，资料共享",
                "name": "钉盘",
                "homepageLink": "https://space.dingtalk.com/auth/login",
                "appStatus": 1,
                "isSelf": false,
                "ompLink": "https://space.dingtalk.com/admin.html"
            },
            {
                "appIcon": "http://static.dingtalk.com/media/lALOcsxZiszIzMg_200_200.png",
                "agentId": 50821915,
                "pcHomepageLink": "https://clouddata.dingtalkapps.com/alid/static/guide.html?corpId=ding31148f160c24897635c2f4657eb6378f",
                "appDesc": "智能报表",
                "name": "智能报表",
                "homepageLink": "https://clouddata.dingtalkapps.com/alid/mobile/index.html?corpId=ding31148f160c24897635c2f4657eb6378f&dd_progress=false",
                "appStatus": 1,
                "isSelf": false,
                "ompLink": "https://clouddata.dingtalkapps.com/routes/data/ListView/"
            },
            {
                "appIcon": "http://static.dingtalk.com/media/lALOcsajBszIzMg_200_200.png",
                "agentId": 50821920,
                "appDesc": "高质量电话会议",
                "name": "电话会议",
                "homepageLink": "http://businessConference.dingtalk.com/auth/login",
                "appStatus": 1,
                "isSelf": false
            },
            {
                "appIcon": "http://static.dingtalk.com/media/lALOcsaifMzIzMg_200_200.png",
                "agentId": 50821921,
                "pcHomepageLink": "https://h5.dingtalk.com/voip/index.html",
                "appDesc": "视频会议",
                "name": "视频会议",
                "homepageLink": "",
                "appStatus": 1,
                "isSelf": false
            },
            {
                "appIcon": "http://static.dingtalk.com/media/lALPBY0V4x4vWbnNBBTNCLw_2236_1044.png",
                "agentId": 169284840,
                "pcHomepageLink": "http://localhost:8000",
                "appDesc": "包租婆包租婆",
                "name": "包租婆",
                "homepageLink": "http://192.168.0.106:8000/home",
                "appStatus": 1,
                "isSelf": true,
                "ompLink": "http://vuedemo.kakadong.top"
            }],
            swiperOption: {
                autoplay: {
                    stopOnLastSlide: false,
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperSlides: [
                {
                    index: 0,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090336213&di=e7aa898e0fec45153a5d2c95a9941099&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D42952174%2C4038341886%26fm%3D214%26gp%3D0.jpg',
                },
                {
                    index: 1,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090336213&di=e7aa898e0fec45153a5d2c95a9941099&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D42952174%2C4038341886%26fm%3D214%26gp%3D0.jpg',
                },
                                {
                    index: 2,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090336213&di=e7aa898e0fec45153a5d2c95a9941099&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D42952174%2C4038341886%26fm%3D214%26gp%3D0.jpg',
                },
                {
                    index: 3,
                    imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523090336213&di=e7aa898e0fec45153a5d2c95a9941099&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D42952174%2C4038341886%26fm%3D214%26gp%3D0.jpg',
                },
                
            ]
        }
    },

	mounted(){
        //TODO: 获取 appList
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
        swiperSlide,
        footGuide
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
    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
    .mySwiper{
        width: 90%;
        padding-top: 2.35rem;
        border-top: 1px solid $bc;
        background-color: #fff;
        margin-bottom: 0.4rem;
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
