
<template>
   
  <div class="row container m-auto">
     <div class="filter">
      <div class="filtericons">
      <!-- <fa :icon="['fa', 'cloud-arrow-up']" class="faicon" @click="FilterStudents(shop)"></fa> -->
      <fa :icon="['fas', 'cart-plus']" class="faicon" @click="show=true" ></fa>
      </div>
    </div>
      <div class="add" >
      <StudentAdd
      @add-student="addstudent" v-if="show"
      ></StudentAdd>
     </div>
    <div class="col-sm-6 col-lg-4" v-for="(student) in Users" :key="student.id">
      <div class="card user__item" >
        <div class="filter">
          <!-- <fa  @click="onshop(student.id)" :class="[{ shop: student.shop }]"  :icon="['fas', 'cart-shopping']"></fa> -->
          <fa  @click="onLike(student.id)" :class="[{ like: student.like }]" class="filtericons" :icon="['fas', 'star']" ></fa>
        </div>
        <div class="card-body">
          <img class="user__img" alt="User photo" src="./icons/home_2549900.png" width="100" height="100" />
          <div class="user__name">
            <fa :icon="['far', 'user']"></fa>
            <span> - {{ student.name }} {{ student.id }} {{ student.username }}</span>
          </div>
          <div class="user__year">
            <fa :icon="['far', 'calendar']"></fa>
            <span> - {{ student.phone }}</span>
          </div>
          <div class="buttons">
          <button id="delete__btn" class="user__delete--btn" @click="deleteItem(student.id)">Delete
        </button>
        <!-- <button id="delete__btn" class="user__delete--btn" @click="deleteItem(student.id)">Buy now
        </button> -->
        </div>
        </div>
      </div>
    </div>
    
  </div>

  <div class="overlay hidden" id="overlay">
    <div class="lds-ring">
      <div>
        <fa class="fa-beat fa-solid fa-2xl" style="color: #74C0FC;" :icon="['fas', 'wifi']"></fa>
      </div>
    </div>
  </div>
</template>
   
   
<script>
import axios from 'axios'
import StudentAdd from './StudentAdd.vue'
export default {
    data() {
        return {
            Users: [],
            show: false
        };
    },
    mounted() {
        this.fetchMovie();
    },
    methods: {
        async fetchMovie() {
            try {
                overlay.classList.remove("hidden");
                overlay.classList.add("overlay");
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=6");
                const newArray = data.map(item => ({
                    id: item.id,
                    like: false,
                    name: item.name,
                    username: item.username,
                    phone: item.phone,
                    shop: false,
                }));
                overlay.classList.add("hidden");
                overlay.classList.remove("overlay");
                this.Users = newArray;
            }
            catch (error) {
                alert(error.message);
            }
        },
        deleteItem(id) {
            this.Users = this.Users.filter((user) => user.id != id);
        },
        onLike(id) {
            this.Users = this.Users.map((user) => {
                if (user.id == id) {
                    user.like = !user.like;
                }
                return user;
            });
        },
        onshop(id) {
            this.Users = this.Users.map((user) => {
                if (user.id == id) {
                    user.shop = !user.shop;
                }
                return user;
            });
        },
        addstudent(name,username,id,phone,show){
          const newstudentcontact = {
            id:id,
            name:name,
            username:username,
            phone:phone,
          };
          this.Users.push(newstudentcontact)
          this.show=false

        },
    },
    components: { StudentAdd }
}

</script>



<style scoped>
.card {
  background-color: rgb(30, 41, 59);
  color: white;
  padding: 0.1rem 1rem;
}
.filter{
  padding: 0.5rem;
}
.faicon{
  margin-left:2rem;
  font-size: xx-large;
  cursor: pointer;
}
.filtericons{
  float: right;
  color: white;
}

.buttons button {
  background-color: rgb(2, 8, 23);
  color: white;
  border-radius: 4px;
  border-color: rgb(5, 98, 237);
  border-width: 0.1px;
  margin: 1rem;
  margin-bottom: 0;
  width: 80px;
}


.row {
  padding-top: 1.5rem;
}

.like{
 color: rgba(248, 203, 5, 0.982);
}
.shop{
  color:rgba(248, 203, 5, 0.982);
}
</style>
   