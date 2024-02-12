import { shallowMount } from "@vue/test-utils";
import FeedbackContent from "@/components/FeedbackContent.vue";


describe("FeedbackContent", () => {
  let wrapper;
  let state;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
  

  beforeEach(() => {
    state = {
      forename: "",
      surname: "",
      mail: "",
      comment: "",
      forenameError: "",
      surnameError: "",
      mailError: "",
      commentError: "",
      feedbacks: []
    };

    wrapper = shallowMount(FeedbackContent, {
      data() {
        return state;
      }
    });
  });

  it("renders the component correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("validates forename correctly", () => {
    wrapper.vm.forename = "";
    wrapper.vm.validateForename();
    expect(wrapper.vm.forenameError).toBe(
      "Forename must be at least 1 characters long"
    );

    wrapper.vm.forename = "John";
    wrapper.vm.validateForename();
    expect(wrapper.vm.forenameError).toBe("");
  });

  it("validates surname correctly", () => {
    wrapper.vm.surname = "";
    wrapper.vm.validateSurname();
    expect(wrapper.vm.surnameError).toBe(
      "Surname must be at least 2 characters long"
    );

    wrapper.vm.surname = "Doe";
    wrapper.vm.validateSurname();
    expect(wrapper.vm.surnameError).toBe("");
  });

  it("validates mail correctly", () => {
    wrapper.vm.mail = "";
    wrapper.vm.validateMail();
    expect(wrapper.vm.mailError).toBe(
      "Invalid email address: : missing '@', missing '.', missing letters"
    );

    wrapper.vm.mail = "john.doe@example";
    wrapper.vm.validateMail();
    expect(wrapper.vm.mailError).toBe(
      "Invalid email address: missing letters between '@' and '.'"
    );

    wrapper.vm.mail = "john.doe@example.com";
    wrapper.vm.validateMail();
    expect(wrapper.vm.mailError).toBe("");
  });

  it("validates comment correctly", () => {
    wrapper.vm.comment = "";
    wrapper.vm.validateComment();
    expect(wrapper.vm.commentError).toBe(
      "Comment must be at least 15 characters long"
    );

    wrapper.vm.comment = "This is a comment.";
    wrapper.vm.validateComment();
    expect(wrapper.vm.commentError).toBe("");
  });

  it("submits feedback correctly", () => {
    wrapper.vm.forename = "John";
    wrapper.vm.surname = "Doe";
    wrapper.vm.mail = "john.doe@example.com";
    wrapper.vm.comment = "This is a comment.";
  
    // Mock the $store object
    wrapper.vm.$store = {
      commit: jest.fn(),
    };
  
    wrapper.vm.feedbacksubmit();
  
    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith(
      "addFeedback",
      expect.objectContaining({
        forename: "John",
        surname: "Doe",
        mail: "john.doe@example.com",
        comment: "This is a comment.",
      })
    );
  
    expect(wrapper.vm.forename).toBe("");
    expect(wrapper.vm.surname).toBe("");
    expect(wrapper.vm.mail).toBe("");
    expect(wrapper.vm.comment).toBe("");
  });
});
