<template>
  <div>
    <h1>QR Scanner Page</h1>
    
    <v-card>
      <v-card-text>
        <!-- Show qr scanner -->
        <video class="qr-video"></video>

        <!-- Show scanned result -->
        <p>Result: </p>

        <!-- Start and Stop Scanner -->
        <v-btn color="green">Start Scanner</v-btn>
        <v-btn color="red">Stop Scanner</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
  middleware: 'auth',
})
</script>

<style>
.qr-video {
  width: 100%;
  max-width: 400px;
  border-radius: 12PX;
  background: #000;
}
</style>