<template>
  <div>
    <header class="row row-cols-2 d-flex align-items-center p-3">
      <div class="col">
        <img
          src="../images/construction_logo.png"
          alt="contstruction_logo"
          class="mx-5"
          style="width: 20%"
        >
      </div>
      <div class="col">
        <div class="menu row mx-3">
          <div
            class="menu-i col-2 text-uppercase d-flex align-items-center justify-content-center"
            v-for="option in arrMenu"
            :key="option"
          >
            {{ option }}
          </div>
          <div
            class="button1 text-uppercase p-2 col-2 text-center"
          >
            get quote
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      arrMenu: ['home', 'about', 'services', 'work', 'articles'],
    };
  },

};
</script>

<style lang="scss">

$my-yellow: #fed23f;
$my-grey: #31312f;

.button1{
  background-color: $my-yellow;
  &:hover{
    background-color: $my-grey;
    color: white;
    cursor: pointer;
  }
}

.menu-i:hover{
  color: $my-yellow;
  cursor: pointer;
}

</style>
