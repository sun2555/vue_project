<template>
  <div class="form-container">
      <h2>회원가입</h2>
      <form >
          <div class="form-group">
              <label for="username">사용자 이름</label>
              <input type="text" id="username" v-model="username" required>
          </div>
          <div class="form-group">
              <label for="email">이메일</label>
              <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
              <label for="password">비밀번호</label>
              <input type="password" id="password" v-model="password" required>
          </div>
          <div class="form-group">
              <label for="confirm-password">비밀번호 확인</label>
              <input type="password" id="confirm-password" v-model="confirmPassword" required>
          </div>
          <div class="form-group">
              <label>성별</label>
              <div class="radio-group">
                  <label><input type="radio" value="male" v-model="gender" required> 남성</label>
                  <label><input type="radio" value="female" v-model="gender"> 여성</label>
              </div>
          </div>
          <div class="form-group">
              <label for="favorite-food">좋아하는 음식</label>
              <select id="favorite-food" v-model="favoriteFood" required>
                  <option value="한식">한식</option>
                  <option value="중식">중식</option>
                  <option value="양식">양식</option>
                  <option value="일식">일식</option>
                  <option value="퓨전">퓨전</option>
                  <option value="기타">기타</option>
              </select>
          </div>
          <div class="form-group checkbox-group">
              <label><input type="checkbox" v-model="privacy" required> 정보공개 동의</label>
          </div>
          <div class="form-group submit-button-container">
              <input type="submit" value="가입하기">
          </div>
      </form>
  </div>
</template>
<script>
export default {
  name: 'Test1View',
  data() {
      return {
          username: '홍길동',
          email: 'borgssam@gmail.com',
          password: '1234',
          confirmPassword: '1234',
          gender: '',
          favoriteFood: '한식',
          privacy: false
      };
  },
  methods: {
  }
};
</script>
<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f4f4f9;
}
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"],
.form-group select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}
.form-group input[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s;
}
.form-group input[type="submit"]:hover {
  background-color: #0056b3;
}
.radio-group {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px; /* 레이블 간의 간격 */
}
.radio-group label {
  display: flex;
  align-items: center;
}
.checkbox-group {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.checkbox-group input[type="checkbox"] {
  margin-right: 10px;
}
.submit-button-container {
  text-align: center;
}
</style>
접기














자바풀스택학습에 메시지 보내기










