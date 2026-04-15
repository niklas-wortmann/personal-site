---
title: 'The Timeline Is Gaslighting You About AI'
description: 'If AI timelines and layoff headlines are making you feel behind, this is a reminder that the loudest voices are not a reflection of the industry. Most teams are still figuring this out, and the real bottlenecks in software development have not changed.'
pubDate: 2026-04-17
heroImage: ./heroImage.png
heroImageAlt: A bell-curve meme showing a distressed figure at the top with the text "If you're not running ten agents in parallel you're cooked as a dev," two calmer figures on the sides saying "I'm not behind," and the headline "The Timeline Is Gaslighting You About AI" across the bottom.
public: true
slug: not-behind
socialMediaImage: ./heroImage.png
keywords:
  - ai layoffs
  - ai fomo
  - developer anxiety
  - developer tool fatigue
  - ai coding agents
  - agentic workflows
  - software engineering productivity
  - ai hype in software engineering
  - coding assistants
  - software development bottlenecks
  - ai adoption in tech
  - developer career anxiety
---

It’s 11 p.m. and I’m scrolling, like I missed the meeting everyone else was invited to. Call it AI FOMO, call it whatever you like. I’m a developer, I work in developer tooling, and still that night I found myself wondering whether I was falling behind.

Someone is running ten Claude agents in parallel and "just supervising." Another side project shipped over the weekend that I would not have scoped in a month. I learned, in an indirect hallway-LinkedIn sense, that if I’m not already on X, then it’s all over for me. Two tabs over: more layoff news. Another company blaming "AI efficiency gains" as the cause.

Software has been my profession for over a decade. I’m the least likely person to feel this way, on all levels. And for about ten minutes that night, I wondered if I was going to be left behind by people posting demos in 280 characters.

I speak with a wide range of developers. Most describe some variation of the same thing, and it is often quieter than the existential "will I still have a job?" kind. It is more like tool fatigue. Three new things have emerged over the past week that might be useful today, but you don’t know which matters. A fear that everyone else found a hack. The constant low noise of "you’re not doing enough," curated to your ears by an algorithm that prioritizes splashy declarations over accurate ones.

> Short version: you’re probably OK. The timeline provides a snapshot of professional software engineering that doesn’t correspond to the work most of us actually do.

## The Headlines Don’t Tell the Full Story on Layoffs

Layoffs are brutal, and if you’re going through one, none of the paragraphs that follow make it easier. I’m not trying to reason the pain away. I am contesting the storyline people have laid over it.

Challenger, Gray & Christmas tracked roughly 1.2 million job cuts in the United States in 2025. AI was cited as the reason for 4.5% of them. The other big bucket was "market and economic conditions," at about 245,000 cuts, nearly four times the AI amount. Early 2026 data suggests AI is creeping up as a named cause, but even then it still only accounts for around 20% of tech-specific cuts.

Forrester now estimates that many layoffs attributed to AI will eventually be rolled back, with workers rehired elsewhere or for less money, because the capabilities that were supposed to replace them do not really exist yet. That made me think of a January _Harvard Business Review_ piece arguing that companies are firing workers because of AI’s potential rather than its demonstrated ability. That ought to be setting the tone. Instead, it gets drowned out.

A lot of what’s going on is the same story that reset in 2023: post-Covid overhiring, tighter macro conditions, and higher interest rates. That makes AI the name brand of the moment, because it sounds forward-looking on an earnings call.

## It Was Never About Lines of Code

The entire parallel-agents story only makes sense if you believe your limiting factor in software is how quickly you can type. More code, faster, wins.

If you’ve ever spent six months in a real codebase, you know that’s backwards. The bottleneck is usually determining why the billing service has three overlapping definitions of "customer." It is the review that catches the race condition. It is choosing to remove two thousand lines of dead abstraction rather than adding two hundred new ones. It is knowing which flaky test matters and which has been irrelevant for a year.

A 2024 report from GitClear approaches this subject from a different angle. Across 211 million lines of code written between 2020 and 2024, short-term churn rose from 3.1% to 5.7%. The share of copy-pasted code rose from 8.3% to 12.3%. Refactored code, the kind of edit that shows someone understood the system well enough to reshape it, fell from 24.1% to 9.5%.

More code shipped. Less of it survived. Less of it changed the project in ways that showed real understanding.

That’s what "productivity" starts to mean when you reward quantity. No real project benefits from AI slop, and plenty of projects are having it poured all over them without anyone saying on the record that this is what they asked for.

## The Great Siloing

The thing that finally got me to write this was Steve Yegge. Read the whole thing, but the nugget I want to extract is this: a longtime tech director at Google told him their AI adoption roughly breaks down like this:

- **20%** are agentic power users, using AI as a serious force multiplier for analysis and creativity.
- **20%** are flat-out refusers and do not use these tools at all.
- **About 60%** are somewhere in the middle, using tools like Cursor mostly as smarter autocomplete.

Yegge says he has heard variations on the same pattern from people at dozens of other companies. Google, by his account, is "pretty in the middle."

He has a theory for why no one has a clean read on the middle: the industry has been in hiring-freeze mode for most of the last eighteen months. People are not jumping orgs, so they are not bringing a tempered sense of "here’s what another org is actually doing" from place to place. He calls it the Great Siloing. Everyone is flying blind.

That framing resonated with me. If no one can see where the real middle is, the middle gets defined by the loudest public voices. A thread about running ten agents in parallel starts to sound like "what the industry is doing," but by Yegge’s own numbers that is still a small slice of the total. The real middle is the 60% of people using AI in pretty mundane ways.

If that sounds like you, you are not behind. You are the bulk of the industry, Google included.

I do think a gap is opening. Some kinds of company will get a lot of leverage out of agentic workflows, at least for a season, and some kinds of company will not. I do not want to be flippant about that.

What I would emphasize differently is what "behind" means. With every major technology transition over the past thirty years, some version of "if you are not in the top 20%, you are done" emerges. Most careers turn out fine. "Not at the frontier" is very different from "being left behind forever." The second story is more dramatic, scarier, and much better suited to the timeline.

## We Have Been Here Before

We should also say this plainly: change like this isn’t new for us. Every developer I know has heard some version of "learn this now or you are finished" at least once. jQuery was about to save us, then destroy us. Docker was an overhyped gimmick, until it clearly was not. Microservices were first the solution, then the problem, and finally just another design choice.

This is something we are actually pretty good at. Not always picking the best tool on the first shot, but letting new tools earn their place against real work, keeping what is useful, and discarding the rest. What you need here is probably a habit you already have: judge a tool not by what it does in the Twitter demo, but by how well it performs on your actual code.

Often the people writing the "you are not going to make it" threads are selling something. Sometimes literally, as in a course or a newsletter. Sometimes just an identity. No one on your team is trying to sell you anything. You just have to keep doing the work for them.

## What It Looks Like in Real Code

This is where I have landed after actually using these tools for a while. I use Codex mainly via JetBrains AI: a single agent, inside the editor where I already spend my day.

I do find it useful for code I am not familiar with. I can jump into a module I have never seen before and ask, "Where is this config loaded? What calls this function? What is the flow when X happens?" I can build a partial mental model of the code in minutes; I used to spend an hour grepping. That is real savings. It is also the least shareable type of use case imaginable. No one goes viral by posting, "I asked an agent to summarize a file I had not read yet."

Where the classic fantasy stings me most is almost the opposite. The agent misses the obvious solution right in front of it. There is already a utility that does the job, three folders over, but instead of finding it, the agent invents another one. Or it turns a 20-line change into 200 lines of abstractions for edge cases that will never occur. You can accept that output. Your editor will not complain. The tests may still go green. The codebase silently degrades, and no one remembers why six months later.

So the habit I have landed on is nothing fancy. Agents can help you move faster, but only if you stay in the loop. You have to read the output. You have to steer the conversation when it wanders. You still need to know the codebase well enough to say, "No, use the thing we already have," or, "That is way too much God damned code for what I asked." That is hard enough with one agent you are focused on. I do not know how this works with ten.

At that stage, you are not reviewing. You are rubber-stamping.

I do not want more generated lines of code. I want a better outcome, faster. Those are different goals, and they diverge more often than the hype allows.

The advice that actually works is boring:

- Pick one tool.
- Use it on your real work.
- Read the output.
- Question it.
- Treat it like a pull request from a junior engineer who is 80% right.

Reject it when it is wrong and Learn where it is strong. That is the whole strategy.

## Closing

The feeling is real. The narrative built on top of it, the one that says you are falling behind because you are not running a personal army of agents, is mostly timeline effect. This week, the vast majority of software engineers who are not writing articles about their tools are heads down, shipping and rolling back features and quibbling over config files.

**You are one of them. Close the tab.**
