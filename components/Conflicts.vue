<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-2 gap-4 h-40 ma-2">
    <div v-click="1" class="border-2 border-blue-500/30 rounded-lg p-3 bg-blue-500/5 relative">
      <div class="absolute -top-3 left-2 bg-blue-500 text-white text-sm px-2 py-0.5 rounded uppercase">
        Schrodinger
      </div>
      <div class="font-mono text-sm space-y-1">
        <div class="opacity-30">
          export const QuantumConfig = {
        </div>
        <div class="opacity-30 ml-4 italic">
          // Bohr is editing here...
        </div>
        <div class="bg-blue-500/20 text-blue-200 ml-4">
          - state: "superposition",
        </div>
        <div class="bg-blue-500/40 text-blue-100 ml-4 font-bold">
          + state: "alive",
        </div>
        <div class="bg-blue-500/40 text-blue-100 ml-4 font-bold">
          + experimentId: "cat-01", // Schrodinger's addition
        </div>
        <div class="opacity-30">
          };
        </div>
      </div>
    </div>

    <div v-click="2" class="border-2 border-purple-500/30 rounded-lg p-3 bg-purple-500/5 relative">
      <div class="absolute -top-3 left-2 bg-purple-500 text-white text-sm px-2 py-0.5 rounded uppercase">
        Bohr
      </div>
      <div class="font-mono text-sm space-y-1">
        <div class="opacity-30">
          export const QuantumConfig = {
        </div>
        <div class="bg-purple-500/40 text-purple-100 ml-4 font-bold">
          + observed: true, // Bohr's addition
        </div>
        <div class="bg-purple-500/20 text-purple-200 ml-4">
          - state: "superposition",
        </div>
        <div class="bg-purple-500/40 text-purple-100 ml-4 font-bold">
          + state: "dead", 
        </div>
        <div class="opacity-30 ml-4 italic">
          // Schrodinger is editing here...
        </div>
        <div class="opacity-30">
          };
        </div>
      </div>
    </div>
  </div>

  <div v-click="3" class=" mx-2 mt-4 border-2 border-red-500 rounded-xl p-4 bg-red-900/10">
    <div class="flex items-center justify-between mb-1">
      <div class="flex items-center gap-2 text-red-500 font-bold">
        <carbon-warning-hex-filled /> 1 Conflict, 2 Auto-Merges
      </div>
      <div class="text-sm px-1 py-0.5 bg-green-500/20 text-green-400 rounded">
        Git resolved lines 2 & 4
      </div>
    </div>

    <div class="font-mono text-sm bg-black/50 p-3 rounded border border-red-500/50">
      <div class="text-purple-300 font-bold">
        observed: true, <span class="text-gray-500 ml-2 italic">// Auto-merged</span>
      </div>
      <div class="text-gray-500 font-bold">
        &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Schrodinger)
      </div>
      <div class="text-blue-300 font-bold">
        state: "alive",
      </div>
      <div class="text-gray-500 font-bold">
        =======
      </div>
      <div class="text-purple-300 font-bold">
        state: "dead",
      </div>
      <div class="text-gray-500 font-bold">
        &gt;&gt;&gt;&gt;&gt;&gt;&gt; copenhagen-inter (Bohr)
      </div>
      <div class="text-blue-300 font-bold">
        experimentId: "cat-01", <span class="text-gray-500 ml-4 italic">// Auto-merged</span>
      </div>
    </div>
  </div>
</template>
