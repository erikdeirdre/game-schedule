<template>
  <h2>Add Game</h2>
  <form @submit="submitForm" class="ui form">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Date/Time</label>
          <div class="control">
            <bulma_calendar v-model="formFields.dateTime" />
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
import bulma_calendar from "bulma-calendar/dist/components/vue/bulma_calendar.vue";
export default {
  name: "AddGame",
  props: {
    msg: String,
  },
  components: { bulma_calendar },
  data() {
    return {
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
    displayDate() {
      console.log(this.formFields.dateTime);
      if (!this.formFields.dateTime[0] || !this.formFields.dateTime[1])
        return "- n/a -";
      return this.formFields.dateTime[0] + " to " + this.formFields.dateTime[1];
    },
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();
      console.log(evt);
      console.log(this.formFields.dateTime);
      this.fieldErrors = this.validateForm(this.formFields);
      if (Object.keys(this.fieldErrors).length) return;
      this.$store.dispatch("addGame", this.formFields);
      this.resetValues();
    },
    validateForm(fields) {
      var errors = {};
      console.log(fields.coach);
      console.log(fields.dateTime);
      console.log(this.displayDate());
      console.log("here");
      if (!fields.dateTime) errors.dateTime = "Game Date and Time Required";
      if (!fields.coach) errors.coach = "Coach Required";
      if (!fields.field) errors.field = "Field Name Required";
      return errors;
    },
    validateDate_dateTime(input_date) {
      var parts = input_date.split(/[/\-.]/);

      if (parts.length < 3) return false;

      var dt = new Date(parts[2], parts[0] - 1, parts[1]);
      return dt && dt.getMonth() === parseInt(parts[0], 10) - 1;
    },
    resetValues() {
      this.formFields.date = "";
      this.formFields.coach = "";
      this.formFields.field = "";
      this.fieldErrors.date = undefined;
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
