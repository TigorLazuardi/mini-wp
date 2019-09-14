<template>
  <div>
    <frontPage></frontPage>
  </div>
</template>

<script>
import frontPage from "./components/frontPage";

export default {
  components: {
    frontPage
  },
  data() {
    return {
      isLogin: false,
      isLoginForm: false,
      isRegisterForm: false
    };
  },
  methods: {
    loginCondition(cond) {
      this.isLogin = cond;
    },
    loginToggle(cond) {
      this.isLoginForm = cond;
    },
    registerToggle(cond) {
      this.isRegisterForm = cond;
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>