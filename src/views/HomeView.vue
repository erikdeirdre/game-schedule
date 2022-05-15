<template>
  <div class="container is-max-desktop is-max-widescreen">
    <ListGames></ListGames>
    <AddGame></AddGame>
  </div>
</template>

<script>
// @ is an alias to /src
import AddGame from "@/components/AddGame.vue";
import ListGames from "@/components/ListGames.vue";

export default {
  name: "HomeView",
  components: {
    AddGame,
    ListGames,
  },
};
</script>
