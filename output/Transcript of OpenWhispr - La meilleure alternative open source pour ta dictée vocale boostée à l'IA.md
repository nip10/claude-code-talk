# OpenWhispr - La meilleure alternative open source pour ta dictée vocale boostée à l'IA

> **Source:** Transcript of OpenWhispr - La meilleure alternative open source pour ta dictée vocale boostée à l'IA.md
> **Speaker/Channel:** Unknown (French-language YouTuber, familiar with tools like Obsidian and AI APIs)
> **Summary:** The speaker introduces OpenWhispr, a free and open-source voice dictation tool that uses AI (via OpenAI or Anthropic API keys) to produce clean, punctuated transcriptions — positioning it as a free alternative to paid tools like SuperWhisper. The video covers installation, configuration, model selection, and advanced features like AI agent invocation and custom prompts.

## Tips & Tricks

### Use OpenWhispr as a Free Alternative to SuperWhisper for Voice Input to Claude Code
- **What:** OpenWhispr is a free, open-source voice dictation tool that replicates the core functionality of paid tools like SuperWhisper. It uses AI to clean up transcriptions, removing hesitations and adding proper punctuation.
- **Why it matters:** If you already have an OpenAI or Anthropic API key (e.g., for use with Claude Code), you can use OpenWhispr at no additional cost rather than paying for a separate subscription to a voice dictation app.
- **How:** Download OpenWhispr (available on Mac and Windows), configure it with your existing OpenAI or Anthropic API key, and use it to dictate prompts directly into any text field — including Claude Code's input.
- **Tags:** `[Workflow]`, `[Config]`

### Prefer Anthropic's Claude Model for Faster Transcription Processing
- **What:** OpenWhispr supports multiple AI models for the post-processing step (the step that cleans up and corrects the raw audio transcription). The speaker found Anthropic's models — specifically a fast Claude model (likely Claude Haiku, rendered as "Ikiku" in the auto-generated transcript) — to be significantly faster than OpenAI's models for this task.
- **Why it matters:** When using voice dictation as part of a Claude Code workflow, speed matters. Slow post-processing creates friction and slows down the prompt-entry loop.
- **How:** In OpenWhispr's settings, navigate to the processing model configuration and select an Anthropic/Claude model instead of an OpenAI model. The speaker specifically switched to a fast Claude model after finding OpenAI models too slow.
- **Tags:** `[Config]`, `[Performance]`

### Trigger Voice Dictation with a Keyboard Shortcut
- **What:** OpenWhispr can be activated via a configurable keyboard shortcut rather than clicking a UI button. Press the shortcut once to start recording, then press it again to stop and trigger transcription processing.
- **Why it matters:** A keyboard shortcut makes the tool seamlessly integrated into any workflow — including Claude Code — without needing to switch focus to a separate application window.
- **How:** Configure your preferred hotkey in OpenWhispr's settings panel. Press once to start recording, press again to stop. The transcribed and AI-cleaned text is then pasted into the active text field.
- **Tags:** `[Shortcut]`, `[Workflow]`

### Be Aware of Keyboard Layout Issues When Configuring Shortcuts
- **What:** OpenWhispr's shortcut configuration may not account well for non-QWERTY keyboard layouts (e.g., French AZERTY). The speaker had to manually research the correct key mapping to get the shortcut working on their layout.
- **Why it matters:** This is a usability gotcha that can cause confusion during initial setup, especially for non-English users.
- **How:** If you use a non-QWERTY keyboard layout, look up the equivalent QWERTY key for your desired shortcut key before configuring it in OpenWhispr. Trial and error may be required.
- **Tags:** `[Gotcha]`, `[Config]`

### Use OpenWhispr's AI Agent Mode to Invoke AI Without Opening a Separate App
- **What:** Beyond simple transcription, OpenWhispr has an "agent invocation" mode that lets you speak a prompt and have an AI model respond directly in the active text field — not just transcribing your words, but actually calling an AI and pasting the response.
- **Why it matters:** This allows you to invoke AI assistance from any text field on your system without switching to a browser, opening ChatGPT, or using a plugin. For Claude Code users, this could allow quick AI-assisted text generation in adjacent tools (editors, notes apps, etc.).
- **How:** Activate the agent mode via its designated trigger, speak your request, and OpenWhispr will send it to the configured AI model and paste the result. The speaker demonstrated asking for a short video introduction and received a generated response directly in the active window. Note: if no language-specific system prompt is configured, the response may default to English even if you speak in French.
- **Tags:** `[Workflow]`, `[Advanced]`

### Configure Custom Prompts for Recurring Voice Dictation Needs
- **What:** OpenWhispr allows you to pre-configure custom system prompts that shape how the transcription or agent output is formatted or contextualized. These prompts can be invoked on demand.
- **Why it matters:** If you regularly dictate the same type of content (e.g., task descriptions for Claude Code, commit messages, bug reports), a custom prompt can enforce a consistent format automatically, saving time on manual editing.
- **How:** Navigate to the prompt configuration section in OpenWhispr's settings. Define a prompt that matches your recurring use case, then invoke that prompt when recording the relevant type of content.
- **Tags:** `[Config]`, `[Prompt Technique]`, `[Workflow]`

### Reuse Your Existing OpenAI API Key to Avoid Extra Subscriptions
- **What:** OpenWhispr requires an OpenAI API key specifically for the audio transcription step (the speech-to-text conversion). If you already have one, you can use it directly at no extra cost beyond API usage.
- **Why it matters:** Developers already using OpenAI's API (e.g., via Obsidian plugins or Claude Code integrations) can reuse that key rather than paying for a separate SaaS voice product.
- **How:** In OpenWhispr settings, enter your OpenAI API key in the transcription key field. A separate model key (which can be an Anthropic/Claude key) is used for the post-processing/cleanup step.
- **Tags:** `[Config]`

### OpenWhispr Handles Hesitations and Pauses Better Than Native OS Dictation
- **What:** Unlike the native Windows dictation tool (Win+H), OpenWhispr's AI post-processing layer understands that pauses and filler words are thinking time, not content — and removes them from the final transcription.
- **Why it matters:** When dictating long, complex prompts for Claude Code, it is natural to pause and think. Native OS dictation tools transcribe those pauses literally, producing messy output. OpenWhispr produces clean, coherent text ready to use as a prompt.
- **How:** Simply use OpenWhispr instead of the native OS dictation tool. No additional configuration is needed — the AI cleanup layer handles this automatically.
- **Tags:** `[Workflow]`, `[Performance]`

### Local Model Support Is Available But Complex
- **What:** OpenWhispr offers an option to use a local AI model instead of cloud API keys, keeping all processing on-device.
- **Why it matters:** Local models offer privacy benefits and eliminate API costs entirely — relevant for users who process sensitive content via voice.
- **How:** The speaker did not configure this option, noting it requires specific installations and is more complex to set up. If you want fully offline voice dictation, investigate this option but expect a steeper setup process. `[Uncertain]` — the speaker did not detail the exact steps.
- **Tags:** `[Advanced]`, `[Config]`

## Raw Notes

- The speaker explicitly compares OpenWhispr to **SuperWhisper**, a paid macOS/Windows voice dictation tool that also uses AI post-processing. OpenWhispr is positioned as the free/open-source equivalent.
- The speaker uses **Obsidian** as a primary text environment and already uses OpenAI API keys there — this context explains why reusing the key in OpenWhispr felt natural and cost-effective.
- Speed comparison: the speaker acknowledges that even with the fastest Claude model, OpenWhispr is still somewhat slower than SuperWhisper. This is a trade-off accepted in exchange for cost savings.
- The tool is described as relatively new, with some rough edges and minor friction points. The speaker is generally positive but transparent about its limitations.
- The demo showed the agent mode producing output in English despite the speaker recording in French, because no language-specific system prompt had been configured. This is a reminder to configure a prompt if you need output in a specific language.
- The transcript shows signs of being auto-generated: "Anthopic" instead of Anthropic, "Ikiku" instead of Haiku, "quart querty" for QWERTY — quality is moderate but intent is generally interpretable.
- The video is entirely in French and targets a French-speaking developer/productivity audience. Claude Code is not mentioned by name, but the workflow described (voice dictation into any text field with AI-assisted cleanup) is directly applicable to dictating Claude Code prompts.
- OpenWhispr appears to be a relatively new and actively developing project. The speaker notes it is not perfect but finds it performant for its purpose.
