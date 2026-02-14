type HeaderProps = {
  head: string
  main: string
  desc: string  
};

export const Heading = ({ head, main, desc  }: HeaderProps) => {
  return (
    <section className="my-10 md:my-20 text-center">
      <span className="text-sz-20 text-brand leading-none tracking-wide font-grotesk mb-2.5 block">
        {head}
      </span>
      <h1 className="text-sz-48 leading-none tracking-wide font-grotesk font-medium mb-3.5">
        {main}
      </h1>
      <p className="text-sz-18 md:leading-6 font-nuni">
        {desc}
      </p>
    </section>
  )
}
