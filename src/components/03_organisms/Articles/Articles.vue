<template>
  <div id="articles" class="container--articles">
    <div class="article">
      <div class="article__img">
      </div>
      <div class="article__text">
        <CpText type="hero-title ogg">{{ articles[0].title }}</CpText>
        <CpText type="article">{{ articles[0].content }}</CpText>
      </div>
    </div>
    <div class="article mid">
      <div class="article__img">
      </div>
      <div class="article__text">
        <CpText type="hero-title ogg">{{ articles[1].title }}</CpText>
        <CpText type="article">{{ articles[1].content }}</CpText>
      </div>
    </div>
    <div class="article">
      <div class="article__img">
      </div>
      <div class="article__text">
        <CpText type="hero-title ogg">{{ articles[2].title }}</CpText>
        <CpText type="article">{{ articles[2].content }}</CpText>
      </div>
    </div>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";

export default {
  name: "Articles",
  components: {
    CpText
  },
  data() {
    return {
      articles: [
        {
          title: "Autonomie d’une journée",
          content:
            "Autonomie moyenne de la batterie entre chaque charge : estimée à 1 journée. Dès que la charge descend à 15%, le mode lecture de l'heure s'active automatiquement et étend la durée de vie de la batterie jusqu'à 5 jours supplémentaires."
        },
        {
          title: "Étanche jusqu'à 30 mètres",
          content:
            "Votre montre Tambour est assemblé dans des matériaux nobles et testé par nos experts afin de s’assurer de sa résistance. Partez en aventure avev l’esprit léger."
        },
        {
          title: "Paiement sans contact",
          content:
            "Votre temps est précieux, nous le savons. Votre montre est conçu afin de vous permettre d’en perdre le moins possible dans vos tâches quotidiennes. Paiement sans contact avec les services Android Pay™ et Alipay™."
        }
      ],
      text: "Louis vuitton test"
    };
  }
};
</script>

<style lang="scss">
@import "./Articles.scss";
</style>
