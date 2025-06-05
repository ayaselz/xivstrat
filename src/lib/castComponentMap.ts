
import DeepCutCast from '@/pages/07/m5s/_components/DeepCutCast.astro'
import FlipToXSideCast from '@/pages/07/m5s/_components/FlipToXSideCast.astro'
import XSnapTwistAndDropTheNeedleCast from '@/pages/07/m5s/_components/XSnapTwistAndDropTheNeedleCast.astro';
import CelebrateGoodTimesCast from '@/pages/07/m5s/_components/CelebrateGoodTimesCast.astro';
import DiscoInfernalCast from '@/pages/07/m5s/_components/DiscoInfernalCast.astro';
import InsideOutOrOutsideInCast from '@/pages/07/m5s/_components/InsideOutOrOutsideInCast.astro';
import EnsembleAssembleCast from '@/pages/07/m5s/_components/EnsembleAssembleCast.astro';

export const castComponentMap: Record<string, typeof DeepCutCast> = {
  DeepCut: DeepCutCast,
  FlipToXSide: FlipToXSideCast,
  XSnapTwistAndDropTheNeedle: XSnapTwistAndDropTheNeedleCast,
  CelebrateGoodTimes: CelebrateGoodTimesCast,
  DiscoInfernal: DiscoInfernalCast,
  InsideOutOrOutsideIn: InsideOutOrOutsideInCast,
  EnsembleAssemble: EnsembleAssembleCast,
};
