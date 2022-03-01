<template>
  <div class="component"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'sweetalert2/dist/sweetalert2.min.css';

export default Vue.extend({
    name:'contactSite',
  mounted() {
    this.showAlert();
  },
  methods: {
    showAlert() {
      this.$swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Solicitação enviada com sucesso!',
        text: 'Em breve entraremos em contato!',
        showConfirmButton: true,
        timer: 4000,
        
      }).then(() => {
        // Redirect to another page
        this.$router.push('/');
      });
    },
  },
});
</script>