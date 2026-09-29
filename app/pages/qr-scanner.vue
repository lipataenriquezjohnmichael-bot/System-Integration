<template>
  <div class="scanner-page d-flex align-center justify-center pa-4">
    <v-card width="560" class="pa-6" rounded="xl" elevation="8">
      <v-card-title class="text-center">QR Scanner</v-card-title>

      <v-card-text class="text-center">
        <video ref="videoRef" class="qr-video mx-auto"></video>

        <p class="mt-4">Result: {{ result }}</p>

        <div class="d-flex justify-center ga-3">
          <v-btn color="primary" @click="startScanner">Start Scanner</v-btn>
          <v-btn color="error" variant="outlined" @click="stopScanner">Stop Scanner</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import QrScanner from 'qr-scanner'

definePageMeta({
  middleware: ['auth'],
})

const result = ref('')
const videoRef = ref<HTMLVideoElement | null>(null)
let scanner: QrScanner | null = null



const startScanner = async () => {
  if (!videoRef.value) return

  if (scanner) {
    await scanner.start()
    return
  }

  scanner = new QrScanner(
    videoRef.value,
    (scanResult) => {
      result.value = scanResult.data
      console.log('Scanned result:', scanResult.data)
    },
    {
      preferredCamera: 'environment',
      highlightScanRegion: true,
      highlightCodeOutline: true,
    }
  )

  await scanner.start()
}
  //Function to stop
  
  const stopScanner = () => {
    scanner?.destroy ()
    scanner = null
  }

onBeforeUnmount(() => {
  stopScanner()
})
</script>

<style>
.scanner-page {
  min-height: calc(100vh - 64px);
}

.qr-video {
  width: 100%;
  max-width: 520px;
  height: 360px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #000;
  object-fit: cover;
}

</style>