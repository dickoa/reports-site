<template>
  <article class="card card--keyMessages key-messages" :id="cssId">
    <CardHeader />
    <h2 class="card__title">{{ $t('Key Messages', locale) }}</h2>
    <div class="key-messages__area">
      <ul class="message-list">
        <li :key="message.sys.id" v-for="message in messages" class="message">
          {{ message.fields.keyMessage }}
        </li>
      </ul>
      <div class="image-area" v-if="image && typeof image.fields !== 'undefined'">
        <figure>
          <img class="image" :src="'https:' + image.fields.file.url" :alt="image.fields.title">
          <figcaption v-if="image.fields.description">{{ image.fields.description }}</figcaption>
        </figure>
      </div>
    </div>
    <CardActions :frag="'#' + cssId" />
    <CardFooter />
  </article>
</template>

<script>
  import Global from '~/components/_Global';
  import Card from '~/components/Card';

  export default {
    extends: Card,
    mixins: [Global],

    props: {
      'messages': Array,
      'image': Object,
    },

    computed: {
      cssId() {
        return `cf-${this.messages.map((msg) => msg.sys.id).join('_')}`;
      },
    }
  }
</script>

<style scoped>

.image-area {
  width: 100%;
  border-radius: 5px;
}
.message {
  font-size: 1.1em;
  margin-bottom: 1rem;
  line-height: 1.5;
}

@media print and (min-width: 6in), screen and (min-width: 800px) {
  .key-messages__area {
  }
  .message-list {
    width: 50%;
    float: left;
  }
  .message {
    margin-right: 1rem;
  }
  .image-area {
    width: 50%;
    float: right;
  }
  .key-messages__area::after {
    content: '';
    display: table;
    clear: both;
  }

  @supports (display: grid) {
    .key-messages__area {
      display: grid;
      grid-template-areas: "km-messages km-image";
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }

    .message-list,
    .image-area {
      width: 100%;
      float: none;
    }

    .message-list {
      grid-area: km-messages;
    }

    .image-area {
      grid-area: km-image;
    }

    .key-messages__area::after {
      content: none;
    }
  }
} /* print and (min-width: 6in), screen and (min-width: 800px) */

@media print {
  .card--keyMessages {
    padding: 0 0 2rem 0;
  }
  .message-list {
    padding-top: 0;
  }
  .message {
    font-size: 1em;
  }
}
</style>
