<template>
  <div id="app">
    <div class="field">
      <label class="label">Date</label>
      <div class="control">
        <bulma_calendar
          type="date"
          v-model="date"
          :options="options"
          dialog
          range
        />
      </div>
    </div>
    <div class="field">Selected Range: {{ displayDate }}</div>
    <div class="field">{{ date }}</div>
  </div>
</template>

<script>
import bulma_calendar from "bulma-calendar/dist/components/vue/bulma_calendar.vue";

export default {
  name: "TestCalendar",
  components: { bulma_calendar },
  computed: {
    displayDate() {
      if (!this.date[0] || !this.date[1]) return "- n/a -";
      return this.date[0] + " to " + this.date[1];
    },
  },
  data() {
    return {
      date: [null, null],
      options: {
        dateFormat: "MM/dd/yyyy",
        labelFrom: "From",
        labelTo: "To",
      },
    };
  },
};
</script>
