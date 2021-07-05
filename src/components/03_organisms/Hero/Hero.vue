<template>
  <div class="container--hero">
    <div class="hero--bg">
      <!-- Hero de la homepage -->
      <div class="hero--home" v-if="home === '0'">
        <div class="hero__text">
          <CpText tag="h1" type="title">{{ title }}</CpText>
          <CpText tag="p" type="main">{{ text }}</CpText>
          <CpText tag="p" type="main">{{ text2 }}</CpText>
        </div>
        <CpText tag="h2" type="ext">{{ title2 }}</CpText>
        <div
          :class="`hero__artiste n${index}`"
          v-for="(artiste, index) in artistes"
          :key="artiste.name"
        >
          <ArtisteCircle :image="`${artiste.url}`"/>
          <TripleText :text="`${artiste.score} mots`"/>
        </div>
      </div>
      <!-- Hero de la page artiste  -->
      <div v-else v-for="artiste in myJson.artiste" :key="artiste.name">
        <div class="hero--artiste" v-if="$route.params.id === artiste.to">
          <div class="hero__card">
            <div class="container--card">
              <div class="card--bg">
                <div class="container--image">
                  <img :src="require(`@/assets/images/artistes/${artiste.image}`)" alt>
                </div>
                <div class="content">
                  <CpText tag="h4" type="card-title">{{ artiste.name }}</CpText>
                  <CpText tag="p" type="card">{{ artiste.surname }}</CpText>
                  <CpText tag="p" type="card">{{ artiste.age }} ans</CpText>
                  <CpText tag="p" type="card">{{ artiste.lieux }}</CpText>
                </div>
              </div>
            </div>
          </div>

          <div class="hero__text">
            <CpText tag="h1" type="title">{{ artiste.name }}</CpText>
            <CpText tag="h2" type="title">Titres analysés : {{ artiste.titres }}</CpText>
            <CpText tag="h3" type="title">Issu de {{ artiste.albums }} albums différents</CpText>
            <CpText tag="p" type="main">{{ artiste.description }}</CpText>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import CpText from "@/components/01_atoms/CpText/CpText.vue";
import ArtisteCircle from "@/components/01_atoms/ArtisteCircle/ArtisteCircle.vue";
import TripleText from "@/components/02_molecules/TripleText/TripleText.vue";

import data_artiste from "@/assets/data/Artistes.json";

export default {
  name: "Hero",
  components: {
    CpText,
    ArtisteCircle,
    TripleText
  },
  props: {
    home: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      myJson: data_artiste,
      title: "DÉCOUVREZ LA RICHESSE DE VOS ARTISTES PRÉFÉRÉES",
      title2: "record de mots différent sur un seul morceau",
      text:
        "Lines est un projet permettant d’analyser les textes de vos artistes afin d’en sortir des données.",
      text2:
        "Vous vous êtes déjà demandé quel rappeur avait le vocabulaire le plus riche ? Celui qui avait le meilleur débit en moyenne ? Les mots les plus utilisés par les artistes ? Lines réponds à vos questions et vous permets même d’essayer par vous-mêmes avec vox textes favoris !",
      artistes: [
        {
          name: "PNL",
          url: "pnl.jpeg",
          score: "865"
        },
        {
          name: "Nekfeu",
          url: "nekfeu.png",
          score: "594"
        },
        {
          name: "Oxmo Puccino",
          url: "oxmo-puccino.jpeg",
          score: "656"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./Hero.scss";
</style>
