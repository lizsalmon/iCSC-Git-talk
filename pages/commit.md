
<!-- LEFT: Concepts -->

<h2 class="mb-4">
Commits Are the Basis
</h2>

<div class="grid grid-cols-2 gap-4">
<div>
<v-clicks>

- A snapshot of the state of <strong>all files</strong>
  - Dont worry git keeps it small
- With some extra metadata
- And a pointer to a parent commit
</v-clicks>

<v-click>
<div class="bg-green-500/10 p-2 rounded-lg border-2 border-green-400/10 mt-2">

Change the parent, files or metadata and you get a brand new commit!
</div>
</v-click>

</div>

<!-- RIGHT: Visual Representation -->
<div class="space-y-4">

<!-- Metadata + Parent -->

<div v-click="3" class="rounded-lg bg-purple-500/20 p-3 text-sm">
Parent commit
<br>
(state of the files at the last commit)
</div>

<div v-click="1" class="flex gap-4 items-start">
<div class="flex-1 rounded-lg bg-blue-500/20 p-3 mt-10">
```python
# file-one.py
```
```python
# file-two.py
```
```python
# file-three.py 
```

<div v-click="2" class="mt-2 text-sm">
  <div><strong>Author:</strong> Lizzie</div>
  <div><strong>Date:</strong> Today</div>
  <div><strong>Message:</strong> “Changing my new files”</div>
  <div class="text-xs opacity-70 mt-1">
    commit: c8e574257965d32614857467341f82b4d261510e
  </div>
</div>
</div>

<Arrow v-click="3" x1="700" y1="210" x2="700" y2="160" />

</div>
</div>
</div>

<!--
A commit is a snapshot on the state of all files with some attached metadata 
- Each commit points to a parent 
- Each commit remembers which commit came before it 
- Actions that change the parent (rebasing, cherry-pick) need a new ID
- History forms a **DAG**
-->
