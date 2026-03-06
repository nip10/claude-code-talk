# Frontend-Focused Deck Extension Design

## Goal

Add a 10-slide extension to the existing deck that highlights your personal workflow,
frontend-specific tooling, practical MCP use cases, and team adoption guidance.

## Constraints

- Keep existing deck structure intact.
- Append content so trimming is easy.
- Reuse existing MDX slide components.
- Maintain compatibility with current slide index and per-slide routes.

## Approach

1. Create 10 new MDX slide files in `src/content/slides/`.
2. Register all slide components in `src/lib/slides.ts`.
3. Insert new slide metadata before the closing slide so order remains natural.
4. Validate with `npm run build` and `npm run lint`.

## Slide Additions

1. Workflow: How I Actually Work
2. My Core Stack
3. Front-end Focus: Verification First
4. MCPs I Use Most (Front-end Edition)
5. Cool Use Cases: Visual and UX QA
6. Cool Use Cases: Delivery Workflow
7. Plugins and Skills That Improve Output Quality
8. What Teams Are Actually Using
9. What You Are Probably Missing
10. Start Next Week: Front-end Rollout Plan

## Rationale

- Starts with your real process to build credibility.
- Pivots quickly to frontend value (visual, interaction, responsive, runtime checks).
- Grounds tools in concrete use cases, not generic feature lists.
- Ends with actionable adoption steps for the frontend team.

## Verification

- Build must succeed (`next build`).
- Lint must pass (`eslint`).
- New slide routes must be statically generated.
