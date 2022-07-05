<template>
  <div class="navigation">
    <div class="logo-block">
        <img class="logo" src="https://png.pngtree.com/element_our/md/20180413/md_5ad0b7da9d41b.jpg" alt="">
        <span class="navigation-logo">Progsus</span>
        <input type="text" class="navigation-input" placeholder="Search">
    </div>
    <div>
        <button class="navigation-button">Sign In</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.navigation {
  font-family: 'Roboto Serif', serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333336;
  padding: 10px 352px;
  color: #ffffff;
  font-size: 20px;
}

.navigation-input {
  margin-left: 5px;
  height: 35px;
  width: 305px;
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

.navigation-logo {
  font-size: 25px;
  font-weight: 600;
  margin-left: 5px;
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

.logo-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 50px;
  border-radius: 50%;
}
</style>