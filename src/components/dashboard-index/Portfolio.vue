<template>
  <div class="portfolio">
    <div class="d-flex justify-end" v-if="showActions">
      <router-link to="/payment/plans">
        <custom-button class="deposit-button ma-2"
          >Increase Hash Rate</custom-button
        ></router-link
      >
      <router-link to="/payment/withdraw">
        <custom-button class="withdraw-button ma-2"
          >Withdraw</custom-button
        ></router-link
      >
    </div>
    <v-row class="">
      <v-col sm="12" md="4" cols="12">
        <portfolio-card :value="userData.balance" :name="'Balance'" />
      </v-col>
      <v-col sm="12" md="4" cols="12">
        <portfolio-card :value="userData.hashRate" :name="'Hash Rate'" />
      </v-col>
      <v-col sm="12" md="4" cols="12">
        <portfolio-card
          :value="userData.noOfRefferals"
          :name="'No of Referrals'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PortfolioCard from "./PortfolioCard";
export default {
  props: {
    showActions: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      cardsData: [
        {
          name: "Balance",
          value: 0
        },
        {
          name: "Hash Rate",
          value: 0
        },
        {
          name: "No of Referrals",
          value: 0
        }
      ]
    };
  },
  computed: {
    userData() {
      return this.$store.state.user.user;
    }
  },
  components: {
    PortfolioCard
  },
  mounted() {
    this.$nextTick(function() {
      this.$store.dispatch("user/getUserProfile");
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
.portfolio {
  // min-height: 40vh;
  h3 {
    font-size: 1em;
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
