import { ReactNode, Children } from "react";

interface StackingCardsProps {
  children: ReactNode;
  /** Vertical offset between stacked cards in px */
  offset?: number;
  /** Top sticky offset in px (e.g., navbar height) */
  top?: number;
  className?: string;
}

/**
 * StackingCards
 * Each child becomes a sticky panel. As the user scrolls,
 * cards stack on top of each other (each one offset slightly down)
 * and then the whole stack scrolls away together once the section ends.
 */
const StackingCards = ({
  children,
  offset = 16,
  top = 96,
  className = "",
}: StackingCardsProps) => {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className="sticky"
          style={{
            top: `${top + i * offset}px`,
            marginBottom: "1.5rem",
            zIndex: i + 1,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StackingCards;