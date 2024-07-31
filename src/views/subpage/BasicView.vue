
<template>
  <h3>--------------------->value값 연결---------------------</h3>
  <div class="basic">
    <h3>Hello, {{ title }} </h3>   
    <h3>{{ title }}는 수원장안구에 있습니다. </h3>   
    <p>{{message}}</p>
    <p v-html="message"></p>
  </div>
  <div>
    <input type="text" v-model="nickname" />
  </div>
  <div>
    <input type="number" v-model.number="age" />
  </div>
  <div>
    <textarea v-model="message" cols="30" rows="10"></textarea>
  </div>
  <div>
    <select name="city" v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
  </div>
  <div>
    <label ><input type="checkbox" v-model="cbox">{{cbox}}</label>
    <br>
    <label ><input type="checkbox" v-model="cbox2" true-value="동의"
     false-value="비동의" >{{cbox2}}</label>    
  </div>
  <div>
    <p>좋아하는 음식은?</p>
    <label ><input type="checkbox" v-model="goodfood" value="마라탕">마라탕</label>
    <label ><input type="checkbox" v-model="goodfood" value="민트초코">민트초코</label>
    <label ><input type="checkbox" v-model="goodfood" value="홍어삼합">홍어삼합</label>
    <p>당신이 좋아하는 음식은 {{goodfood}}  입니다.</p><br>


    <p>싫어하는 음식은?</p>
    <label ><input type="checkbox" v-model="badfood" value="마라탕">마라탕</label>
    <label ><input type="checkbox" v-model="badfood" value="민트초코">민트초코</label>
    <label ><input type="checkbox" v-model="badfood" value="홍어삼합">홍어삼합</label>

    <p>당신이 싫어하는 음식은 {{badfood}} 입니다.</p>
  </div>
  <div>
    <p>당신의 성별은?</p>
    <label><input type="radio" v-model="gender" value="남">남</label>
    <label><input type="radio" v-model="gender" value="녀">녀</label>
    <p>당신은 {{gender}}자입니다.</p>
  </div>

  <h3>---------------------속성 연결---------------------</h3>
  <div>
    <img v-bind:src="imgSrc" alt="" v-bind:title="tooltip"/>
  </div>
  <div>
    <button v-bind:disabled="show1" >눌러주세요</button>
    <button v-bind:disabled="show2" >눌러주세요</button>
  </div>
  <div>
    <button v-bind:style="btn1" >눌러주세요</button>
    <button v-bind:style="btn2" >눌러주세요</button>
  </div>
  <h3>---------------------제어문 (v-for, v-if, v-else) ---------------------</h3>
  <div>
    <table>
      <thead>
        <tr>
          <th >제품명</th>
          <th >가격</th>
          <th >카테고리</th>
          <th >배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key = "index" v-for="(item, index) in products">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.category}}</td>
          <td>{{item.delivery}}</td>
        </tr>

      </tbody>
    </table>
  </div>
  <div>
    <!-- v-if 요소를 만드느냐 마느냐 -->
    <p v-if="true">if참인때</p>
    <p v-if="false">if거짓인때</p>
    <!-- v-show는 요소는 만들고, 보여주는지 여부를 처리 -->
    <p v-show="true">show참인때</p>
    <p v-show="false">show거짓인때</p>
  </div>

  <h3>---------------------이벤트(v-on / @)---------------------</h3>
  <div>
    <button v-on:click="increaseCounter">클릭(증가)</button>
    <button @:click="decreaseCounter">클릭(감소)</button>
    <p>counter:{{counter}}</p>
    <input type="number" v-model="countValue">
    <button @:click="applyCounter">적용</button>

    <button @:click="increaseCounter(),showMsg()">증가후 알림창</button>
    <button @:click="decreaseCounter(),showMsg()">감소후 알림창</button>


  </div>

  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
  끝

</template>

<script>
export default {
  name: 'BasicView',
  components: {
    
  },
  data() {
    return {
      title:'연세IT',
      message:'<b>연세IT</b>는 <b><span style="color:red;">5년</span></b>우수직업학교입니다.',
      nickname:'돌쇠',
      age:22+4 ,
      city:'01',
      cbox: false,
      cbox2:"비동의",
      goodfood:[],
      badfood:[],
      gender:'남',
      imgSrc:'https://borgssam.github.io/MySite/img/album_01.jpg',
      tooltip:'툴팁메시지',
      show1:true,
      show2:false,
      btn1: {
        backgroundColor:'blue',
        color:'orange',
        fontSize:'32px',
      },
      btn2: {
        backgroundColor:'red',
        color:'skyblue',
        fontSize:'32px',
      },
      products: [
        {"name":"마우스1", "price":2501, "category": "PC용품1", "delivery":1000},
        {"name":"마우스2", "price":2502, "category": "PC용품2", "delivery":2000},
        {"name":"마우스3", "price":2503, "category": "PC용품3", "delivery":3000},
      ],
      counter: 0,
      countValue:10,


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
    increaseCounter(){
      this.counter = this.counter +1;
    },
    decreaseCounter(){
      this.counter = this.counter -1;
    },
    applyCounter(){
      this.counter = this.countValue;
    },
    showMsg(){
      alert('현재값 = >'+ this.counter );
    }
  }
};
</script>

<style scoped>
table{
  border-collapse: collapse;
  width:100%;
}
td, th{
  border:1px solid #ddd;
  text-align: left;
  padding : 8px;
}
th{
  
  text-align: center;
  font-weight: 600;
}

</style>
