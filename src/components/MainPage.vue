<template>
  <div>
    <section
    class="sec1 d-flex flex-column align-items-center justify-content-center border border-dark">
      <div class="row">
        <h2 class="text-white text-uppercase">building inspiring spaces</h2>
      </div>
      <div class="row text-warning text-capitalize my-2">
        <div class="col-12">we build inspiring residential & commercial spaces</div>
      </div>
      <div class="row">
        <div class="col-12 text-uppercase d-flex my-3">
          <div class="button2 p-3 mx-2">explore recent work</div>
          <div class="button3 p-3 mx-2">get a quote today</div>
        </div>
      </div>
    </section>
    <div class="row">
      <div class=" col-12 text-capitalize bg-warning text-center" style="padding: 2rem;">
        Do you have a construction project we can help with?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',

};
</script>

<style lang="scss">

$my-yellow: #fed23f;
$my-grey: #31312f;

.sec1{
  height: 80vh;
  background-image: url('../images/home-slider-62528242.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.button2{
  background-color: $my-grey;
  color: white;
  width: fit-content;
  &:hover{
    background-color: $my-yellow;
    color: $my-grey;
    cursor: pointer;
  }
}

.button3{
  background-color: $my-yellow;
  width: fit-content;
  &:hover{
    background-color: $my-grey;
    color: white;
    cursor: pointer;
  }
}

</style>
