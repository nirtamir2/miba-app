<template>
  <v-layout row>
    <v-btn
      fab
      dark
      small
      :class="{'text-xs-right': true,  'ma-1': true, 'green': isComing}"
      @click.native="coming"
    >
      <v-icon>check</v-icon>
    </v-btn>
    <!--<v-btn-->
    <!--fab-->
    <!--dark-->
    <!--small-->
    <!--class="text-xs-center ma-1 indigo"-->
    <!--&gt;-->
    <!--<v-icon>notifications</v-icon>-->
    <!--</v-btn>-->
    <v-btn
      fab
      dark
      small
      :class="{'text-xs-left': true, 'ma-1': true, 'red': !isComing}"
      @click.native="notComing"
    >
      <v-icon>close</v-icon>
    </v-btn>
  </v-layout>
</template>
<script>
  export default{
    props: {status},
    data()
    {
      return {
        isComing: this.status
      }
    },
    methods: {
      coming(){
        this.isComing = true;
//        todo - change in DB
      }
      ,
      notComing()
      {
        this.isComing = false;
      }
    }
  }
</script>
