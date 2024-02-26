<script>
import StudentAdd from '@/components/Students/StudentAdd.vue';


export default{
  components:{
StudentAdd
  },
  methods:{
    ASsa(){
      alert(this.name)
    }
  }
}

</script>

<template>
  <div class="container">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
.container{
  color: white;
}
</style>
