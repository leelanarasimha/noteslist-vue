<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'notes' }">Notes</RouterLink> |
      <RouterLink :to="{ name: 'stats' }">Stats</RouterLink>
    </div>
    <RouterView />
  </div>
</template>
