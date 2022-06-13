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
      date: "05/14/2022",
      time: "08:00AM",
      coach: "Homer",
      field: "Forge Pond Field One",
    },
    {
      id: 2,
      date: "05/14/2022",
      time: "09:30AM",
      coach: "Marge",
      field: "Forge Pond Field One",
    },
    {
      id: 3,
      date: "05/14/2022",
      time: "08:00AM",
      coach: "Marge",
      field: "Forge Pond Field Two",
    },
    {
      id: 4,
      date: "05/14/2022",
      time: "09:30AM",
      coach: "Homer",
      field: "Forge Pond Field Two",
    },
    {
      id: 5,
      date: "05/21/2022",
      time: "08:00AM",
      coach: "Homer",
      field: "Forge Pond Field One",
    },
    {
      id: 6,
      date: "05/21/2022",
      time: "09:30AM",
      coach: "Marge",
      field: "Forge Pond Field One",
    },
    {
      id: 7,
      date: "05/21/2022",
      time: "08:00AM",
      coach: "Marge",
      field: "Forge Pond Field Two",
    },
    {
      id: 8,
      date: "05/21/2022",
      time: "09:30AM",
      coach: "Homer",
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
  state,
  getters,
  actions: {
    addGame(payload) {
      let newGame = {
        date: payload.date,
        time: payload.time,
        coach: payload.coach,
        field: payload.field,
        id: state.game_info.length + 1,
      };
      state.game_info.push(newGame);
    },
  },
  modules: {},
});
