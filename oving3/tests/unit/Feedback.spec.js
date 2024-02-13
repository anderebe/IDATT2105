import { shallowMount } from "@vue/test-utils";
import FeedbackContent from "@/components/FeedbackContent.vue";
import Vuex from "vuex";

describe("FeedbackContent", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        form: {
          forename: "",
          surname: "",
          mail: "",
          comment: "",
        },
      },
      mutations: {
        addFeedback(state, feedback) {
          state.form.forename = feedback.forename;
          state.form.surname = feedback.surname;
          state.form.mail = feedback.mail;
        },
      },
      actions: {},
      modules: {}
    });

    wrapper = shallowMount(FeedbackContent, {
      store,
    });

    store.commit("addFeedback", FeedbackContent);
  });

  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("initializes with empty forename, surname, mail, and comment", () => {
    expect(wrapper.vm.forename).toBe("");
    expect(wrapper.vm.surname).toBe("");
    expect(wrapper.vm.mail).toBe("");
    expect(wrapper.vm.comment).toBe("");
  });

  it("validates forename correctly", () => {
    wrapper.vm.forename = "John";
    wrapper.vm.validateForename();
    expect(wrapper.vm.forenameError).toBe("");

    wrapper.vm.forename = "";
    wrapper.vm.validateForename();
    expect(wrapper.vm.forenameError).toBe("Forename must be at least 1 characters long");
  });

  it("validates surname correctly", () => {
    wrapper.vm.surname = "Doe";
    wrapper.vm.validateSurname();
    expect(wrapper.vm.surnameError).toBe("");

    wrapper.vm.surname = "D";
    wrapper.vm.validateSurname();
    expect(wrapper.vm.surnameError).toBe("Surname must be at least 2 characters long");
  });

  it("validates mail correctly", () => {
    wrapper.vm.mail = "john.doe@example.com";
    wrapper.vm.validateMail();
    expect(wrapper.vm.mailError).toBe("");

    wrapper.vm.mail = "john.doe";
    wrapper.vm.validateMail();
    expect(wrapper.vm.mailError).toBe("Invalid email address: : missing '@', missing letters between '@' and '.'");

    wrapper.vm.mail = "john.doe@";
    wrapper.vm.validateMail();
    expect(wrapper.vm.mailError).toBe("Invalid email address: missing letters between '@' and '.'");

    wrapper.vm.mail = "john.doe@example";
    wrapper.vm.validateMail();
    expect(wrapper.vm.mailError).toBe("Invalid email address: missing letters between '@' and '.'");
  });

  it("validates comment correctly", () => {
    wrapper.vm.comment = "This is a comment with more than 15 characters";
    wrapper.vm.validateComment();
    expect(wrapper.vm.commentError).toBe("");

    wrapper.vm.comment = "Short comment";
    wrapper.vm.validateComment();
    expect(wrapper.vm.commentError).toBe("Comment must be at least 15 characters long");
  });

  it("checks for errors correctly", () => {
    wrapper.vm.error = false;
    wrapper.vm.forename = "John";
    wrapper.vm.surname = "Doe";
    wrapper.vm.mail = "john.doe@mail.com";
    wrapper.vm.comment = "This is a comment with more than 15 characters";
    wrapper.vm.forenameError = "";
    wrapper.vm.surnameError = "";
    wrapper.vm.mailError = "";
    wrapper.vm.commentError = "";
    wrapper.vm.validateForename();
    wrapper.vm.validateSurname();
    wrapper.vm.validateMail();
    wrapper.vm.validateComment();
    wrapper.vm.checkError();
    expect(wrapper.vm.error).toBe(false);
    expect(wrapper.vm.granted).toBe(true);

    wrapper.vm.forename = "";
    wrapper.vm.forenameError = "Forename must be at least 1 characters long";
    wrapper.vm.validateForename();
    wrapper.vm.checkError();    
    expect(wrapper.vm.error).toBe(true);
    expect(wrapper.vm.granted).toBe(false);
  });

    // it("submits feedback correctly", async () => {
    //   const mockFeedback = {
    //     forename: "John",
    //     surname: "Doe",
    //     mail: "john.doe@example.com",
    //     comment: "This is a comment",
    //   };
      
    
    //   wrapper.vm.forename = mockFeedback.forename;
    //   wrapper.vm.surname = mockFeedback.surname;
    //   wrapper.vm.mail = mockFeedback.mail;
    //   wrapper.vm.comment = mockFeedback.comment;
    

    //   await wrapper.vm.feedbacksubmit();
    //   wrapper.vm.feedbacksubmit = jest.fn(() => {
    //     wrapper.vm.forename = "";
    //     wrapper.vm.surname = "";
    //     wrapper.vm.mail = "";
    //     wrapper.vm.comment = "";
    //   });

    //   expect(wrapper.vm.feedbacksubmit).toHaveBeenCalled();
      
    //   expect(wrapper.vm.forename).toBe("");
    //   expect(wrapper.vm.surname).toBe("");
    //   expect(wrapper.vm.mail).toBe("");
    //   expect(wrapper.vm.comment).toBe("");
    // });
  });
