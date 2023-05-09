<script setup lang="ts">
import TableList from '@/pages/Admin/Role/Components/TableList.vue';
import Form from '@/pages/Admin/Role/Components/Form.vue';
import { useCrudRoleStore } from '@/stores/Admin/useCrudRoleStore';

const storeRole = useCrudRoleStore()

const { typeAction } = storeToRefs(storeRole)

onUnmounted(() => {
  storeRole.$reset();
})

</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard v-show="typeAction !== 'form'" title="Listado Roles">
          <VCardText>
            <TableList :key="storeRole.keyList" />
          </VCardText>
        </VCard>
        <VCard v-if="typeAction === 'form'" title="Formulario Rol">
          <VCardText>
            <Form />
          </VCardText>
          <VCardText />
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<route lang="yaml">
meta:
  action: read
  subject: Auth
  requiresAuth: true
  redirectIfLoggedIn: true
  requiredPermission: admin.role.index
</route>
