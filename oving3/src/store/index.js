import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    forename: "",
    surname: "",
    mail: "",
  },
  mutations: {
    addFeedback(state, feedback) {
      state.forename = feedback.forename;
      state.surname = feedback.surname;
      state.mail = feedback.mail;
    },
  },
  actions: {},
  modules: {}
});
