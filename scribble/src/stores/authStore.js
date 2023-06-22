import { auth } from '../firebase'
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'
import { ref, computed } from 'vue'

export const user = ref(null)

export const login = () => signInWithPopup(auth, new GoogleAuthProvider())
export const logout = () => signOut(auth)

export const username = computed(() => {
  if (!user.value) return null

  return user.value.displayName.split(' ')[0]
})
