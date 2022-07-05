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
                    <option value="">All</option>
                    <option
                      v-for="coach in coaches"
                      :key="coach.id"
                      :value="coach.name"
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
                  <select v-model="field_filter">
                    <option value="">All</option>
                    <option
                      v-for="field in fields"
                      :key="field.id"
                      :value="field.name"
                    >
                      {{ field.name }}
                    </option>
                  </select>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tr v-for="game in filteredGames" :key="game.id">
          <td>{{ splitDateTime(game.dateTime)[0] }}</td>
          <td>{{ game.coach }}</td>
          <td>{{ splitDateTime(game.dateTime)[1] }}</td>
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
      coach_filter: "",
      field_filter: "",
    };
  },
  methods: {
    splitDateTime(dt_string) {
      const dt = new Date(dt_string);
      return [dt.toLocaleDateString(), dt.toLocaleTimeString()];
    },
  },
  computed: {
    filteredGames() {
      let temp = this.$store.getters.getGameInfo;

      if (this.coach_filter != "" && this.coach_filter) {
        temp = temp.filter((item) => {
          return item.coach === this.coach_filter;
        });
      }

      if (this.field_filter != "" && this.field_filter) {
        temp = temp.filter((item) => {
          return item.field === this.field_filter;
        });
      }

      return temp;
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
