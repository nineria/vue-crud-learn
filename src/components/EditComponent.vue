<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Update content -->
      <h1>Update</h1>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            class="form-control"
            v-model="student.phone"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary w-100 my-4">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      student: {},
    };
  },
  created() {
    let API_URL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;
    axios.get(API_URL).then((res) => {
      this.student = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let API_URL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;
      axios
        .put(API_URL, this.student)
        .then((res) => {
          console.log(res);
          this.$router.push('/view');
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
