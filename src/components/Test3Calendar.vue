<template>
  <div>
    <flat-pickr v-model="date" :config="options" class="input"></flat-pickr>
    {{ date }}
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  data() {
    return {
      date: null,
      options: {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
      },
    };
  },
  components: {
    flatPickr,
  },
};
</script>
