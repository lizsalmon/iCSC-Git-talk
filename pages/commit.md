<div class="grid grid-cols-2 gap-4">
<!-- LEFT: Concepts -->
<div>
<h2 class="mb-4">
Commits Are the Basis
</h2>

<ul>
<li v-click>
A snapshot of the state of <strong>all files</strong>
</li>

<li v-click>
With some extra metadata
</li>

<li v-click>
And a pointer to a parent commit
</li>
</ul>

</div>

<!-- RIGHT: Visual Representation -->
<div class="space-y-4">

<!-- Metadata + Parent -->

<div v-click="3" class="rounded-lg bg-orange-500/20 p-3 text-sm">
Parent commit
<br>
(state of the files at the last commit)
</div>

<div v-click="1" class="flex gap-4 items-start">
<div class="flex-1 rounded-lg bg-blue-500/20 p-3 mt-10">
```ts
// file-one.ts
```
```py
# file-two.py
```
```java
// file-three.java
```

<div v-click="2" class="mt-2 text-sm">
  <div><strong>Author:</strong> Lizzie</div>
  <div><strong>Date:</strong> Today</div>
  <div><strong>Message:</strong> “Changing my new files”</div>
  <div class="text-xs opacity-70 mt-1">
    commit: a3f9c2e
  </div>
</div>
</div>

<Arrow v-click="3" x1="700" y1="160" x2="700" y2="105" />

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
