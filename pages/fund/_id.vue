<template>
  <div>{{ fundInfo.title }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FundsId',
  layout: 'base',
  computed: {
    ...mapState('fund', ['fundInfo'])
  },
  async fetch({ store, params }) {
    await store.dispatch('fund/getById', { id: params.id })
  }
}
</script>
