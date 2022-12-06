<template>
  <div>
    <footer>
      <div class="footer-top bg-dark d-flex align-items-center justify-content-center">
        <div class="row row-cols-4 h-75 w-100 mx-3">
          <div class="col p-3">
            <img
              src="../images/footer-logo.png"
              alt="contruction-logo-footer"
              style="width: 70%;"
            >
            <div class="lh-lg text-secondary p-2">
              We are specialists in the construction of unique and exclusive properties.
              Our work inspires. We pride ourselves on delivering outstanding quality and design
              for leading clients across the world.
            </div>
            <div class="button5-1 p-2 text-uppercase m-2">learn more</div>
          </div>
          <div class="col px-2">
            <div class="text-warning text-uppercase fw-semibold mb-4">latest tweets</div>
            <div class="row text-white">
              <div class="col-2">
                <img
                  src="../images/3a74ce3d0532b7773b174c45ca3bd05a_normal.png"
                  alt=""
                  style="width: 30px;"
                >
              </div>
              <div class="col-8" style="font-size: 0.8rem;">
                <div class="fw-semibold">ThemeFusion</div>
                <div>@Theme_Fusion</div>
              </div>
              <div class="col-1">
                <img src="../images/image (1).svg" alt="" style="width: 20px">
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-10 text-white" style="font-size: 0.8rem;">
                Do you need sublime WordPress hosting for your next website?
                Take advantage of exclusive partner offers that we have secured just for you,
                & launch your site in seconds width <a href="#!" class="text-primary">#avada</a>
                on WP Engine hosting & get 30% Off this Black Friday
                <a href="#!" class="text-primary">bit.ly/3kjLLE2</a><span>. </span>
                <a href="#!" class="text-primary">#BlackFriday2020</a>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-10 my-3">
                <img src="../images/En2TRxLW4AEiWUN.jpeg" alt="" style="width: 100%">
              </div>
            </div>
            <div class="row justify-content-around info">
              <div class="col-4">
                <img src="../images/image (2).svg" alt="" style="width: 20px;">
                <img src="../images/image (3).svg" alt="" class="mx-4" style="width: 20px;">
              </div>
              <div
                class="col-1 text-secondary d-flex align-items-center"
                style="font-size: 0.9rem;"
              >
                22h
              </div>
            </div>
          </div>
          <div class="col px-2">
            <div class="text-warning text-uppercase fw-semibold mb-4">contact us today</div>
            <div
              class="row text-secondary my-2"
              v-for="info in arrContactInfo"
              :key="info"
            >
              <div class="col-1">
                <font-awesome-icon :icon="info.icon" />
              </div>
              <div class="col-10">
                {{ info.text }}
              </div>
            </div>
          </div>
          <div class="col px-2">
            <div class="text-warning text-uppercase fw-semibold mb-4">find us</div>
            <img src="../images/construction_thumbnail-400x300.jpg" alt="" style="width: 90%;">
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row h-100 align-items-center justify-content-between">
          <div class="col-6 text-uppercase text-white mx-4"
          style="font-size: 0.8rem;">
            <span class="copyright">copyright 2012 - 2015 avada theme by </span>
            theme fusion |
            <span class="copyright">all rights reserved | powered by </span>
            wordpress
          </div>
          <div
            class="col-4 mx-4 text-secondary text-end fs-5">
            <font-awesome-icon
              class="mx-3"
              v-for="social in arrSocials"
              :key="social"
              :icon="social"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data() {
    return {
      arrContactInfo: [
        {
          icon: 'fa-solid fa-globe',
          text: 'Corporate Location 1600 Amphitheatre Parkway London WC1 1BA',
        },
        {
          icon: 'fa-solid fa-house',
          text: 'Residential Location 9521 Broadsberry Avanue Paddington RC7 9ZA',
        },
        {
          icon: 'fa-solid fa-phone',
          text: '1.800.458.556 / 1.800.532.2112',
        },
        {
          icon: 'fa-solid fa-envelope',
          text: 'info@your-domain.com',
        },
        {
          icon: 'fa-regular fa-clock',
          text: 'Monday - Friday: 9:00 AM - 6:00 PM',
        },
        {
          icon: 'fa-regular fa-clock',
          text: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
        },
      ],
      arrSocials: ['fa-brands fa-facebook', 'fa-brands fa-twitter', 'fa-brands fa-youtube', 'fa-brands fa-instagram'],
    };
  },

};
</script>

<style lang="scss">

$my-yellow: #fed23f;
$my-grey: #31312f;

.footer-top{
  height: 80vh;
  border-top: 20px solid $my-grey;
}

.footer-bottom{
  height: 15vh;
  background-color: #1e1e1e;
}

.button5-1{
  background-color: $my-yellow;
  width: fit-content;
  color: $my-grey;
  &:hover{
    background-color: $my-grey;
    color: $my-yellow;
    cursor: pointer;
  }
}

.info{
  position: relative;
  top: -20px;
  left: 15px;
}

.copyright{
  opacity: 0.5;
}
</style>
