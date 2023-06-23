<script setup>
import { getDocs } from 'firebase/firestore'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import { postsCollection } from '../firebase'
import PostPreviewCard from '../components/PostPreviewCard.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const router = useRouter()
const route = useRoute()
const inputValue = ref(route.query?.q || '')
const searchTerm = ref(route.query?.q || '')

const search = () => {
  searchTerm.value = inputValue.value
  router.replace({
    query: { q: searchTerm.value }
  })
}
const filteredPosts = computed(() => {
  return allPosts.value.filter((p) => p.title.includes(searchTerm.value))
})

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
    <form @submit.prevent="search" class="p-inputgroup flex-1 mb w-25rem mb-4">
      <InputText v-model="inputValue" placeholder="Search by title..." />
      <Button type="submit" icon="pi pi-search" class="px-4"></Button>
    </form>
    <PostPreviewCard v-for="post in filteredPosts" :key="post.id" :post="post" class="mb-4" />
  </div>
</template>

<style scoped></style>
