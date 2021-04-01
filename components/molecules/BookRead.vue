<template>
  <div class="book-read">
    <div class="book-read__main">
      <div ref="pages" class="swiper-container book-read__pages">
        <div class="swiper-wrapper">
          <div
            v-for="page in $book.pages"
            :key="page.id"
            class="swiper-slide book-read__slide"
          >
            <img
              src="@/assets/img/page.svg"
              :alt="`Página ${page.pageNumber}`"
              class="book-read__cover-page"
            />
            {{ page.pageNumber }}
          </div>
        </div>
      </div>

      <div
        ref="selected-page"
        class="swiper-container book-read__selected-page"
      >
        <div class="swiper-wrapper">
          <div
            v-for="page in $book.pages"
            :key="page.id"
            class="swiper-slide book-read__slide"
          >
            <p class="book-read__content" v-html="page.text"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="book-read__buttons">
      <div class="swiper-button-prev swiper-button">
        <img src="@/assets/img/arrow.svg" />
      </div>
      <div class="swiper-button-next swiper-button">
        <img src="@/assets/img/arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
import Swiper, { Thumbs, Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.css'

Swiper.use([Thumbs, Navigation])

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
  mounted() {
    this.initializeSwiper()
  },
  methods: {
    initializeSwiper() {
      const pages = new Swiper(this.$refs.pages as HTMLElement, {
        spaceBetween: 10,
        slidesPerView: 2,
        direction: 'horizontal',
        breakpoints: {
          768: {
            slidesPerView: 4,
            direction: 'vertical',
          },
        },
      })

      const selectedPage = new Swiper(
        this.$refs['selected-page'] as HTMLElement,
        {
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          thumbs: {
            swiper: pages,
          },
        }
      )
    },
  },
})
</script>

<style lang="scss" scoped>
.book-read {
  position: relative;

  &__main {
    display: grid;
    grid-gap: 20px;

    @media (min-width: 768px) {
      grid-auto-flow: column;
      grid-template-columns: 150px 1fr;
    }
  }

  &__pages {
    margin: 0;

    .swiper-slide {
      display: grid;
      grid-auto-flow: row;
      text-align: center;
      grid-gap: 10px;
      grid-template-rows: 150px;
      height: auto !important;
      justify-content: center;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border: 1px solid #000;
      box-shadow: inset 0 0 0 1px #000;
      transition: all 0.2s;

      &:hover {
        box-shadow: inset 0 0 0 2px #000;
      }

      &.swiper-slide-thumb-active {
        box-shadow: inset 0 0 0 3px #000;
      }
    }
  }

  &__selected-page {
    width: 100%;
    height: 100%;
    box-shadow: -1px 3px 21px 1px rgba(0, 0, 0, 0.1);
    border: 1px solid #e9e9e9;

    .swiper-slide {
      padding: 50px;
      line-height: 1.625rem;
    }
  }

  &__buttons {
    display: grid;
    grid-template-rows: 32px;
    grid-template-columns: 43px 50px;
    width: 100%;
    justify-content: flex-end;
    justify-items: flex-end;
    grid-gap: 10px;
    margin-top: 10px;

    .swiper-button {
      width: 100%;
      height: 100%;
      position: initial;
      margin: 0;
      background: #292929;

      &:after {
        content: '';
      }
    }

    .swiper-button-next {
      transform: rotate(180deg);
    }
  }

  &__cover-page {
    width: 100%;
  }
}
</style>
