var app = new Vue({
  el: "#app",
  data() {
    return {
      data: [],
      currency_one: "USD",
      currency_two: "ILS",
      rate: "",
      amountOne: 1,
      amountTwo: 0,
    };
  },
  methods: {
    calculateResults() {
      fetch(
        `https://v6.exchangerate-api.com/v6/f7e27d4b4cabe7ad2bd02784/latest/${
          this.currency_one
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.rate = data.conversion_rates[this.currency_two];
          this.amountTwo = this.amountOne * this.rate.toFixed(2);
        });
    },
    
    switchValues() {
      const temp = this.currency_one;
      this.currency_one = this.currency_two;
      this.currency_two = temp;
      this.calculateResults();
    },
  },
  mounted() {
    this.calculateResults();
  },
});
