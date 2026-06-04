---
title: "Allocation Tracker"
github_link: "https://github.com/AE-CuriousSolver/allocation_tracker"
what: "A dynamic, scalable product allocation tracker for tourism operators and agents. Inspired by the menial tasks and time-consuming, fragmented communication I observed in tourism industry."
purpose: "Provide a single source of truth for product allocations and the tasks that surround them,reducing manual coordination and information loss while preserving personalised, flexible workflows for teams of any size. The service tracks allocations, associated tasks, and external communication."
learnings:
 - "Start small: build a minimal but working feature set first, then iterate to avoid over-engineering."
 - "Leverage the platform and persistence tools available (Mapper, JPQL)"
 - "Track planned improvements in a hidden or TODO file so design and code quality upgrades are visible and schedulable for future work."
 - "AI assistance (e.g. Copilot) can speed work but often produced incomplete or stylistically inconsistent suggestions; always review outputs and enforce project style preferences."
challenges:
  - "Familiarising with Gradle and project configuration across environments"
  - "I explored core business logic out of passion instead of focusing on building the system architecture first"
  - "Designing flexible domain models that balance structure and adaptability without causing feature creep."
futures:
  - "Complete the basic allocation CRUD, validation and task-tracking flows (MVP completion)."
  - "Expand the data model with concrete examples for different tourism products and allocation scenarios, and seed the database with realistic demo data."
  - "Add a connection/communication feature to manage client contacts and external email interactions (generation, sending, and logging)."
  - "Iterate on code quality, tests, and developer experience to make the project easy to run and extend."
---

**Status**: Maintained

View source and development history on GitHub → {{ page.github_link }}

