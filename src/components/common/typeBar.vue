 <template>
    <div class="container">
         <div class="type_item" v-for="item in typeList" :key="item.txt" @click.stop="changeSelectedType(item.txt)">
	        <div v-if="selectedType === item.txt" class="txt_selected"> {{item.txt}} </div>
            <div v-else class="txt"> {{item.txt}} </div>
            <!-- <img v-if="selectedType === item.txt" class="selected_bar" src="../../images/rectangle.png"> -->
        </div>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                selectedType: '',
            }
        },

        mounted(){
            console.log(this.typeList[0])
            this.selectedType = this.typeList[0].txt
        },

        props: ['typeList'],

        methods: {
            changeSelectedType(txt){
                if(this.selectedType !== txt) {
                    this.selectedType = txt
                    this.$emit('selected-type-change', txt)
                }
            }

        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.container{
    display:flex;
    justify-content: space-between;
    .type_item {
        background: white;
        .txt {
            @include wh(5.3rem, 1.2rem);
            line-height: 1.2rem;
            @include sc(0.8rem, black);
            text-align: center
        }
        .txt_selected {
            @include wh(5.3rem, 1.2rem);
            line-height: 1.2rem;
            @include sc(0.8rem, black);
            text-align: center;
            border: 0.002rem solid gray;
        }
    }
}
</style>
