<template>
  <div class="about">
    <div class="photo-block">
      <img class="photo" src="https://sun9-east.userapi.com/sun9-28/s/v1/if2/44MSu9lRKJ0zPhkD8DRQdMofGkI0nq7ChO7nsRicq0guZX08EjkAg0nad5DJGJ7Ks0hQwFRV0np5yQovI5fd4YMF.jpg?size=960x960&quality=96&type=album" alt="">
      <button class="photo-edit-btn">Edit</button>
    </div>

    <div class="info-block">
      <div class="main-info-block">
        <div>
          <h1>Kazybek Almas</h1>
          <span class="status">Change status</span>
        </div>
        <div>
          <table>
            <tr>
              <td>Birthday:</td>
              <td>March 5, 1993</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>Almaty</td>
            </tr>
            <tr>
              <td>Education:</td>
              <td>KazNU</td>
            </tr>
          </table>
          <button class="more-info-btn" @click="toggleIsMore">Show more information</button>
        </div>
        <div v-if="isMoreInfo">
          <table>
            <tr>
              <td>Contact information</td>
              <td>___________________</td>
            </tr>
            <tr>
              <td>Mobile phone:</td>
              <td>87051111111</td>
            </tr>
            <tr>
              <td>Home phone:</td>
              <td>87052222222</td>
            </tr>
            <tr>
              <td>Education</td>
              <td>___________________</td>
            </tr>
            <tr>
              <td>School:</td>
              <td>№138</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  let isMoreInfo = ref(false)
  const toggleIsMore = () => {isMoreInfo.value = !isMoreInfo.value}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
}

.photo-block {
  padding: 15px;
  background-color: #333336;
  border-radius: 5px;
  width: 288px;
  height: 400px;
}

.photo {
  border-radius: 8px;
  width: 288px;
  height: 350px;
}

.photo-edit-btn {
  font-family: 'Roboto Serif', serif;
  margin-top: 5px;
  width: 288px;
  height: 35px;
  background-color: #5E5E5E;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.info-block {
  background-color: #333336;
  width: 705px;
  border-radius: 5px;
  height: fit-content;
}

.main-info-block {
  padding: 25px;
}

h1 {
  color: #ffffff;
  font-family: 'Roboto Serif', serif;
  margin-bottom: 5px;
}

.status {
  color: #ffffff;
  font-size: 18px;
}

table {
  color: #ffffff;
  padding: 15px 0;
  width: 50%;
  font-size: 18px;
  font-family: 'Roboto Serif', serif;
}

td {
  padding: 5px;
}

.more-info-btn {
  width: 655px;
  height: 35px;
  color: #ffffff;
  background-color: rgb(122, 122, 122);
  font-family: 'Roboto Serif', serif;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.more-info-btn:hover {
  background-color: #5E5E5E;
}
</style>