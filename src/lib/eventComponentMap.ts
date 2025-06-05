
import MoveToCenterEvent from "@/pages/07/m5s/_components/MoveToCenterEvent.astro";
import PlayXSideCast from "@/pages/07/m5s/_components/PlayXSideCast.astro";

export const eventComponentMap: Record<string, typeof MoveToCenterEvent> = {
  MoveToCenter: MoveToCenterEvent,
  PlayXSide: PlayXSideCast,
};
