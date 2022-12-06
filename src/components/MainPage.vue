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
      <div class=" col-12 bg-warning text-center position-relative" style="padding: 2.5rem;">
        <div class="text-capitalize fs-4">Do you have a construction project we can help with?</div>
        <div class="button4 text-uppercase p-2
        position-absolute top-100 start-50 translate-middle">get a free quote</div>
      </div>
    </div>
    <section class="sec2">
      <div class="row text-center d-flex flex-column align-items-center mt-5 p-5">
        <div class="col-12 text-capitalize fs-4">specialist in modern construction</div>
        <div class="line-y col-2 my-3"></div>
        <div class="col-8 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis quasi veritatis eius et asperiores culpa labore dolor,
          adipisci in blanditiis est temporibus autem iusto ea sapiente.
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-2 card-cont card1 m-3"
          v-for="element in arrCard1"
          :key="element"
        >
          <div class="card-inner">
            <div
              class="card1-front rounded-4 d-flex flex-column align-items-center"
            >
              <div
                class="icon border border-dark p-2 fs-4 rounded-circle
                d-flex align-items-center justify-content-center mt-3"
              >
                <font-awesome-icon :icon="element.icon"/>
              </div>
              <div class="fs-4 text-capitalize my-2">{{ element.title }}</div>
              <div class="text-center col-10">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
                nulla cupiditate.
              </div>
            </div>
            <div class="card1-back rounded-4 d-flex flex-column align-items-center
            justify-content-center">
              <div class="fs-5 text-uppercase my-2 text-center">artfully crafted</div>
              <div class="text-center col-10">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit
                nulla cupiditate.
              </div>
              <div
                class="my-2 p-2 text-uppercase back-btn-1"
                style="width: fit-content;"
              >
                get a quote
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sec3">
      <div class="row d-flex justify-content-center align-items-center" style="height: 100%">
        <div
          class="col-2 text-warning fs-2 d-flex flex-column align-items-center text-center
          p-3"
          v-for="data in arrNumbers" :key="data"
        >
          <font-awesome-icon :icon="data.icon" />
          <div class="col-12 ">{{ data.number }}</div>
          <div class="text-white text-uppercase" style="font-size: 0.8rem;">
            {{ data.text }}
          </div>
        </div>
      </div>
    </section>
    <section class="sec4 d-flex flex-column align-items-center">
      <div class="row text-center d-flex flex-column align-items-center mt-5 p-5">
        <div class="col-12 text-capitalize fs-4">Explore recent work</div>
        <div class="line-y col-2 my-3"></div>
        <div class="col-8 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis quasi veritatis eius et asperiores culpa labore dolor,
          adipisci in blanditiis est temporibus autem iusto ea sapiente.
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="card2 border border-dark card-cont m-3"
          style="width: 300px; height: 300px;"
          v-for="project in arrProjects"
          :key="project"
        >
          <div class="card-inner">
            <div class="card2-front">
              <img
                :src="project.imgUrl"
                :alt="project"
                class="h-100 w-100"
              >
            </div>
            <div class="card2-back d-flex flex-column align-items-center justify-content-center
            text-white">
              <div class="text-warning d-flex">
                <div class="icon bg-white p-2 rounded-circle fs-4 text-center mx-2">
                  <font-awesome-icon icon="fa-solid fa-link" />
                </div>
                <div class="icon bg-white p-2 rounded-circle fs-4 text-center mx-2">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
              </div>
              <div class="fs-4 text-capitalize my-2">florida heath facility</div>
              <div>Commercial</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-2 text-uppercase text-secondary p-3 m-5 text-center"
        style="cursor: pointer;"
      >
        view all projects
      </div>
    </section>
    <section class="sec5 pb-5">
      <div class="row text-center d-flex flex-column align-items-center mt-5 p-5">
        <div class="col-12 text-capitalize fs-4">Our core values</div>
        <div class="line-y col-2 my-3"></div>
        <div class="col-8 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis quasi veritatis eius et asperiores culpa labore dolor,
          adipisci in blanditiis est temporibus autem iusto ea sapiente.
        </div>
      </div>
      <div class="row row-cols-6 justify-content-center">
        <div
          class="card-cont"
          style="height: 300px;"
          v-for="element2 in arrCard2" :key="element2"
        >
          <div class="card-inner d-flex justify-content-center">
            <div class="card4-front col rounded-4 m-3 d-flex flex-column align-items-center pt-4">
              <div class="icon2 p-2 fs-1 rounded-circle
                d-flex align-items-center justify-content-center text-white"
                  style="width: 80px; height: 80px;"
                  :style="`background-color: ${element2.bgColor}`"
                >
                  <font-awesome-icon :icon="element2.icon"/>
              </div>
              <div class="fs-4 text-capitalize my-2 text-center">{{ element2.title }}</div>
              <div class="border border-dark col-1"></div>
              <div class="text-center col-10 mt-3">
                Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </div>
            </div>
            <div class="card4-back col rounded-4 m-3 d-flex flex-column align-items-center pt-4">
              <div class="icon2 p-2 fs-1 rounded-circle bg-warning
                d-flex align-items-center justify-content-center text-white"
                style="width: 80px; height: 80px;"
                >
                  <font-awesome-icon :icon="element2.icon"/>
              </div>
              <div class="fs-4 text-capitalize my-2
              text-center text-warning">
                {{ element2.title }}
              </div>
              <div class="border border-dark col-1"></div>
              <div class="text-center col-10 mt-3">
                Lorem ipsum dolor sit amet
                consectetur adipisicing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sec6 text-white">
      <div class="row text-center d-flex flex-column align-items-center p-5">
        <div class="col-12 text-capitalize fs-4">Our home owners say</div>
        <div class="line-y col-2 my-3"></div>
        <div class="col-2">
          <img src="../images/home-testimonial-113165296.jpg" alt="" class="rounded-circle my-3">
        </div>
        <div class="col-6 lh-base fw-semibold cit gy-3">
          <i>
            "No man but feels more of a man in the world if he have but a bit of ground
            that he can call his own. However small it is on the surface, it is four thousand
            miles deep; and that is a very handsome property."
          </i>
        </div>
        <div class="col-4 text-uppercase fw-bold py-4">Harry Smith - New Home Owner</div>
      </div>
    </section>
    <section class="sec7 py-5">
      <div class="row text-center d-flex flex-column align-items-center p-5">
        <div class="col-12 text-capitalize fs-4">Last News</div>
        <div class="line-y col-2 my-3"></div>
        <div class="col-8 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis quasi veritatis eius et asperiores culpa labore dolor,
          adipisci in blanditiis est temporibus autem iusto ea sapiente.
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="card-cont m-3"
          style="width: 300px; height: 550px;"
          v-for="news in arrNews"
          :key="news"
        >
          <div class="card-inner">
            <div class="bg-white card3-front" style="width: 300px;">
              <img
                :src="news.imgNewsUrl"
                :alt="news"
                class=""
                style="width: 300px; object-fit: cover;"
              >
              <div class="fs-5 text-capitalize p-2">
                {{ news.title }}
              </div>
              <div class="p-2" style="font-size: 0.8rem;">
                December 7th, 2015
              </div>
              <div class="border border-secondary my-3 m-auto" style="width: 95%;"></div>
              <div class="lh-lg my-2 p-2">
                Technology is Here to Say
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolor placeat ducimus vero tempora molestiae
                vel neque laborum natus tempore facilis quos aperiam.
                Placeat ducimus vero.
                </div>
              </div>
            <div class="bg-white card3-back" style="width: 300px;">
              <div
                class="bg-warning d-flex flex-column align-items-center
                justify-content-center"
                style="width: 300px; height: 180px; object-fit: cover;"
              >
                <div class="text-warning d-flex">
                  <div class="icon bg-white p-2 rounded-circle fs-4 text-center mx-2">
                    <font-awesome-icon icon="fa-solid fa-link" />
                  </div>
                  <div class="icon bg-white p-2 rounded-circle fs-4 text-center mx-2">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </div>
                </div>
                <div class="fs-5 text-capitalize py-2 text-white text-center">
                  {{ news.title }}
                </div>
                <div
                 class="text-white text-center"
                  style="font-size: 0.8rem;"
                >Architecture, Buildings, Construction, News</div>
              </div>
              <div class="fs-5 text-capitalize p-2">
                {{ news.title }}
              </div>
              <div class="p-2" style="font-size: 0.8rem;">
                December 7th, 2015
              </div>
              <div class="border border-secondary my-3 m-auto" style="width: 95%;"></div>
              <div class="lh-lg my-2 p-2">
                Technology is Here to Say
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolor placeat ducimus vero tempora molestiae
                vel neque laborum natus tempore facilis quos aperiam.
                Placeat ducimus vero.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="border border-white border-3" style="width: 20%; height: 0"></div>
        <div
          class="col-3 text-uppercase text-center p-5 mt-3"
          style="cursor: pointer"
        >
          view all articles
        </div>
        <div class="border border-white border-3" style="width: 20%; height: 0"></div>
      </div>
    </section>
    <section class="sec8 mb-5">
      <div class="row text-center d-flex flex-column align-items-center mt-5 p-5">
        <div class="col-12 text-capitalize fs-4">Trusted partners</div>
        <div class="line-y col-2 my-3"></div>
        <div class="col-8 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis quasi veritatis eius et asperiores culpa labore dolor,
          adipisci in blanditiis est temporibus autem iusto ea sapiente.
        </div>
      </div>
      <div class="row justify-content-center m-3">
        <div
          class="col-2 d-flex align-items-center justify-content-center"
          v-for="partner in arrPartners" :key="partner"
        >
          <img :src="partner.imgPartner" :alt="partner"
          style="width: 80%;height: 80%;">
        </div>
      </div>
    </section>
    <section class="sec9 text-white">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-6">
          <div class="text-capitalize fs-4">Building inspiring spaces</div>
          <div class="line-y col-2 my-3"></div>
          <div class="lh-lg col-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quasi veritatis eius et asperiores culpa labore dolor,
            adipisci in blanditis.
          </div>
        </div>
        <di class="col-3 d-flex flex-column align-items-center">
          <div class="button5 p-2 text-uppercase">get a free quote</div>
          <div class="p-2" style="font-size: 0.8rem;">Only takes a few seconds!</div>
        </di>
      </div>
    </section>
  </div>
</template>

<script>
import imgProject2 from '../images/project2-featured-15013609-400x400.jpg';
import imgProject1 from '../images/project1-featured-294276386-400x400.jpg';
import imgProject3 from '../images/project3-featured-189023420-400x400.jpg';

import imgNews1 from '../images/blog-post-134132600-400x241.jpg';
import imgNews2 from '../images/blog-post-92486644-400x241.jpg';
import imgNews3 from '../images/blog-post-332773904-400x241.jpg';

import partner1 from '../images/home-logo11-219096700-320x202.png';
import partner2 from '../images/home-logo10-219096700-320x202.png';
import partner3 from '../images/home-logo2-219096700-320x202.png';
import partner4 from '../images/home-logo1-219096700-320x202.png';
import partner5 from '../images/home-logo9-219096700-320x202.png';

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
      arrNumbers: [
        {
          icon: 'fa-solid fa-suitcase',
          number: '3534',
          text: 'planning applications',
        },
        {
          icon: 'fa-regular fa-building',
          number: '896',
          text: 'completed projects',
        },
        {
          icon: 'fa-solid fa-users',
          number: '172',
          text: 'trained professionals',
        },
        {
          icon: 'fa-solid fa-globe',
          number: '19',
          text: 'international offices',
        },
      ],
      arrProjects: [
        {
          name: 'project-2',
          imgUrl: imgProject2,
        },
        {
          name: 'project-1',
          imgUrl: imgProject1,
        },
        {
          name: 'project-3',
          imgUrl: imgProject3,
        },
      ],
      arrCard2: [
        {
          icon: 'fa-solid fa-house',
          title: 'great services',
          bgColor: '#4ea4a5;',
        },
        {
          icon: 'fa-solid fa-gear',
          title: 'highest standarts',
          bgColor: '#045287;',
        },
        {
          icon: 'fa-solid fa-users',
          title: 'professional team',
          bgColor: '#fe6f1d;',
        },
        {
          icon: 'fa-regular fa-lightbulb',
          title: 'creative solutions',
          bgColor: '#a7cf47;',
        },
      ],
      arrNews: [
        {
          imgNewsUrl: imgNews1,
          title: 'redeveloping floridas remote southern coast',
        },
        {
          imgNewsUrl: imgNews2,
          title: 'how we manage large constructions projects',
        },
        {
          imgNewsUrl: imgNews3,
          title: 'future proofing a modern home',
        },
      ],
      arrPartners: [
        {
          imgPartner: partner1,
        },
        {
          imgPartner: partner2,
        },
        {
          imgPartner: partner3,
        },
        {
          imgPartner: partner4,
        },
        {
          imgPartner: partner5,
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
  height: 250px;
}

.card-cont{
  position: relative;
}

.card-cont:hover .card-inner{
    transform: rotateY(180deg);
}

.card-inner{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.6s ease;
}

.card1-front{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $my-lightgrey;
  backface-visibility: hidden;
}

.card1-back{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: $my-yellow;
}

.card2-front, .card3-front, .card4-front{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card2-back, .card3-back, .card4-back{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
}

.card2-back, .card3-back{
  background-color: $my-yellow;
}

.back-btn-1{
  background-color: yellow;
  cursor: pointer;
}

.news{
  margin-left: -0.80rem;
}

.icon{
  width: 50px;
  height: 50px;
}

.sec2{
  height: 70vh;
}

.sec3{
  background-image: url('../images/home-244125289.jpg');
  height: 50vh;
}

.sec5, .sec7{
  background-color: $my-lightgrey;
}

.sec6{
  height: 70vh;
  background-image: url('../images/home-parallax-144609983.jpg');
  background-size: cover;
  background-position: center;
}

.cit{
  word-spacing: 5px;
}

.sec9{
  height: 50vh;
  background-image: url('../images/about-call-to-action-57862405.jpg');
  background-size: cover;
  background-position: bottom center;
}

.button5{
  background-color: $my-yellow;
  width: fit-content;
  color: $my-grey;
  &:hover{
    background-color: $my-grey;
    color: $my-yellow;
    cursor: pointer;
  }
}
</style>
