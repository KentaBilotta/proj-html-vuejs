<template>
  <div>
    <div class="fw-light">
      <HeaderPage />
      <MainPage />
      <FooterPage />
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },

};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

</style>
