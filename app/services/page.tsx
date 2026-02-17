import { Heading } from "@/components/Heading";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Filters } from "@/components/Filters";
import { ServiceList } from "@/components/ServiceList";
import { ServicesGrid } from "@/components/ServicesGrid";

export default function Services() {
  return (
    <section>
      <Heading
        head="Our Services"
        main="Services We Offer"
        desc="Learn more about the services and the team behind it."
      />
      <VideoPlayer 
        src="https"
        poster="services/video-thumbnail.png" 
      />
      <Filters />
      <ServiceList />
      <Heading
        head="Our values"
        main="How we work at SpryOne"
        desc="Our shared values keep us connected and guide us as one team."
        variant="sub"
      />
      <ServicesGrid />
    </section>
  )
}