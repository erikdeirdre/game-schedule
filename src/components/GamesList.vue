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
        <ApolloQuery
          :query="
            (gql) => gql`
              query allFields {
                allFields {
                  edges {
                    node {
                      id
                      name
                      address {
                        address1
                        state
                        city
                        zipCode
                      }
                    }
                  }
                }
              }
            `
          "
          :update="(data) => data.allGames.edges"
        >
          <template v-slot="{ result: { data } }">
            <ul v-if="data.length">
              <tr v-for="game in data" :key="game.id">
                <td class="has-text-left">
                  {{ splitDateTime(node.game.dateTime)[0] }}
                </td>
                <td class="has-text-left">{{ node.game.coaches.firstName }}</td>
                <td class="has-text-left">
                  {{ splitDateTime(node.game.gameDt)[1] }}
                </td>
                <td class="has-text-left">{{ node.game.field.name }}</td>
              </tr>
            </ul>
            <div v-else class="empty">No Games match your search</div>
          </template>
        </ApolloQuery>
      </table>
    </div>
  </div>
</template>

<script>
import { GET_GAMES } from "@/graphql/queries";
//import { useQuery, useResult } from "@vue/apollo-composable";
//import CoachesQuery from "@/graphql/CoachesQuery";
//import GamesQuery from "CoachesQuery";
//import FieldsQuery from "@/graphql/FieldsQuery";

export default {
  name: "GamesList",
  props: {
    msg: String,
  },
  apollo: {
    allGames: {
      query: GET_GAMES,
      loadingKey: "loadingGames",
    },
  },
  setup() {
    //const { resultCoaches, loadingCoaches, errorCoaches, refetch: refetchCoaches } = useQuery(CoachesQuery);
    //const coaches = useResult(resultCoaches);
    //const { resultGames, loadingGames, errorGames } = useQuery(GamesQuery);
    //const games = useResult(resultGames);
    //const { resultFields, loadingFields, errorFields, refetch: refetchFields } = useQuery(FieldsQuery);
    //const fields = useResult(resultFields);
  },
  data() {
    return {
      query: GET_GAMES,
      coach_filter: "",
      field_filter: "",
      allGames: "",
      loading: "",
      errorGames: [],
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
