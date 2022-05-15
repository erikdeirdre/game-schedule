<template>
  <form @submit="submitForm" class="ui form">
    <div class="columns">
      <div class="column is-one-fifth">
        <div class="field">
          <label class="label">Date</label>
          <div class="control">
            <input
              class="input"
              v-model="formFields.date"
              type="text"
              placeholder="game date"
            />
          </div>
          <span style="color: red">{{ fieldErrors.date }}</span>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Coach</label>
          <div class="control">
            <div class="select">
              <select v-model="formFields.coach">
                <option value="0">select coach ...</option>
                <option
                  v-for="coach in coaches"
                  :key="coach.id"
                  :value="coach.id"
                >
                  {{ coach.name }}
                </option>
              </select>
            </div>
          </div>
          <span style="color: red">{{ fieldErrors.coach }}</span>
        </div>
      </div>
      <div class="column is-one-fifth">
        <div class="field">
          <label class="label">Time</label>
          <div class="control">
            <input
              class="input"
              v-model="formFields.time"
              type="text"
              placeholder="game time"
            />
          </div>
          <span style="color: red">{{ fieldErrors.time }}</span>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Field</label>
          <div class="control">
            <div class="select">
              <select v-model="formFields.field">
                <option value="0">select field ...</option>
                <option
                  v-for="field in fields"
                  :key="field.id"
                  :value="field.id"
                >
                  {{ field.name }}
                </option>
              </select>
            </div>
          </div>
          <span style="color: red">{{ fieldErrors.field }}</span>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Add</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddGame",
  props: {
    msg: String,
  },
  data() {
    return {
      formFields: {
        date: "",
        time: "",
        coach: "",
        field: "",
      },
      fieldErrors: {
        date: undefined,
        time: undefined,
        coach: undefined,
        field: undefined,
      },
    };
  },
  computed: {
    coaches() {
      return this.$store.getters.getCoachInfo;
    },
    fields() {
      return this.$store.getters.getFieldInfo;
    },
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();
      this.fieldErrors = this.validateForm(this.formFields);
      if (Object.keys(this.fieldErrors).length) return;
      this.$store.dispatch("addGame", this.formFields);
      this.resetValues();
    },
    validateForm(formFields) {
      const errors = {};
      if (formFields.time) {
        var time_test = this.validateTime(formFields.time);
        if (time_test !== "") {
          errors.time = this.validateTime(formFields.time);
        }
      } else {
        errors.time = "Game Time Required";
      }

      if (formFields.date) {
        if (!this.validateDate_MMDDYYYY(formFields.date)) {
          errors.date = "Invalid Game Date. Format: MM/DD/YYYY";
        }
      } else {
        errors.date = "Game Date Required";
      }
      if (!formFields.coach) errors.coach = "Coach Required";
      if (!formFields.field) errors.field = "Field Name Required";
      return errors;
    },
    validateDate_MMDDYYYY(input_date) {
      var parts = input_date.split(/[/\-.]/);

      if (parts.length < 3) return false;

      var dt = new Date(parts[2], parts[0] - 1, parts[1]);
      return dt && dt.getMonth() === parseInt(parts[0], 10) - 1;
    },
    validateTime(input_time) {
      var errorMsg = "";

      // regular expression to match required time format
      var re = /^(\d{1,2}):(\d{2})(:00)?([APap][Mm])?$/;
      var regs = input_time.match(re);
      if (regs) {
        if (regs[4]) {
          // 12-hour time format with am/pm
          if (regs[1] < 1 || regs[1] > 12) {
            errorMsg = "Invalid value for hours: " + regs[1];
          }
        } else {
          // 24-hour time format
          if (regs[1] > 23) {
            errorMsg = "Invalid value for hours: " + regs[1];
          }
        }
        if (!errorMsg && regs[2] > 59) {
          errorMsg = "Invalid value for minutes: " + regs[2];
        }
      } else {
        errorMsg = "Invalid time format: " + input_time + "Format: HH:MMAM/PM";
      }

      return errorMsg;
    },
    resetValues() {
      this.formFields.date = "";
      this.formFields.time = "";
      this.formFields.coach = "";
      this.formFields.field = "";
      this.fieldErrors.date = undefined;
      this.fieldErrors.time = undefined;
      this.fieldErrors.coach = undefined;
      this.fieldErrors.field = undefined;
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
