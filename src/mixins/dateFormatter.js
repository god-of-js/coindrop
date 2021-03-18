export default {
  methods: {
    returnDate(date) {
      const data = new Date(date);
      return `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
    }
  }
};
