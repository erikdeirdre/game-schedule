<template>
  <div class="level">
    <div class="level-item has-text-centered">
      <table class="table">
        <thead>
          <tr>
            <th class="has-text-centered">Date</th>
            <th class="has-text-centered">
              Coach
              <div class="control has-text-right">
                <div class="select">
                  <select v-model="coach_filter">
                    <option value="0">filter coach ...</option>
                    <option
                      v-for="coach in coaches"
                      :key="coach.id"
                      :value="coach.id"
                    >
                      {{ coach.name }}
                    </option>
                  </select>
                </div>
              </div>
            </th>
            <th class="has-text-centered">Time</th>
            <th class="has-text-centered">
              Field
              <div class="control">
                <div class="select">
                  <select v-model="time_filter">
                    <option value="0">filter field ...</option>
                    <option
                      v-for="field in fields"
                      :key="field.id"
                      :value="field.id"
                    >
                      {{ field.name }}
                    </option>
                  </select>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tr v-for="game in games" :key="game.id">
          <td>{{ game.date }}</td>
          <td>{{ game.coach }}</td>
          <td>{{ game.time }}</td>
          <td>{{ game.field }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListGames",
  props: {
    msg: String,
  },
  data() {
    return {
      filtered_coach: "0",
      filtered_time: "0",
    };
  },
  computed: {
    games() {
      return this.$store.getters.getGameInfo;
    },
    coaches() {
      return this.$store.getters.getCoachInfo;
    },
    fields() {
      return this.$store.getters.getFieldInfo;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
