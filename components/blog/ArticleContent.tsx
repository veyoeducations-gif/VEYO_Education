import Icon from "@/components/ui/Icon";
import type { ContentBlock } from "./posts-data";

export default function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="text-headline-lg text-primary-container !mt-12 !mb-2"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="text-body-lg text-on-surface-variant leading-relaxed">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={index} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="check_circle" className="text-secondary mt-1 shrink-0" />
                    <span className="text-body-lg text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="my-6 pl-6 border-l-4 border-secondary bg-secondary/5 py-4 pr-4 rounded-r-xl italic text-body-lg text-on-surface-variant"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
