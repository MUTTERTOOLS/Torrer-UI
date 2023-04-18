<template>
  <ul>
    <li v-for="item in glyphs" :key="item.name">
      <tr-icon :name="item.font_class" />
      <!-- <p>{{ item.font_class }}</p> -->
      <p>{{ item.name }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
// import { TrIcon } from '@torrer-ui/components';
import JsonOfIcon from '@torrer-ui/components/src/icon/src/font/iconfont.json';
const { glyphs } = JsonOfIcon;
// console.log(TrIcon, glyphs);
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  /* align-items: space-between; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  padding: 0 !important;
  margin: 0 !important;
}
ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 110px;
  padding-top: 10px;
  margin: 10px;
  list-style: none;
  background-color: #fcfcfc;
  border: 1px solid #eee;
  border-radius: 10px;
}
ul li p {
  font-size: 12px;
  text-align: center;
}
</style>
