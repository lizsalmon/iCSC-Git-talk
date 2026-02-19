<script setup lang="ts">
const props = defineProps({
  colour: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <div :class="`bg-${props.colour} w-100% pa-2 mb-4`">
        <slot/>
    </div>
</template>