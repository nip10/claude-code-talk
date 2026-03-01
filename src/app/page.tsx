import Deck from "@/components/Deck";
import TitleSlide from "@/components/slides/TitleSlide";
import SectionSlide from "@/components/slides/SectionSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";
import RichTipSlide from "@/components/slides/RichTipSlide";
import { getMergedTipsPresentation } from "@/lib/mergedTips";

export default function Home() {
  const { groups, totalTips } = getMergedTipsPresentation();

  return (
    <Deck>
      <TitleSlide
        title="Claude Code Tips & Tricks"
        subtitle="Complete slide extraction from merged research notes"
        presenter="Diogo Cardoso"
        date="2026"
      />

      {groups.flatMap((group, groupIndex) => [
        <SectionSlide
          key={`section-${group.title}`}
          number={groupIndex + 1}
          title={group.title}
          description={`${group.description} (${group.tips.length} slides)`}
        />,
        ...group.tips.map((tip) => (
          <RichTipSlide
            key={`${group.title}-${tip.sourceSection}-${tip.title}`}
            title={tip.title}
            description={tip.description}
            tags={tip.tags}
            sources={tip.sources}
            blocks={tip.blocks}
            sourceSection={tip.sourceSection}
            uncertain={tip.uncertain}
          />
        )),
      ])}

      <ClosingSlide
        title="Extraction Complete"
        takeaways={[
          `All merged tips were converted into slides (${totalTips} total).`,
          "Section layout was reorganized for workshop navigation.",
          "You can now trim, reorder, and polish as needed.",
        ]}
        contact="Source: output/MERGED-tips-and-tricks.md"
      />
    </Deck>
  );
}
