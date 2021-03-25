export default {
  methods: {
    returnDate(date) {
      return new Date(date).toDateString();
    },
    returnDateAndTime(date) {
      return new Date(date).toString("YYYY-MM-dd").split("GMT")[0];
    }
  }
};
