<template>
  <div class="month-calculator">
    <md-card>
      <md-card-content>
        <h2><span>Months Remaining:</span> {{monthsRemaining}}</h2>
        <h3><span>2 Years Left On:</span> {{twoYearsLeftText}}<br> {{twoYearsLeftDate}}</h3>
        <md-datepicker v-model="startDate" :md-open-on-focus="openOnFocus" :md-override-native="overrideNative">
          <label>Today's Date</label>
        </md-datepicker>

        <md-datepicker v-model="endDate" :md-open-on-focus="openOnFocus" :md-override-native="overrideNative">
          <label>End Date</label>
        </md-datepicker>

        <md-button class="md-primary" v-on:click="findMonthsRemaining()">Calculate Months Remaining</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'MonthCalculator',
  data () {
    return {
      startDate: new Date(),
      endDate: null,
      monthsRemaining: null,
      twoYearsLeftText: null,
      twoYearsLeftDate: null,
      openOnFocus: false,
      overrideNative: false
    }
  },
  methods: {
    findMonthsRemaining () {
      let start = this.moment(this.startDate)
      let end = this.moment(this.endDate)

      this.monthsRemaining = Math.round(end.diff(start, 'months', true))
      this.twoYearsLeftText = end.subtract(2, 'years').format('LL')
      this.twoYearsLeftDate = '(' + end.format('L') + ')'
    }
  }
}
</script>

<style scoped>
  .month-calculator {
    margin: 24px;
  }

  span {
    font-weight: 200;
  }
</style>
