<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }"><a @click.prevent="register = false">Login</a></li>
        <li :class="{ 'is-active': register }"><a @click.prevent="register = true">Register</a></li>
      </ul>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="card auth-form">
        <div class="card-content">
          <div class="title has-text-centered">{{ formTitle }}</div>
          <div class="content">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Email Address" v-model="credentials.email" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input"
                  type="Password"
                  placeholder="Enter Password"
                  v-model="credentials.password"
                />
              </div>
            </div>

            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-danger">{{ formTitle }}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { computed, reactive, ref } from 'vue';
  import { useAuthStore } from '../stores/AuthStore';

  const register = ref(false);

  const authStore = useAuthStore();

  const credentials = reactive({
    email: '',
    password: ''
  });

  const formTitle = computed(() => {
    return register.value ? 'Register' : 'Login';
  });

  const onSubmit = () => {
    if (!credentials.email || !credentials.password) {
      alert('Please enter email and password');
      return;
    }

    if (register.value) {
      authStore.registerUser(credentials);
    } else {
      authStore.loginUser(credentials);
    }
  };
</script>

<style scoped>
  .auth-form {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
