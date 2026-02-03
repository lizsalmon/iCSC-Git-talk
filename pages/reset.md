## `git reset`
<p class="opacity-50 mt-2">Rewinding the clock</p>

::left:: 

<div class="pr-4">

- Moves the current branch pointer to a specific commit. Think of it as <b>"Undo"</b> with three levels of intensity:
  
<div v-if="$clicks <= 1" v-click class="mb-4 bg-yellow-700/20 p-3 rounded-lg m-2">

`--soft` 
- Keep your changes. They stay <b>staged</b>. Perfect for squashing commits.

</div>

<div v-if="$clicks <= 2" v-click="2" class="mb-4 bg-orange-700/20 p-3 rounded-lg m-2">

`--mixed` (default)
- Keep your changes. They become <b>unstaged</b>. Great for "fixing" a messy commit.

</div>

<div v-if="$clicks <= 3" v-click="3" class="mb-4 bg-red-700/20 p-3 rounded-lg m-2">

`--hard`
- Wipe everything. No trace left. <b>Nuclear option.</b>

</div>
</div>

::right::

<div>
<div class="font-mono text-sm bg-black/40 p-3 rounded border border-white/10">
<div class="text-gray-500 mb-2">// Initial State</div>
<div class="flex items-center gap-2">
<carbon-commit /> <span class="text-blue-400">a1b2c3d</span> - feat: Initial ToDo list
</div>
<div class="flex items-center gap-2">
<carbon-commit /> <span class="text-blue-400">e5f6g7h</span> - fix: typo
<span class="bg-yellow-500 text-black px-1 rounded text-sm font-bold">HEAD</span>
</div>
</div>

<div v-if="$clicks === 1">
<div class="text-red">

`git reset --soft HEAD~1`

</div>

Changes from e5f6g7h are still in your Staging Area. Ready to be committed again!

<div class="text-red">

`git status` 

</div>

```bash
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   todo.md
```

</div>

<div v-if="$clicks === 2">

<div class="text-red">

`git reset --mixed HEAD~1`

</div>
<div class="text-lg">


Changes from e5f6g7h are now
"modified" but not staged.

<div class="text-red">

`git status`

</div>

```bash
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   todo.md

no changes added to commit (use "git add" and/or "git commit -a")

```

</div>

</div>

<div v-if="$clicks === 3">
<div class="text-red">

`git reset --hard HEAD~1`

</div>
<div class="bg-red-900/20 p-4 rounded border border-red-500/50 text-center">
<carbon-trash-can class="text-3xl text-red-500 mx-auto mb-2" />
<p class="text-md text-red-200">Files reverted to "initial" state.</p>

```bash
HEAD is now at 129bb28 feat: Initial ToDo list
```

</div>
</div>
</div>