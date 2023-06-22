<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputText'
import Chips from 'primevue/Chips'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { Timestamp, addDoc } from 'firebase/firestore'
import { postsCollection } from '../firebase'
import { useRouter } from 'vue-router'

import { user, username } from '../stores/authStore'

const form = ref({
  title: '',
  subtitle: '',
  content: '',
  imageUrl: 'https://picsum.photos/600/400', // TODO
  tags: [],
  publishDate: null,
  readTime: 0,
  authorId: user.value.uid,
  authorAvatar: user.value.photoURL,
  authorName: username.value
})

const router = useRouter()

const onSubmit = async () => {
  form.value.publishDate = Timestamp.now()

  const totalWords = form.value.content.split(' ').length
  const readTime = Math.floor(totalWords / 250)
  form.value.readTime = readTime

  const response = await addDoc(postsCollection, form.value)

  router.push(`/post/${response.id}`)
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="flex flex-column mt-6">
        <InputText v-model="form.title" placeholder="Title" class="mb-2" />
        <InputText v-model="form.subtitle" placeholder="Subtitle" class="mb-2" />
        <Chips v-model="form.tags" placeholder="Tags" class="mb-2" />
        <Textarea v-model="form.content" auto-resize rows="30" class="mb-2" />
      </div>

      <Button type="submit">Publish</Button>
    </form>
  </div>
</template>

<style scoped></style>
