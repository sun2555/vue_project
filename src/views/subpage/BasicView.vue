<template>
  <h2></h2>
  <div class="basic">
    <h3>hello,{{ title }}</h3>
    <h3>{{ title }}는 수원장안구에 있습니다</h3>
    <p>{{message}}</p>
    <p v-html="message"></p>
    
  </div>
  <div>
    <input type="text" v-model="nickname" />
  </div>
  <div>
    <input type="text" v-model="age"/>
  </div>
  <div>
    <textarea v-model="message" cols="30" rows="10"/>
  </div>
  <div>
    <select name="city"  v-memo="city">
      <option value="01">서울</option>
      <option value="02" selected>부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
  </div>
  <div>
    <label ><input type="chekbox"  v-model="cbox">{{cbox}}</label>
    <label ><input type="chekbox"  v-model="cbox2" true-value="동의">{{cbox}}</label>
    <label ><input type="chekbox"  v-model="cbox2" true-value="동의">{{cbox}}</label>
    <label ><input type="chekbox"  v-model="cbox2" true-value="동의">{{cbox}}</label>
  </div>
  <div>
    <p>좋아하는 음식은?</p>
    <label ><input type="chekbox"  v-model="goodfood" >마라탕</label>
    <label ><input type="chekbox"  v-model="goodfood" >마라탕</label><br/>
    <label ><input type="chekbox"  v-model="goodfood" >마라탕</label><br/>
    <p>당신이 좋아하는하는 음식은 {{goodfood}}</p>
    <p>싫어하는 음식은?</p><br>
    
    <label ><input type="chekbox"  v-model="goodfood" >마라탕</label>
    <label ><input type="chekbox"  v-model="goodfood" >마라탕</label><br/>
    <label ><input type="chekbox"  v-model="goodfood" >마라탕</label><br/>
    <p>당신이 싫어하는 음식은 {{badfood}}</p>
  </div>
  <div>
    <p>당신의 성별은?</p>
    <label><input type="radio" v-model="gender" value="남">남</label>
    <label><input type="radio" v-model="gender" value="남">녀</label>
  </div>
  <h3> ------속성연결--------</h3>
  <div>
    <img v-bind:src="imgSrc" alt="" v-bind:title="tooltip"/>
  </div>
  <div>
    <button v-bind:disabled="btn1">눌러주세요</button>
    <button v-bind:disabled="btn2">눌러주세요</button>
  </div>


</template>

<script>
export default {
  name: 'BasicView',
  components: {
  },
  data() {
    return {
     title:'연세IT',
     message:'<b>연세IT</b>는 <span style="color:red;">5년</span> 우수 직업학교',
     nickname:'돌쇠',
     age:22+3,
     city:'04',
     cbox:false,
     cbox2:"비동의",
     goodfood:[],
     gender:'남',
     tooltip:'튤팁메시지',
     show1:true,
     show2:false,
     btn1:{
      backgroundColor:'blue',
      color:'yellow',
      fontSize:'64'
    },
    btn2:{
      backgroundColor:'red',
      color:'white',
    },

    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>