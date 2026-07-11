import Image from "next/image";

const base = "/assets/images/design";

const wordmarks = [
  { title: "Dark", path: `${base}/256x56/png/dark.png` },
  { title: "Light", path: `${base}/256x56/png/light.png` },
  { title: "Primary", path: `${base}/256x56/png/primary.png` },
  { title: "Secondary", path: `${base}/256x56/png/secondary.png` },
];

const logos = [
  { title: "Dark", path: `${base}/512x512/png/dark_logo.png` },
  { title: "Light", path: `${base}/512x512/png/light_logo.png` },
  { title: "Primary", path: `${base}/512x512/png/primary_logo.png` },
  { title: "Secondary", path: `${base}/512x512/png/secondary_logo.png` },
];

const verticals = [
  { title: "Dark Vertical", path: `${base}/512x512/png/dark_vertical_logo_text.png` },
  { title: "Light Vertical", path: `${base}/512x512/png/light_vertical_logo_text.png` },
  { title: "Primary Vertical", path: `${base}/512x512/png/primary_vertical_logo_text.png` },
  { title: "Secondary Vertical", path: `${base}/512x512/png/secondary_vertical_logo_text.png` },
];

const colorVars = [
  { name: "Background", css: "--color-fd-background" },
  { name: "Foreground", css: "--color-fd-foreground" },
  { name: "Primary", css: "--color-fd-primary" },
  { name: "Primary Foreground", css: "--color-fd-primary-foreground" },
  { name: "Secondary", css: "--color-fd-secondary" },
  { name: "Accent", css: "--color-fd-accent" },
];

export default function DesignPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Design</h1>

      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Logos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {logos.map((l) => (
            <div key={l.path} className="flex flex-col items-center gap-3">
              <div className="bg-white dark:bg-black p-4 rounded-lg shadow-sm">
                <Image src={l.path} alt={l.title} width={128} height={128} />
              </div>
              <div className="text-sm text-muted-foreground">{l.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Wordmarks</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
          {wordmarks.map((w) => (
            <div key={w.path} className="flex items-center gap-4">
              <Image src={w.path} alt={w.title} width={256} height={56} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Vertical / Wordmark combos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {verticals.map((v) => (
            <div key={v.path} className="flex items-center gap-4">
              <Image src={v.path} alt={v.title} width={128} height={128} />
              <div className="text-sm text-muted-foreground">{v.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-medium mb-4">Palette</h2>
        <div className="flex flex-wrap gap-4">
          {colorVars.map((c) => (
            <div key={c.css} className="w-40">
              <div
                className="h-16 rounded-md border"
                style={{ backgroundColor: `var(${c.css})` }}
              />
              <div className="mt-2 text-sm">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.css}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
