import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    forename: "",
    surname: "",
    mail: "",
    feedbacks: [],
  },
  mutations: {
    addFeedback(state, feedback) {
      state.forename = feedback.forename;
      state.surname = feedback.surname;
      state.mail = feedback.mail;
      state.feedbacks.push(feedback);
    },
  },
  actions: {},
  modules: {},
});
