<template>
  <div class="navigation">
    <div>
      <span class="navigation-icon">Progsus</span>
      <input type="text" class="navigation-input" placeholder="Поиск">
    </div>
    <div>
      <button class="navigation-button">Войти</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navigation {
  font-family: 'Roboto Serif', serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333336;
  padding: 10px 343px;
  color: #ffffff;
  font-size: 20px;
}

.navigation-input {
  margin-left: 15px;
  height: 35px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  font-family: 'Roboto Serif', serif;
  font-size: 15px;
  padding: 0 5px;
  border: 3px #333336 solid;
  transition: 0.3s;
}

.navigation-input:hover,
.navigation-input:focus {
  border: 3px #0089D0 solid;
}

.navigation-icon {
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 4px;
}

.navigation-button {
  margin: 0 10px;
  padding: 5px 15px;
  font-family: 'Roboto Serif', serif;
  font-size: 18px;
  background-color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  border: none;
  border-radius: 2px;
}

.navigation-button:hover {
  background-color: #0089D0;
  color: #ffffff;
}
</style>