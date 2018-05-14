<template>
    <div>
    	<head-top head-title="我的房源">
            <div slot="releaseHouse" class="release_house_btn"  @click.stop="goToReleaseHousePage">发布房源</div>
        </head-top>
        <type-bar typeList="typeList"></type-bar>
    	<div class="tenement_list_container">
	    	<tenement-list></tenement-list>
    	</div>
    	<foot-guide selectedItem='tenement'></foot-guide>
    </div>    	
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/lfootGuide'
import {tenementList} from 'src/components/common/tenementList'
import {typeBar} from 'src/components/common/typeBar'

export default {
	data(){
        return {
            typeList: [
                {
                    txt: '待出租'
                },
                {
                    txt: '出租中'
                },
                {
                    txt: '已删除'
                }
            ]
        }
    },
    // async beforeMount(){
    // 	// this.hasGetData = true;
    // },
    mounted(){
    },
    components: {
		headTop,
		footGuide,
        tenementList,
        typeBar
    },
    computed: {
		...mapState([
            'userInfo',
        ]),
    },
    methods: {
    	...mapMutations([
        ]),
        //发布房源
        goToReleaseHousePage(){
            console.log('go to release house page')
        },
    },
    watch: {
        selectedTypeChange(type){
            console.log('type is ' + type)
            // 
        }
    }
}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .release_house_btn{
        right: 0.4rem;
        @include sc(0.6rem, black);
        @include ct;
    }
	.tenement_list_container{
		// margin-top: .4rem;
		margin-top: 1.95rem;
		border-top: 0.025rem solid $bc;
		background-color: #fff;
	}

</style>
