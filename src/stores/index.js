import { defineStore } from "pinia";

const state = {
  coach_info: [
    {
      id: 1,
      name: "Homer",
    },
    {
      id: 2,
      name: "Marge",
    },
  ],
  field_info: [
    {
      id: 1,
      name: "Forge Pond Field One",
      city: "Hanover",
      state: "MA",
    },
    {
      id: 2,
      name: "Forge Pond Field Two",
      city: "Hanover",
      state: "MA",
    },
    {
      id: 3,
      name: "Union Street - R",
      city: "Hingham",
      state: "MA",
    },
  ],
  game_info: [
    {
      id: 1,
      dateTime: "2012-04-23T18:25:43+00:00",
      coach: "Homer",
      field: "Forge Pond Field One",
    },
    {
      id: 2,
      dateTime: "2012-04-23T18:25:43+00:00",
      coach: "Marge",
      field: "Forge Pond Field One",
    },
    {
      id: 3,
      dateTime: "2012-04-23T18:25:43.000Z",
      coach: "Marge",
      field: "Forge Pond Field Two",
    },
  ],
};

const getters = {
  getGameInfo: (state) => state.game_info,
  getFieldInfo: (state) => state.field_info,
  getCoachInfo: (state) => state.coach_info,
  getGameCount: (state) => state.game_info.length,
};

export default defineStore({
  state: () => {
    return state;
  },
  getters: {
    getGameInfo() {
      return state.game_info
    },
    getFieldInfo() {
      return state.field_info
    },
    getCoachInfo() {
      return state.coach_info
    },
    getGameCount() {
      return state.game_info.length
    }
  },
  actions: {
    addGame(payload) {
      let newGame = {
        dateTime: payload.dateTime,
        coach: payload.coach,
        field: payload.field,
        id: payload.id,
      };
      state.game_info.push(newGame);
    },
  },
  modules: {},
});
