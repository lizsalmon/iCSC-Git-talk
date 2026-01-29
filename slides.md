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

<ul>
  <li>Linear history</li>
  <li>Zero conflicts</li>
  <li>Total control</li>
</ul>


::right:: 

<div v-click class="bg-white/5 p-4 rounded-lg shadow-xl">
<p class="text-xs text-gray-500 mb-2 font-mono">// This is what we expect</p>
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

<div class="flex gap-4">
<div class="w-1/3">
<ul class>
<li v-click class="font-bold">You are 4 commits ahead</li>
<li v-click class="font-bold">John force-pushed his hotfix</li>
<li v-click class="font-bold">Richard's refactor has been approved</li>
<li v-click class="font-bold italic">Nobody has pulled in 3 days</li>
</ul>
</div>

<div v-click class="scale-200 origin-top-left transition-all duration-500">
```mermaid
gitGraph
  commit
  branch lizzie-feat
  branch john-feat
  checkout lizzie-feat
  commit
  checkout john-feat
  commit
  branch hotfix
  checkout hotfix
  commit
  checkout main
  merge hotfix
  checkout lizzie-feat
  commit
  branch wip-do-not-touch
  checkout wip-do-not-touch
  commit
  checkout lizzie-feat
  merge wip-do-not-touch
  checkout john-feat
  commit
  checkout main
  commit
  checkout lizzie-feat
  commit
  commit 
```
</div>

<div v-click class="absolute inset-0 flex items-center justify-center bg-red-900/80 backdrop-blur-sm rounded-lg border-4 border-red-500 animate-shake">
<div class="text-center">
  <carbon-warning-alt-filled class="text-6xl mb-2" />
  <h2 class="text-white">CONFLICT</h2>
  <p class="font-mono text-xs">CONFLICT (content): Merge conflict in EVERYTHING.ts</p>
</div>
</div>
</div>

---
layout: two-cols
---

::left:: 

<h2 class="mb-4">
Common Pain Points When Working in a Team
</h2>

- A messy, unreadable commit history
- Long-lived branches that never merge cleanly
- Merge conflicts nobody understands
- Fear of breaking `main`

::right::

<div class="relative w-full">
  <div v-click v-show="$clicks <= 1" >
    <BadGitHistory />
  </div>
  <div v-click v-show="$clicks > 1" >
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

## Tools that can help prevent conflicts

- linters
- merge queue

---

## Tools that can help resolve conflicts

- IDE merge tools 
- `git mergetool`

---

# Power Tools (Without Breaking Things)
## Advanced Commands with Escape Plans

---

## `git reset`
- `--soft`
etc 
- which bits move (HEAD Index Workign Tree) Make sure that these are defined

---

## `git reflog`

---

## `git cherry-pick`
- Apply a specific commit elsewhere
- Great for quick fix
- Dangerous when overused

---

## `git rebase`
-- Applying lots of cherry-picks at once 

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
