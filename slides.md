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
<Toc columns=2 maxDepth=1>
</Toc>

---

# Why Git Hurts in Teams

- Works great on solo projects

```mermaid
gitGraph
   commit
   branch new-feat
   checkout new-feat
   commit
   commit
   checkout main
   merge new-feat
   commit
   commit
```
<!-- Git is easy alone, hard together -->

---

- Becomes painful with multiple developers

```mermaid
gitGraph
  commit
  commit
  branch lizzie-feat
  checkout lizzie-feat
  commit
  commit
  branch lizzie-wip
  checkout lizzie-wip
  commit
  checkout lizzie-feat
  merge lizzie-wip
  commit
  checkout main

  branch john-feat
  checkout john-feat
  commit
  commit
  branch john-hotfix
  checkout john-hotfix
  commit
  checkout john-feat
  commit

  checkout main

  checkout lizzie-feat 
  commit

  merge john-feat
  commit

  branch emergency-fix
  checkout emergency-fix
  commit

  checkout main
  merge emergency-fix
  checkout lizzie-feat 
  commit
```

---

## Common Pain Points When Working in a Team

- Messy, unreadable commit history
- Long-lived branches that never merge cleanly
- Merge conflicts nobody understands
- Fear of breaking `main`

---

## What This Talk Is About

- Not Memorizing commands
- Not Git internals trivia
- Learning how to work in a team <strong> *safely* </strong>

---

# How Git Actually Works
## (Mental Model)

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

- A branch is just an extra piece of metadata that gets passed along from parent to child 
- No copies, no magic 
- Multiple branches can point to the same commit


</div>
<div>

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

# Conflicts Happen 
## Don't panic

---

## Why conflicts occur 
- Parallel changes to the same lines
- Formatting tools
- Long-lived branches

---

## Tools that can help 
- IDE merge tools 
- `git mergetool`

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
