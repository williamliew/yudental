import { Section } from "@/components/ui/Section";
import { HOME_PROCESS_TILES } from "@/lib/tile-images";
import Image from "next/image";
import Link from "next/link";

export function ProcessSteps() {
  return (
    <Section className="text-center" ariaLabelledBy="process-heading">
      <header>
        <h2 id="process-heading" className="font-sans text-2xl font-bold text-navy md:text-3xl">
          Your New Denture Journey
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-grey-dark">
          New dentures generally require around six appointments and can often be completed within
          approximately two weeks, depending on your individual treatment needs.
        </p>
      </header>
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {HOME_PROCESS_TILES.map((step, index) => (
          <li key={step.id} className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-teal/20 bg-white p-3 shadow-sm md:h-28 md:w-28 lg:h-32 lg:w-32">
              <Image
                src={step.src}
                alt=""
                width={step.width}
                height={step.height}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="mt-4 max-w-[16rem] text-base font-semibold leading-snug text-navy md:text-lg">
              <span className="text-teal">{index + 1}.</span> {step.label}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-grey-mid text-balance">
        Visit our clinic: <Link href="/book/">Book online</Link>.{" "}
        <span aria-hidden="true">|</span> Referrals for practices:{" "}
        <Link href="/dental-lab-services/">For Dentists</Link>.
      </p>
    </Section>
  );
}
