<template>
     <form action="" class="mt-5 container" @submit.prevent>
          <div class="mb-3">
               <label for="" class="mb-2">Id</label>
               <input type="number" class="form-control" :value="id" @input="id = $event.target.value">
          </div>
          <div class="mb-3">
               <label for="" class="mb-2">Name</label>
               <input type="text" class="form-control" :value="name" @input="name = $event.target.value">
          </div>
          <div class="mb-3">
               <label for="" class="mb-2">UserName</label>
               <input type="text" class="form-control" :value="username" @input="username = $event.target.value">
          </div>
          <div class="mb-3">
               <label for="" class="mb-2">Phone</label>
               <input type="text" class="form-control" :value="phone" @input="phone = $event.target.value">
          </div>
          <button class="button" @click="addProduct">Add</button>
     </form>
</template>
<script>
export default {
     emits:['add-student'],
     data() {
          return {
               id: '',
               name: '',
               username: '',
               phone: '',
               like: false,
               shop: false,
          }
     },
     methods: {
          addProduct(){
               this.$emit('add-student',this.name,this.id,this.username,this.phone)
               this.id='',
               this.name='',
               this.phone=''
               this.username=''
          }
     }
}
</script>


<style scoped>
button {
     float: right;
     background-color: rgb(2, 8, 23);
     color: white;
     border-radius: 4px;
     border-color: rgb(5, 98, 237);
     border-width: 0.1px;
}

.container {
     color: white;
}

.container input {
     background-color:rgb(2, 8, 23);
     color: white;
}
</style>