---
title: Announcing the Alpha Release of xstate-ngx!
description: XState the popular state machine library, now finally has an Angular Integration!
pubDate: 2024-07-05
heroImage: ./heroImage.png
heroImageAlt: TODO
public: true
slug: xstate-ngx-announcement
socialMediaImage: ./heroImageTwitter.png
keywords:
  - Angular
  - XState
  - state machines
  - state management
  - signals
  - dependency injection

---

I am very excited to announce the alpha release of **xstate-ngx**! This marks a significant milestone in integrating XState with Angular, and I can't wait for you to try it out and share your feedback.

For now, the project is published under `xstate-ngx`. However, we're planning to move it into the official XState monorepo once discussions are finalized and your feedback has been implemented. You can track the progress and discussions in the [related PR](https://github.com/statelyai/xstate/pull/4816/files).

## What is xstate-ngx

You might be wondering, what is xstate-ngx?! The official xstate documentation says the following:

> XState is a state management and orchestration solution for JavaScript and TypeScript apps.
> It uses event-driven programming, state machines, statecharts, and the actor model to handle complex logic in predictable, robust, and visual ways. XState provides a powerful and flexible way to manage application and workflow state by allowing developers to model logic as actors and state machines. It integrates well with React, Vue, Svelte, and [...]

and now there is an angular integration! xstate-ngx uses the primitives that XState provides and provides a thin wrapper to utilize Angular's Dependency Injection mechanism and signals.

## Why Alpha?

This alpha release aims to give you a taste of the developer experience with `xstate-ngx`. I want you to play with it, explore its capabilities, and most importantly, provide feedback on the general API design. Your input is crucial in shaping the future of this integration.

## Getting Started

To help you get started, we've provided several examples on [GitHub](https://github.com/niklas-wortmann/xstate-angular). Here's a quick highlight of how you can use `xstate-ngx` in your projects:

### Example: Simple Toggle Machine

```typescript
import { createMachine, interpret } from 'xstate';
import { useMachine } from 'xstate-ngx';
import { Component, inject } from '@angular/core';

// Define your machine
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
});

const ToggleMachineService = useMachine(toggleMachine);

@Component({
  selector: 'app-toggle',
  providers: [ToggleMachineService],
  template: `
		<button (click)="toggleMachine.send('TOGGLE')">
			{{ toggleMachine.snapshot().value === 'inactive' ? 'Off' : 'On' }}
		</button>
	`,
  standalone: true
})
export class ToggleComponent {
  protected toggleMachine = inject(ToggleMachineService)
}
```

In this example, we define a simple toggle state machine and create an Injectable using `useMachine` from `xstate-ngx`. The returned Service can then be used in a component. The `snapshot` property is a signal allowing for fine-grained reactivity, but also enabling to easily derive state by using the `compute` function.

## Special Thanks

I couldn't have reached this milestone without the invaluable contributions and support from the community:

- [**Enea Jahollari**](https://x.com/Enea_Jahollari) and [**Chau Tran**](https://x.com/Nartc1410) for their first round of feedback.
- [**David Khourshid**](https://x.com/DavidKPiano) and [**Mateusz Burzyński**](https://x.com/AndaristRake) for their outstanding work on XState, their interest in an Angular implementation, and their insightful discussions about this topic.
- The design and implementation are heavily inspired by NgRx Signals, so many thanks to the NgRx team!

## Join the Conversation

Your feedback is essential to us. Join the conversation, try out the alpha release, and let us know your thoughts. For now the best place to share any kind of feedback is the [xstate-ngx repository](https://github.com/niklas-wortmann/xstate-angular). Together, we can make `xstate-ngx` a robust and delightful tool for the Angular community.

Let me know what you think and happy coding!
