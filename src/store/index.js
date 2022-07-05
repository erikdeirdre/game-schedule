import { createStore } from "vuex";

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
      dateTime: "2022-05-14T12:00:00Z",
      coach: "Homer",
      field: "Forge Pond Field One",
    },
    {
      id: 2,
      dateTime: "2022-05-14T13:30:00Z",
      coach: "Marge",
      field: "Forge Pond Field One",
    },
    {
      id: 3,
      dateTime: "2022-05-14T12:00:00Z",
      coach: "Marge",
      field: "Forge Pond Field Two",
    },
    {
      id: 4,
      dateTime: "2022-05-14T13:30:00Z",
      coach: "Homer",
      field: "Forge Pond Field Two",
    },
    {
      id: 5,
      dateTime: "2022-05-21T12:00:00Z",
      coach: "Homer",
      field: "Forge Pond Field One",
    },
    {
      id: 6,
      dateTime: "2022-05-21T13:30:00Z",
      coach: "Marge",
      field: "Forge Pond Field One",
    },
    {
      id: 7,
      dateTime: "2022-05-21T12:00:00Z",
      coach: "Marge",
      field: "Forge Pond Field Two",
    },
    {
      id: 8,
      dateTime: "2022-05-21T13:30:00Z",
      coach: "Homer",
      field: "Forge Pond Field Two",
    },
  ],
};

const mutations = {
  ADD_GAME(state, payload) {
    let newGame = {
      dateTime: payload.dateTime,
      coach: payload.coach,
      field: payload.field,
      id: payload.id,
    };
    state.game_info.push(newGame);
  },
};

const actions = {
  addGame(context, payload) {
    payload.id = state.game_info.length + 1;
    context.commit("ADD_GAME", payload);
  },
};

const getters = {
  getGameInfo: (state) => state.game_info,
  getFieldInfo: (state) => state.field_info,
  getCoachInfo: (state) => state.coach_info,
  getGameCount: (state) => state.game_info.length,
};

export default createStore({
  state,
  getters,
  mutations,
  actions: actions,
  modules: {},
});
