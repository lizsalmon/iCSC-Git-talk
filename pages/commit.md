
<!-- LEFT: Concepts -->
<slideTitle colour="orange-900">

## Commits Are The Basis
</slideTitle>


<div class="grid grid-cols-2 gap-4 mx-4">
<div>
<v-clicks>

- A snapshot of the state of <strong>all tracked files</strong>
  - Dont worry git keeps it small
  - Includes the files that are added to the staging area 
  - It also includes the unchanged files 
- With some extra metadata
- And a pointer to a parent commit
</v-clicks>

<v-click>
<div class="absolute bottom-10 left-3 -rotate-3">
  <div class="bg-orange-700 p-6 border-t-4 border-orange-800 w-50 aspect-square flex items-center justify-center text-center">
    Change the parent, files, or metadata and you get a brand new commit!
  </div>
</div>
</v-click>

</div>


<div class="space-y-4">


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

<Arrow v-click="3" x1="700" y1="225" x2="700" y2="175" />

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
