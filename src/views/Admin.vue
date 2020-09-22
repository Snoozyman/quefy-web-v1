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
                        field: 'invites',
                        label: 'Invites',
                        
                    },
                    {
                        field: 'users',
                        label: 'Users',
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
                let response = await Api.get('room')
                console.log(response.data)
                this.data = response.data
            }
        }
}
</script>

<style>

</style>