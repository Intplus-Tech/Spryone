import { Heading } from "@/components/Heading";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Heading />
        {children}
    </section>
  );
}
