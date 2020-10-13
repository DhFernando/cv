<template>
  <div >
      <router-link to="/" exact> Home </router-link>
   
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: [],
  data() {
      return {
          msg: null
      }
  },

  created:function(){
      this.msg = "hey"
    },

  methods:{
      
  },

  computed: {
      
  },


}
</script>


