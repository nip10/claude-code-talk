import type { MDXComponents } from "mdx/types";
import {
  TitleSlide,
  SectionSlide,
  TipSlide,
  RichTipSlide,
  ClosingSlide,
} from "@/components/slides";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    TitleSlide,
    SectionSlide,
    TipSlide,
    RichTipSlide,
    ClosingSlide,
    ...components,
  };
}
