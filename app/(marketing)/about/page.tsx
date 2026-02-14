import Image from "next/image";

const stats = [
    {
        id: "01",
        metric: "400+",
        impact: "Brand Transformed",
    },
    {
        id: "02",
        metric: "100%",
        impact: "Average Campaign ROI",
    },
    {
        id: "03",
        metric: "100%",
        impact: "Client Retention Rate",
    },
]

const logos = [
    {
        company: "Layers",
        src: "/about/layers.svg",
        width: 146,
        height: 48,
    },
    {
        company: "Sisyphus",
        src: "/about/sisyphus.svg",
        width: 169,
        height: 48,
    },
    {
        company: "Circooles",
        src: "/about/circooles.svg",
        width: 183,
        height: 48,
    },
    {
        company: "Catalog",
        src: "/about/catalog.svg",
        width: 180,
        height: 48,
    },
    {
        company: "Quotient",
        src: "/about/quotient.svg",
        width: 187,
        height: 48,
    },
]

export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="overflow-hidden max-w-145 max-sm:h-[45vh]">
          <Image
            className="object-center"
            src="/about/decor-img.jpg"
            alt="Decorative image"
            width={580}
            height={560}
          />
        </div>
        <div>
          <p className="text-sz-16 leading-6 font-semibold text-brand font-nuni mt-8">We&apos;ve helped hundreds of companies</p>
          <p className="text-sz-48 tracking-tight md:leading-15 font-grotesk max-w-[20ch] mb-16">We&apos;re only just getting started on our journey</p>

          <div className="grid grid-cols-2">
            {stats.map((stat) => (
                <div key={stat.id}>
                    <p className="text-[72px]">{stat.metric}</p>
                    <p>{stat.impact}</p>
                </div>
            ))}
          </div>
        </div>

        <div>
            <p>
               From startups to the world&apos;s largest companies 
            </p>
            <div>
                {logos.map((logo) => (
                    <Image
                        key={logo.company}
                        src={logo.src}
                        alt={logo.company}
                        width={logo.width}
                        height={logo.height}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
