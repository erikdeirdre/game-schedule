<template>
  <h2>Add Game</h2>
  <form @submit="submitForm" class="ui form">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Date/Time</label>
          <div class="control">
            <flat-pickr
              v-model="formFields.dateTime"
              :config="options"
              class="input"
            >
            </flat-pickr>
          </div>
          <span style="color: red">{{ fieldErrors.dateTime }}</span>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Coach</label>
          <div class="control">
            <div class="select">
              <select v-model="formFields.coach">
                <option value="">select coach ...</option>
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
          <span style="color: red">{{ fieldErrors.coach }}</span>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Field</label>
          <div class="control">
            <div class="select">
              <select v-model="formFields.field">
                <option value="">select field ...</option>
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
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  name: "AddGame",
  props: {
    msg: String,
  },
  components: { flatPickr },
  data() {
    return {
      options: {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
      },
      formFields: {
        dateTime: null,
        coach: "",
        field: "",
      },
      fieldErrors: {
        dateTime: undefined,
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
    validateForm(fields) {
      var errors = {};
      if (!fields.dateTime || !this.validateDate_dateTime(fields.dateTime))
        errors.dateTime = "Game Date and Time Required";
      if (!fields.coach) errors.coach = "Coach Required";
      if (!fields.field) errors.field = "Field Name Required";
      return errors;
    },
    validateDate_dateTime(input_dt) {
      var parts = input_dt.split(/[/\-. :]/);
      if (parts.length < 5) return false;
      return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]);
    },
    resetValues() {
      this.formFields.dateTime = "";
      this.formFields.coach = "";
      this.formFields.field = "";
      this.fieldErrors.dateTime = undefined;
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
