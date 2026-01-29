<script setup lang="ts">

</script>

<template>
  <p class="opacity-50 -mt-2">
    Git merges lines it can, but stops when both developers edit the same line.
  </p>

  <div class="grid grid-cols-2 gap-4 h-50">
    <div v-click="1" class="border-2 border-blue-500/30 rounded-lg p-3 bg-blue-500/5 relative">
      <div class="absolute -top-3 left-2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded uppercase">
        Dev A (Lizzie)
      </div>
      <div class="font-mono text-[10px] space-y-1">
        <div class="opacity-30">
          export const Config = {
        </div>
        <div class="opacity-30 ml-4 italic">
          // John is editing here...
        </div>
        <div class="bg-blue-500/20 text-blue-200 ml-4">
          - timeout: 1000,
        </div>
        <div class="bg-blue-500/40 text-blue-100 ml-4 font-bold">
          + timeout: 5000,
        </div>
        <div class="bg-blue-500/40 text-blue-100 ml-4 font-bold">
          + debug: true, // LIZZIE'S ADDITION
        </div>
        <div class="opacity-30">
          };
        </div>
      </div>
    </div>

    <div v-click="2" class="border-2 border-purple-500/30 rounded-lg p-3 bg-purple-500/5 relative">
      <div class="absolute -top-3 left-2 bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded uppercase">
        Dev B (John)
      </div>
      <div class="font-mono text-[10px] space-y-1">
        <div class="opacity-30">
          export const Config = {
        </div>
        <div class="bg-purple-500/40 text-purple-100 ml-4 font-bold">
          + theme: 'dark', // JOHN'S ADDITION
        </div>
        <div class="bg-purple-500/20 text-purple-200 ml-4">
          - timeout: 1000,
        </div>
        <div class="bg-purple-500/40 text-purple-100 ml-4 font-bold">
          + timeout: 250,
        </div>
        <div class="opacity-30 ml-4 italic">
          // Lizzie is editing here...
        </div>
        <div class="opacity-30">
          };
        </div>
      </div>
    </div>
  </div>

  <div v-click="3" class="mt-4 border-2 border-red-500 rounded-xl p-4 bg-red-900/10">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2 text-red-500 font-bold">
        <carbon-warning-hex-filled /> 1 Conflict, 2 Auto-Merges
      </div>
      <div class="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
        Git resolved lines 2 & 5
      </div>
    </div>

    <div class="font-mono text-[10px] bg-black/50 p-3 rounded border border-red-500/50">
      <div class="text-purple-300 font-bold">
        theme: 'dark', <span class="text-gray-500 ml-2 italic">// Auto-merged</span>
      </div>
      <div class="text-gray-500 font-bold">
        &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Lizzie)
      </div>
      <div class="text-blue-300 font-bold">
        timeout: 5000,
      </div>
      <div class="text-gray-500 font-bold">
        =======
      </div>
      <div class="text-purple-300 font-bold">
        timeout: 250,
      </div>
      <div class="text-gray-500 font-bold">
        &gt;&gt;&gt;&gt;&gt;&gt;&gt; john-feature
      </div>
      <div class="text-blue-300 font-bold">
        debug: true, <span class="text-gray-500 ml-4 italic">// Auto-merged</span>
      </div>
    </div>
  </div>
</template>
