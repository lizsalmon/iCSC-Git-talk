---
theme: default
title: Git in Practice — Techniques for Collaborative Development
author: Lizzie Salmon
hideInToc: true
layout: cover
---

# Git in Practice  
## Techniques for Collaborative Development

---
hideInToc: true
--- 
## Contents
<!-- <Toc columns=2 maxDepth=1>
</Toc> -->

---
layout: cover
---

# Why Git Hurts in Teams

---
layout: two-cols
---

::left:: 


# The Solo Experience

<v-clicks>

 - Linear history
 - Zero conflicts
 - Total control 
</v-clicks>

::right:: 

<div v-click class="bg-white/5 p-4 rounded-lg shadow-xl">
<p class="text-xs mb-2 font-mono">This is what we expect</p>
<div class="scale-90 origin-top">

```mermaid
gitGraph
  commit id: "Init"
  branch feature
  checkout feature
  commit id: "Work"
  commit id: "More work"
  checkout main
  merge feature
  commit id: "Deploy"
```

</div>
</div>

---
layout: default
---

# The Team Reality

<div class="grid grid-cols-3 gap-4">
<div class="col-span-1">

- You are 4 commits ahead
- John force-pushed his hotfix
- Richard's refactor has been approved
- Nobody has pulled in 3 days

</div>

<div v-click class="col-span-2 transition-all duration-500">
```mermaid
gitGraph
  commit
  branch richard-refactor
  branch lizzie-feat
  checkout lizzie-feat
  commit
  branch john-feat
  checkout lizzie-feat
  commit
  checkout john-feat
  commit
  checkout richard-refactor
  commit
  branch hotfix
  checkout hotfix
  commit
  checkout main
  merge hotfix
  checkout lizzie-feat
  commit
  checkout richard-refactor
  commit
  checkout lizzie-feat
  checkout john-feat
  commit
  checkout main
  commit
  checkout lizzie-feat
  commit
  commit 
```
</div>
</div>

<div v-click class="absolute inset-0 flex items-center justify-center bg-red-900/80 backdrop-blur-sm rounded-lg border-4 border-red-500 animate-shake">
<div class="text-center">
  <carbon-warning-alt-filled class="text-6xl mb-2" />
  <h2 class="text-white">CONFLICT</h2>
  <p class="font-mono text-xs">CONFLICT (content): Merge conflict in EVERYTHING.ts</p>
</div>
</div>

---
layout: two-cols
---

::left:: 

<h2 class="mb-4">
Common Pain Points When Working in a Team
</h2>

<v-clicks>

- A messy, unreadable commit history
- Long-lived branches that never merge cleanly
- Merge conflicts nobody understands
- Fear of breaking `main`
</v-clicks>

::right::

<div class="relative w-full">
  <div v-click v-show="$clicks <= 5" >
    <BadGitHistory />
  </div>
  <div v-click v-show="$clicks > 5" >
    <Merge />
  </div>
</div>

---
layout: default
class:
---

# Sounds familiar?

<SoundsFamiliar/>

---
layout: cover
---

# How Git Actually Works

<!-- commmit as a change set (not strictly true, but makes things simple) -->


---
src: ./pages/commit.md
---

---

<div class="h-full flex justify-center items-center scale-300">

```mermaid
stateDiagram-v2
  direction RL

  state "Commit C3 (HEAD, main)" as C3
  state "Commit C2 " as C2
  state "Commit C1 " as C1

  C3 --> C2 : parent
  C2 --> C1 : parent
```

</div>

---

<div class="grid grid-cols-2 gap-6">
<div>


<h2 class="mb-4">Branches Are Just Pointers</h2>
<v-clicks>

- A branch is just an extra piece of metadata that gets passed along from parent to child 
- No copies, no magic 
- Multiple branches can point to the same commit

</v-clicks>
</div>

<div>
<div v-click>
```mermaid
stateDiagram-v2
  direction RL

  state "Commit C3" as C3

  state "main" as main
  state "feature-x" as fx
  state "bugfix" as bf

  main --> C3
  fx --> C3
  bf --> C3

  %% Styling
  class main,fx,bf branch
  class C4,C3 parent

  classDef branch stroke:#f59e0b,stroke-dasharray: 5 5,color:#f59e0b
  classDef parent stroke:#2563eb,color:#2563eb
```

</div>
<div v-click>


```mermaid
stateDiagram-v2
  direction RL

  state "Commit C3" as C3
  state "Commit C4" as C4

  state "main" as main
  state "feature-x" as fx
  state "bugfix" as bf

  C4 --> C3 : parent

  %% Branch pointers (dashed, colored)
  main --> C3 : branch
  bf --> C3 : branch
  fx --> C4 : branch

  %% Styling
  class main,fx,bf branch
  class C4,C3 parent

  classDef branch stroke:#f59e0b,stroke-dasharray: 5 5,color:#f59e0b
  classDef parent stroke:#2563eb,color:#2563eb

```

</div>

</div>
</div>

<!-- branches arent folders -->

---

## Squashing Strategies
- Squash before merge
- Squash during rebase 
- Squash in GitHub/GitLab
- Just dont squash
<!-- Sam: if commits just undo previous commits then would squash  
Telling the useful story -->


---
layout: cover
---

# Conflicts Happen 
## Don't panic

---
layout: default
---

# Creation of a conflict

<Conflicts />

---
layout: default
---

# The Best Way to Prevent Conflicts
<p class="opacity-50 -mt-2 mb-8">Stop them from happening in the first place</p>

<div class="grid grid-cols-3 gap-4">

<div v-click class="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 shadow-lg">
  
<h3 class="font-bold mb-1 flex items-center"> <carbon-paint-brush class="text-blue-400 text-3xl mb-1 mr-2" />Consistency</h3>

- Have a standard:
  - quotation marks
  - indentation
  - white space
  - import order
  - variable names
  - ...

</div>

<div v-click class="p-4 rounded-xl border border-green-500/20 bg-green-500/5 shadow-lg">
  
<h3 class="font-bold mb-1 flex items-center"> <carbon-bot class="text-green-400 text-3xl mb-1 mr-2" />Automation</h3>

- Enforce some standards using linters

```js
//from eslint.config
stylistic: {
  indent: 2,
  quotes: 'single',
},
```

- The diff will only show logic changes
- Enforce those linters with git-hooks or CI/CD pipelines

</div>

<div v-click class="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 shadow-lg">

<h3 class="font-bold mb-1 flex items-center">
<carbon-chat class="text-purple-400 text-3xl mb-1 mr-2" />
 Teamwork</h3>

- **Communicate**
- Small, atomic PRs
- Culture changes:
  - `git pull` and `git rebase` frequently
  - `git fetch` is a friend 

</div>
</div>

---

## Tools that can help resolve conflicts

- IDE merge tools 
- `git mergetool`

---
layout: cover
---

# Git Power Tools and How to Use Them
## Without Breaking Things


---
layout: two-cols-header
src: pages/reset.md
---

---
layout: two-cols-header
---

## `git reflog`

<p class="opacity-50 mt-2">

The annoying truth-telling brother of `git log` 
</p>

::left::

`git log`
- Shows the current HEAD and where it has been
- It prints the commit HEAD points to, then its parent, its parent, and so on.


`git reflog`
- Shows an ordered list of the commits that HEAD has pointed to
- It's a fully comprehensive history for your *local* repo
- It means that nothing is permanent

::right:: 

<div>
PUT HERE WHAT THE NOTATION MEANS 
</div>


---
layout: two-cols
---

<div>

<div class="mb-4">

## `git reflog` saving the day
</div>


```bash {all|1-2|4-6|7-9|10-12|13-17|18-20|21-24}
$ git commit -m "feat: Initial To Do list"
[main 9479df0] feat: Initial To Do list

$ git commit -m "feat: new file (dont delete this)"
[main f6e25d1] feat: new file (dont delete this)

$ git reset --hard HEAD~1 # <--- disaster has struck!! 
HEAD is now at 9479df0 feat: Initial To Do list

$ git log --oneline
9479df0 (HEAD -> main) feat: Initial To Do list

$ git reflog
9479df0 HEAD@{0}: reset: moving to HEAD~1
f6e25d1 HEAD@{1}: commit: feat: new file (dont delete this) # <-- THERE IT IS!
9479df0 HEAD@{2}: commit (initial): feat: Initial To Do list

$ git reset --hard HEAD@{1}
HEAD is now at f6e25d1 feat: new file (dont delete this)

$ git log --oneline
f6e25d1 (HEAD -> main) feat: new file (dont delete this)
9479df0 feat: Initial To Do list
```


</div>
::right::
<div>
You may be thinking - just dont hard reset 
Well it can also be useful when ...
</div>

---
layout: two-cols
---

## `git reflog`
<p class="opacity-50 -mt-2 text-sm italic">The "Undo" for your "Undo"</p>

<div class="mt-4 pr-4">
  <p class="text-sm">If <code>git log</code> is your <b>public diary</b>, <code>reflog</code> is your <b>private browser history</b>.</p>
  
  <ul class="mt-4 space-y-4">
    <li v-click>
      <span class="text-orange-400 font-bold">The Black Box Recorder</span>
      <p class="text-xs opacity-80 text-pretty">It records every single time your <code>HEAD</code> moves. Switched branches? Reset? Rebased? It's all there.</p>
    </li>
    <li v-click>
      <span class="text-green-400 font-bold">Resurrection</span>
      <p class="text-xs opacity-80 text-pretty">Lost a commit after a <code>--hard reset</code>? Find the SHA in the reflog and simply <code>git checkout</code> back to it.</p>
    </li>
    <li v-click>
      <span class="text-blue-400 font-bold">Relative Time</span>
      <p class="text-xs opacity-80 text-pretty">You can reference state by time: <br><code>git reset --hard head@{5.minutes.ago}</code></p>
    </li>
  </ul>
</div>

::right::

<div class="space-y-4">

  <div v-click="1" class="font-mono text-[9px] bg-gray-900 p-3 rounded border-l-4 border-blue-500">
    <div class="text-blue-400 mb-1">$ git log --oneline</div>
    <div class="opacity-50 italic">// Only shows current branch history</div>
    <div class="text-white">f3a9c2e fix: login bug</div>
    <div class="text-white">91bd2aa feat: auth</div>
  </div>

  <div v-click="2" class="font-mono text-[9px] bg-gray-900 p-3 rounded border-l-4 border-orange-500 animate-slide-in-right">
    <div class="text-orange-400 mb-1">$ git reflog</div>
    <div class="opacity-50 italic">// Shows EVERYTHING you did</div>
    <div class="text-white">f3a9c2e HEAD@{0}: reset: moving to HEAD~1</div>
    <div class="text-red-400">8c1e92d HEAD@{1}: commit: oops I deleted this</div>
    <div class="text-white">91bd2aa HEAD@{2}: checkout: moving from main to dev</div>
    <div class="text-white">e21a8bb HEAD@{3}: commit: feat: auth</div>
  </div>

  <div v-click="3" class="p-3 bg-green-500/10 border border-green-500/50 rounded flex items-center gap-3">
    <!-- <carbon-ambulance class="text-green-400 text-2xl" /> -->
    <div>
      <div class="text-[10px] text-green-400 font-bold uppercase">The Rescue</div>
      <div class="font-mono text-[10px] text-white">git reset --hard 8c1e92d</div>
    </div>
  </div>

</div>
---

## `git cherry-pick`
- Apply a specific commit elsewhere
- Great for quick fix
- Dangerous when overused

---

## `git rebase`
- Applying lots of cherry-picks at once 

---

## `git bisect`
- underused! 
  
---

# Shaping History Intentionally

## Branching, Merging, Rebasing

---

## Merge: Preserving History

- Keeps all branches visible
- Shows when work diverged
- Can create noisy graphs

<!-- Diagram slide -->

---

## Rebase: Rewriting History

- Replays commits on a new base
- Creates linear history
- Changes commit hashes

<!-- Diagram slide -->

---

## Rebase vs Merge

- Merge: record *what happened*
- Rebase: show *what you want others to see*

> Rebase your own work.  
> Merge shared work.

---

## Interactive Rebase

- Reorder commits
- Squash commits
- Edit commit messages

---


# How Teams Organize Change
## Collaboration Workflows

- Depends very much on numerous things: 
  - Infrastructure vs software 
  - Length of time it takes for CI to run 

---

## Using remotes
- Initially (before gitlab github) everyone would have their own remote
- Push and pull to each others
- Where the term "pull request" came from. 

---

## Feature Branch Workflow

- One branch per change
- Pull / merge requests
- Pros: isolation, review
- Cons: long-lived branches

---

## Trunk-Based Development

- Short-lived branches
- Frequent integration
- Heavy use of CI
- Pros: fewer conflicts
- Cons: requires discipline

---

## Gitflow (Briefly)

- `develop`, `release`, `hotfix`
- Popular historically
- Often too heavy 
- Designed to solve problems that are not so big anymore 
<!-- Releases used to be ~2 years, now two weeks ish (the problem that it was designed to fix) -->

---

## Pull Requests Fit *On Top*

- PRs are a collaboration layer
- Not a workflow by themselves
- History quality affects review quality

---


# Scaling beyond the individual
## Automation and Reviews 

---

## Git Hooks 
- pre-commit 
- commit-msg

---

## CI/CD Integration
- Tests on every push 
- As enforcement  

---

## Code Reviews
- Small MR/PRs 
- Clear intent 
- History cear 

---

# Exercise overview 
WHATEVER THIS MAY BE

---


# Practical Rules to take away 
- Rebase your own 
- Merge together
- Keep PRs small
- Write (published) commits for everyone else/future you

<!-- Git is a communication tool and its the history that tells the story -->
