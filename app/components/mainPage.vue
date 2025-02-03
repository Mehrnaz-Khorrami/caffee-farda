<script setup>
const {mobile} = useDisplay()
</script>

<template>
  <v-container fluid class="bgStyle fill-height  d-flex align-center justify-center">
    <div class="d-flex flex-column align-center">
      <div class>
        <v-img
            src="/img/farda-logo-04.png"
            alt="font-logo"
            :width="mobile ? '280': '500'"
            eager
        >
        </v-img>
      </div>
      <div>

      <StoresCard/>
      </div>
    </div>
  </v-container>
</template>

<style>
.bgStyle {
  background-image: url('/img/background.webp') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}


</style>