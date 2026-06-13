"use client";

import Image from "next/image";
import { Dialog } from "radix-ui";
import { X } from "lucide-react";

// Card for a team member or coach. Click opens a profile dialog with the larger
// avatar, focus areas, and bio (PRD §6.3, §6.4). Falls back to an initials avatar
// when no photo exists, and to a "coming soon" line when no bio exists yet.

type Person = {
  name: string;
  initials: string;
  focusAreas: string[];
  bio?: string;
  photo?: string;
};

function Avatar({
  name,
  initials,
  photo,
  sizeClass,
  textClass,
  sizes,
}: {
  name: string;
  initials: string;
  photo?: string;
  sizeClass: string;
  textClass: string;
  sizes: string;
}) {
  if (photo) {
    return (
      <div
        className={`relative overflow-hidden rounded-full ring-1 ring-border ${sizeClass}`}
      >
        <Image
          src={photo}
          alt={name}
          fill
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-secondary font-heading font-bold text-foreground ring-1 ring-border ${sizeClass} ${textClass}`}
    >
      {initials}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap justify-center gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function MemberCard({ name, initials, focusAreas, bio, photo }: Person) {
  const firstName = name.split(" ")[0];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group flex h-full w-full cursor-pointer flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Avatar
            name={name}
            initials={initials}
            photo={photo}
            sizeClass="size-20"
            textClass="text-2xl"
            sizes="80px"
          />
          <span className="font-heading text-lg font-semibold text-foreground">
            {name}
          </span>
          {focusAreas.length > 0 ? (
            <span className="flex flex-wrap justify-center gap-1.5">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </span>
          ) : null}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-xl duration-200 focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <Dialog.Close className="absolute right-4 top-4 inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          <div className="flex flex-col items-center gap-4 text-center">
            <Avatar
              name={name}
              initials={initials}
              photo={photo}
              sizeClass="size-28"
              textClass="text-3xl"
              sizes="112px"
            />
            <Dialog.Title className="font-heading text-xl font-semibold text-foreground">
              {name}
            </Dialog.Title>
            <Chips items={focusAreas} />
            <Dialog.Description className="leading-relaxed text-muted-foreground">
              {bio ?? `More about ${firstName} coming soon.`}
            </Dialog.Description>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
