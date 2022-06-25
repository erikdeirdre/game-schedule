<template>
  <div id="app">
    Selected date: {{ niceDate }}
    <button ref="calendarTrigger" type="button">Change</button>
  </div>
</template>

<script>
import bulmaCalendar from "bulma-calendar/dist/js/bulma-calendar.min.js";
export default {
  name: "Test2Calendar",
  data() {
    return {
      date: new Date(),
    };
  },
  mounted() {
    const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
      startDate: this.date,
    })[0];
    calendar.on("select", (e) => (this.date = e.start || null));
  },
  computed: {
    niceDate() {
      console.log(this.date);
      if (this.date) {
        return this.date.toLocaleDateString();
      }
      return null;
    },
  },
};
</script>
