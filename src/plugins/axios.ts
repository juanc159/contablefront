import axios from 'axios'
import { useConfig } from '@/composables/useConfig'
const configUse = ref(useConfig())
// import { AuthenticationStore } from '@/stores/Authentication'

// const Authentication = AuthenticationStore()
// const Auth = storeToRefs(Authentication)
const baseURL = configUse.value.baseURL+'api'

const config = ref<object>({
  baseURL,
})

// if (Auth.token) {
//   config.value = {
//     baseURL,
//     headers: {
//       Authorization: `Bearer ${Auth.token}`,
//     },
//   }
// }

const axiosIns = axios.create(config.value)

export default axiosIns
