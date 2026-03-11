<script setup lang="ts">

</script>

<template>

  <div class="grid grid-cols-2 gap-6 text-left">
    <div v-click class="p-4 border border-main rounded-lg bg-main/5">
      <div class="flex items-center gap-3 mb-2">
        <carbon-concept class="text-blue-400 text-2xl" />
        <h3 class="p-0 m-0">
          The "Why"
        </h3>
      </div>
      <p class="text-sm opacity-80">
        Understand how Git actually works, beyond just memorizing commands.
      </p>
    </div>

    <div v-click class="p-4 border border-main rounded-lg bg-main/5">
      <div class="flex items-center gap-3 mb-2">
        <carbon-Construction class="text-yellow-400 text-2xl" />
        <h3 class="p-0 m-0">
          Conflict Mastery
        </h3>
      </div>
      <p class="text-sm opacity-80">
        Stop fearing merge conflicts. Learn how to resolve them and some tips to prevent them entirely.
      </p>
    </div>

    <div v-click class="p-4 border border-main rounded-lg bg-main/5">
      <div class="flex items-center gap-3 mb-2">
        <carbon-tool-box class="text-green-400 text-2xl" />
        <h3 class="p-0 m-0">
          The Toolbox
        </h3>
      </div>
      <p class="text-sm opacity-80">
        Build a toolbox of commands for every weird scenario you may encounter.
      </p>
    </div>

    <div v-click class="p-4 border border-main rounded-lg bg-main/5">
      <div class="flex items-center gap-3 mb-2">
        <carbon-edit-off class="text-purple-400 text-2xl" />
        <h3 class="p-0 m-0">
          History Rewriting
        </h3>
      </div>
      <p class="text-sm opacity-80">
        Master rebasing and interactive tools to make your git history tell a clean, professional story.
      </p>
    </div>
  </div>
</template>
