<script setup>
import { getDocs } from 'firebase/firestore'
import { onMounted, ref } from 'vue'
import { postsCollection } from '../firebase'
import PostPreviewCard from '../components/PostPreviewCard.vue'

const allPosts = ref([])

onMounted(async () => {
  const snapshot = await getDocs(postsCollection)
  const data = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))

  allPosts.value = data
})
</script>

<template>
  <div class="flex flex-column align-items-center mt-6">
    <PostPreviewCard v-for="post in allPosts" :key="post.id" :post="post" class="mb-4" />
  </div>
</template>

<style scoped></style>
