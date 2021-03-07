<template>
  <div class="portfolio">
    <div class="d-flex justify-end">
      <custom-button class="deposit-button ma-2">Deposit</custom-button>
      <custom-button class="withdraw-button ma-2">Withdraw</custom-button>
    </div>
    <v-row>
      <v-col
        sm="12"
        md="4"
        lg="4"
        v-for="(card, index) in cardsData"
        :key="index"
      >
        <div class="portfolio-card pa-3 text-center">
          <div v-text="card.value" />
          <p v-text="card.name" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      cardsData: [
        {
          name: "Balance",
          value: 0
        },
        {
          name: "Amount Credited",
          value: 0
        },
        {
          name: "Amount Withdrawn",
          value: 0
        },
        {
          name: "Bonus Received",
          value: 0
        },
        {
          name: "No of Referrals",
          value: 0
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.portfolio {
  min-height: 40vh;
  h3 {
    font-size: 1em;
  }
  &-card {
    background: $primary-white;
    font-size: 0.9em;
    @include box-shadow();
    div {
      height: 40px;
      font-size: 1.4em;
      font-weight: bold;
      color: $text-grey;
    }
  }
  .deposit-button {
    ::v-deep {
      width: fit-content;
    }
  }
  .withdraw-button {
    ::v-deep {
      width: fit-content;
      background: $primary-white;
      border: 1px solid $border-color;
    }
  }
  .avatar {
    text-transform: uppercase;
    background: $secondary-background;
    font-weight: bold;
  }
}
</style>
