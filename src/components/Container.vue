<template lang="html">
  <div class="container">
    <div class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </div>
    <div v-if="fatherComponent == 'home'" >
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'" >
      <div class="item_back item_container_style">
        <div class="item_list_container">
          <h2 class="item_title">题目一</h2>
          <ul>
            <li class="item_list" v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)">
              <span class="option_style" v-bind:class="{ 'has_choosed': index === choosedNum }">{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
      <span class="submit button_style" v-else @click="submitAnswer"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex' //其实就是能狗同事调用方法

export default {
  name: 'container',
  data () {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
			choosedId: null //选中答案id
    }
  },
  props: ['fatherComponent'],
  computed: mapState([
    'itemNum', //第几题
    'level', //第几周
    'itemDetail', //题目详情
    'timer' //计时器
  ]),
  methods: {
    ...mapActions([
      'addNum', 'initializeData',
    ]),
    nextItem () {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        //保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId);
      }else{
        alert('您还没有选择答案哦')
      }
    },
    chooseType: type => {
      switch (type) {
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    choosed (index, id) {
      this.choosedNum = index;
      this.choosedId = id;
    },
    submitAnswer () {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId)
        clearInterval(this.timer)
        this.$router.push('score')
      }else{
        alert('您还没有选择答案哦')
      }
    }
  }
  ,
	created(){
		//初始化信息
		this.initializeData();
    document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
	}
}
</script>

<style lang="less">
  .container{
    .top_tips{
      position: absolute;
      height: 7.35rem;
      width: 3.25rem;
      top: -1.3rem;
      right: 1.6rem;
      background: url("../images/WechatIMG2.png");
      background-size: 100% 100%;
      z-index: 10;
      .num_tip{
        position: absolute;
        left: .48rem;
        bottom: 1.1rem;
        height: .7rem;
        width: 2.5rem;
        font-size: .6rem;
        font-weight: 600;
        color: #a57c50;
        text-align: center;
      }
    }
    .item_container_style{
      position: absolute;
      top: 4.1rem;
      left: 1rem;
      height: 11.625rem;
      width: 13.15rem;
      background-size: 13.142rem 100%;
      background-position: 100%;
      background-repeat: no-repeat;
      .item_list_container{
        position: absolute;
        height: 7rem;
        width: 8rem;
        top: 2.4rem;
        left: 3rem;
        .item_title {
          font-size: .65rem;
          color: #fff;
          line-height: .7rem;
        }
        .item_list {
          font-size: 0;
          margin-top: .6rem;
          width: 10rem;
          span {
            display: inline-block;
            font-size: .62rem;
            color: #fff;
            vertical-align: middle;
          }
          .option_style {
            height: .725rem;
            width: .725rem;
            border: 1px solid #fff;
            border-radius: 50%;
            line-height: .725rem;
            text-align: center;
            margin-right: .3rem;
            font-size: .5rem;
            font-family: Arial;
          }
          .has_choosed {
            background-color: #ffd400;
            color: #575757;
            border-color: #ffd400;
          }
        }
      }
    }
    .home_logo {
      background-image: url(../images/1-2.png);
    }
    .item_back{
      background-image: url(../images/2-1.png);
    }
    .button_style{
      position: absolute;
      display: block;
      height: 2.1rem;
      width: 4.35rem;
      top: 16.5rem;
      left: 50%;
      margin-left: -2.4rem;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .start{
      background-image: url(../images/1-4.png);
    }
    .next{
      background-image: url(../images/2-2.png);
    }
    .submit{
      background-image: url(../images/3-1.png);
    }
  }
</style>
