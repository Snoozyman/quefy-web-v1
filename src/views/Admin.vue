<template>
  <div id="admin">
      <div class="columns">
        <div class="column">
            <b-button class="is-primary" @click="getData">Get data</b-button>
            <b-table bordered :data="data" :columns="columns"></b-table>
        </div>

      </div>

  </div>
</template>

<script>
import Api from '../Api'

export default {
        data() {
            return {
                data: [],
                columns: [
                    {
                        field: '_id',
                        label: 'ID',
                        width: '40',
                        numeric: true,
                        centered: true
                    },
                    {
                        field: 'ownerId',
                        label: 'Owner',
                        centered: true
                    },
                    {
                        field: 'created',
                        label: 'Date',
                        centered: true
                    }
                ]
            }
        },
        methods: {
            async getData () {
                try {
                let response = await Api.get('room')
                console.log(response.data)
                this.data = response.data
                } catch (err) {
                    this.$buefy.toast.open({ 
                        message: err.message,
                        type: 'is-danger'
                    })
                }
            }
        },
}
</script>

<style>

</style>