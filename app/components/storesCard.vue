<script setup>
import {useStoresData} from "~~/stores/storesData.ts";

const storesData = useStoresData();
const {mobile} = useDisplay();
</script>

<template>
  <div v-for="(item,index) in storesData.stores" :key="index">
    <!--<v-card width="500" >سلام</v-card>-->
    <v-card class="mb-5" :min-width="mobile? '340' : '568'" height="256">
      <template #image>
        <v-img :src="item.image" class="image-stores" gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.85)"></v-img>
      </template>
      <div class="card-texts-container">
        <v-card-title class="stores-card-text flex-column align-start">{{ item.title }}</v-card-title>
        <v-card-subtitle class="stores-card-text" :opacity="1">{{ item.addressText }}</v-card-subtitle>
        <v-card-text>

          <div class="d-flex align-center justify-space-between">
            <div>
              <v-btn color="white" variant="outlined" icon="mdi-phone" size="small" class="ml-3"></v-btn>
              <v-btn color="white" variant="outlined" icon="mdi-directions" size="small"></v-btn>
            </div>
            <div>
              <v-btn color="white" variant="outlined" size="small">منو</v-btn>
            </div>
          </div>
        </v-card-text>
      </div>

      <!--      <template #title>-->
      <!--        <span class="stores-card-text">{{ item.title }}</span>-->
      <!--      </template>-->
    </v-card>
  </div>
</template>

<style lang="css">
.v-img__img--contain {
  -o-object-fit: contain;
  object-fit: cover !important;
}

.card-texts-container{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>