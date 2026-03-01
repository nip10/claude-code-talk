import Deck from "@/components/Deck";
import Slide01 from "@/content/slides/01-title.mdx";
import Slide02 from "@/content/slides/02-section-getting-started.mdx";
import Slide03 from "@/content/slides/03-tip-claude-md.mdx";
import Slide04 from "@/content/slides/04-tip-slash-commands.mdx";
import Slide05 from "@/content/slides/05-section-workflow.mdx";
import Slide06 from "@/content/slides/06-tip-subagents.mdx";
import Slide07 from "@/content/slides/07-tip-keyboard-shortcuts.mdx";
import Slide08 from "@/content/slides/08-section-advanced.mdx";
import Slide09 from "@/content/slides/09-tip-custom-tools.mdx";
import Slide10 from "@/content/slides/10-closing.mdx";

export default function Home() {
  return (
    <Deck>
      <Slide01 />
      <Slide02 />
      <Slide03 />
      <Slide04 />
      <Slide05 />
      <Slide06 />
      <Slide07 />
      <Slide08 />
      <Slide09 />
      <Slide10 />
    </Deck>
  );
}
