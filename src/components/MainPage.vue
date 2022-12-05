<template>
  <div>
    <section
      class="sec1 d-flex flex-column align-items-center justify-content-center border border-dark"
    >
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
      <div class=" col-12 bg-warning text-center position-relative" style="padding: 2rem;">
        <div class="text-capitalize fs-4">Do you have a construction project we can help with?</div>
        <div class="button4 text-uppercase p-2
        position-absolute top-100 start-50 translate-middle">get a free quote</div>
      </div>
    </div>
    <section class="sec2">
      <div class="row text-center d-flex flex-column align-items-center mt-5 p-5">
        <div class="col-12 text-capitalize fs-4">specialist in modern construction</div>
        <div class="line-y col-2 my-3"></div>
        <div class="col-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis quasi veritatis eius et asperiores culpa labore dolor,
          adipisci in blanditiis est temporibus autem iusto ea sapiente.
        </div>
      </div>
      <div class="row row-cols-5 justify-content-center">
        <div
          class="card1 col rounded-4 m-3
          d-flex flex-column align-items-center"
          v-for="element in arrCard1" :key="element"
        >
          <div class="icon border border-dark p-2 fs-4 rounded-circle
          d-flex align-items-center justify-content-center mt-3">
            <font-awesome-icon :icon="element.icon"/>
          </div>
          <div class="fs-4 text-capitalize my-2">{{ element.title }}</div>
          <div class="text-center col-10">
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit
            nulla cupiditate.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      arrCard1: [
        {
          icon: 'fa-regular fa-building',
          title: 'buildings',
        },
        {
          icon: 'fa-solid fa-arrows-rotate',
          title: 'renovate',
        },
        {
          icon: 'fa-solid fa-house',
          title: 'construct',
        },
        {
          icon: 'fa-solid fa-truck',
          title: 'exclusive',
        },
      ],
    };
  },

};
</script>

<style lang="scss">

$my-yellow: #fed23f;
$my-grey: #31312f;
$my-lightgrey: #f0ede6;

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

.button4{
  background-color: $my-grey;
  color: white;
  width: fit-content;
  border: 1px solid white;
  &:hover{
    background-color: white;
    color: $my-grey;
    border: 1px solid $my-grey;
    cursor: pointer;
  }
}

.line-y{
  border: 2px solid $my-yellow;
}

.card1{
  width: 300px;
  height: 200px;
}

.icon{
  width: 50px;
  height: 50px;
}

.sec2{
  height: 70vh;
}

.card1{
  background-color: $my-lightgrey;
}

</style>
