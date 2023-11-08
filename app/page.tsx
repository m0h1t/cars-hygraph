import VideoCarousel from "@/components/VideoCarousel";
import { getCarousels } from '@/libs/actions/carousel.actions';

type Color = {
  hex: string;
}

type Asset = {
  url: string;
}

type Carousel = {
  id: string;
  position: string;
  subtitleText: string;
  titleColor: Color;
  titleText: string;
  carSlug: string;
  background: Asset
}

export default async function Home() {
  const carousels: Carousel[] = (await getCarousels());
  return (
    <main style={{fontFamily:"Inter", fontWeight:"500"}}>
      <VideoCarousel carousels={carousels} />
    </main>
  )
}