<script setup lang="ts">

</script>

<template>
  <div class="font-mono text-[10px] md:text-xs bg-[#0d1117] p-5 rounded-xl border-2 border-red-500/40 shadow-2xl relative overflow-hidden">
    <div class="space-y-1 text-gray-300">
      <div>$ git rebase main</div>

      <div class="text-white">
        Auto-merging <span class="text-blue-400">src/components/Auth.tsx</span>
      </div>

      <div class="text-red-500 font-bold">
        CONFLICT (content): Merge conflict in src/components/Auth.tsx
      </div>

      <div class="text-white">
        Auto-merging <span class="text-blue-400">package.json</span>
      </div>

      <div class="text-red-500 font-bold">
        CONFLICT (modify/delete): package-lock.json deleted in HEAD and modified in 8c1e92d...
      </div>

      <div class="pt-2 text-yellow-400">
        error: could not apply 8c1e92d...
      </div>

      <div class="bg-red-900/20 p-2 rounded border border-red-900/50">
        <div class="text-white font-bold">
          Resolve all conflicts manually, mark them as resolved with
        </div>
        <div class="text-white">
          "git add/rm &lt;conflicted_files&gt;", then run "git rebase --continue".
        </div>
        <div class="text-white">
          You can instead skip this commit: run "git rebase --skip".
        </div>
        <div class="text-white font-bold">
          To abort and get back to the state before "git rebase", run "git rebase --abort".
        </div>
      </div>

      <div class="pt-2 flex items-center gap-2">
        <span class="text-green-400">➜ project-repo</span>
        <span class="w-2 h-4 bg-gray-400 animate-flash" />
      </div>
    </div>
  </div>
</template>
