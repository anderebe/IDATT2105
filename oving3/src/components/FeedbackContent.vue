<template>
  <h1>Oving 3: Feedbacks</h1>
  <div class="container">
    <div class="items">
      <div class="input">
        <a>Forename : </a>
        <a
          ><input
            type="text"
            class="input-field"
            id="forename"
            v-model="forename"
            @input="validateForename"
        /></a>
      </div>
      <div class="error" id="forename-error">{{ forenameError }}</div>

      <div class="input">
        <a>Surname : </a>
        <a
          ><input
            type="text"
            class="input-field"
            id="surname"
            v-model="surname"
            @input="validateSurname"
        /></a>
      </div>
      <div class="error" id="surname-error">{{ surnameError }}</div>

      <div class="input">
        <a>Mail : </a>
        <a
          ><input
            type="text"
            class="input-field"
            id="mail"
            v-model="mail"
            @input="validateMail"
        /></a>
      </div>
      <div class="error" id="mail-error">{{ mailError }}</div>

      <a> Comment </a>
      <a>
        <textarea
          type="text"
          class="input-field"
          id="comment"
          v-model="comment"
          @input="validateComment"
        ></textarea>
      </a>
      <div class="error" id="comment-error">{{ commentError }}</div>

      <a
        class="submit error"
        :class="{ invisible: !granted }"
        @click="feedbacksubmit()"
        >Submit</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackContent",
  data() {
    return {
      forename: this.$store.state.forename || "",
      surname: this.$store.state.surname || "",
      mail: this.$store.state.mail || "",
      comment: "",
      forenameError: " ",
      surnameError: " ",
      mailError: " ",
      commentError: " ",
      error: true,
      granted: false,
    };
  },
  methods: {
    handleSubmit() {
      let submit = document.querySelector(".submit");
      setTimeout(() => {
        submit.textContent = "Success!";
        submit.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
        submit.style.opacity = "0.5";
        setTimeout(() => {
          submit.style.backgroundColor = "transparent";
          submit.textContent = "Submit";
          this.granted = false;
        }, 2000);
      }, 100);
    },
    feedbacksubmit() {
      this.checkError();
      let feedback = {
        forename: this.forename,
        surname: this.surname,
        mail: this.mail,
        comment: this.comment,
      };
      this.$store.commit("addFeedback", feedback);
      this.handleSubmit();
      // Send feedback to the server
      fetch("http://localhost:3000/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.forename = "";
      this.surname = "";
      this.mail = "";
      this.comment = "";
    },
    validateForename() {
      if (this.forename.length < 1) {
        this.forenameError = "Forename must be at least 1 characters long";
        this.error = true;
      } else {
        this.forenameError = "";
      }
      this.checkError();
    },
    validateSurname() {
      if (this.surname.length < 2) {
        this.surnameError = "Surname must be at least 2 characters long";
        this.error = true;
      } else {
        this.surnameError = "";
      }
      this.checkError();
    },
    validateMail() {
      if (
        !this.mail.includes("@") ||
        !this.mail.includes(".") ||
        this.mail.indexOf("@") > this.mail.lastIndexOf(".")
      ) {
        this.mailError =
          "Invalid email address: " +
          (this.mail.includes("@") ? "" : ": missing '@', ") +
          (this.mail.includes(".") ? "" : "missing '.', ") +
          (/[a-zA-Z]/.test(this.mail) ? "" : "missing letters");
        if (this.mail.indexOf("@") !== this.mail.lastIndexOf(".")) {
          this.mailError += "missing letters between '@' and '.'";
        }
        this.error = true;
      } else {
        this.mailError = "";
      }
      this.checkError();
    },
    validateComment() {
      if (this.comment.length < 15) {
        this.commentError = "Comment must be at least 15 characters long";
        this.error = true;
      } else {
        this.commentError = "";
      }
      this.validateForename();
      this.validateSurname();
      this.validateMail();
      this.checkError();
    },
    checkError() {
      if (
        this.error ||
        this.forenameError ||
        this.surnameError ||
        this.mailError ||
        this.commentError
      ) {
        this.error = false;
        this.granted = false;
        return;
      }
      this.granted = true;
    },
    invisible() {
      this.submit.classList.add("invisible");
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 15vh;
  color: white;
  font-weight: 700;
  text-align: center;
  cursor: default;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.items {
  transition: transform 0.3s ease-in-out; /* Add transition property */
  transform: translateX(0);

  position: absolute;
  width: 400px;
  color: #fff;
  height: 70vh;
  align-items: center;
  cursor: default;
  display: flex; /* Added this line */
  flex-direction: column; /* Added this line */
  padding-top: 20px;
  gap: 20px;
}

.items a {
  text-decoration: none;
  color: white;
  font-size: 24px;
  transition: 0.3s;
  width: 100%;
}

.items a input[type="text"] {
  border-radius: 10px;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffff;
  text-align: center;
  width: 100%;
  height: 30px;
  font-size: 18px; /* Added this line */
}

.items a textarea {
  border-radius: 10px;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffff;
  width: 100%;
  height: 150px;
  font-size: 18px; /* Added this line */
  resize: none; /* Added this line */
}

.items a input:focus {
  outline: none;
}

.items a textarea:focus {
  outline: none;
}

.input {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.comment-padding {
  margin: 10px;
}
.comment {
  margin-top: 20px;
}

.submit {
  text-decoration: none;
  display: inline-block;
  color: white;
  font-size: 24;
  border: 2px solid white;
  padding: 14px 0px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  margin-top: 30px;
}

.submit:hover {
  background-color: white;
  color: black;
}

.error {
  color: #ffffff;
  font-size: 18px;
}

.invisible {
  display: none;
}
</style>
