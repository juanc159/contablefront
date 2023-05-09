<script setup lang="ts">
import TableList from '@/pages/Admin/User/Components/TableList.vue';
import Form from '@/pages/Admin/User/Components/Form.vue';
import { useCrudUserStore } from '@/stores/Admin/useCrudUserStore';

const storeUser = useCrudUserStore()
storeUser.fetchDataForm()
const { typeAction } = storeToRefs(storeUser)

onUnmounted(() => {
  storeUser.$reset();
})
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard v-show="typeAction !== 'form'" title="Listado Usuario">
          <VCardText>
          <TableList :key="storeUser.keyList"/>
          </VCardText>
        </VCard>
        <VCard v-show="typeAction === 'form'" title="Formulario Usuario">          
          <VCardText>
            <Form />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<route lang="yaml">
menu:
  action: read
  subject: Auth
  redirectIfLoggedIn: true
  requiresAuth: true 
requiredPermission: admin.permission.index
</route>

