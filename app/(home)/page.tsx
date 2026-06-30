import Link from 'next/link';
import Image from 'next/image';
import iconSvg from './icon.svg';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] flex-1 px-4 select-none">
      <div className="mb-6 animate-fade-in">
        <Image 
          src={iconSvg} 
          alt="Logo" 
          width={80} 
          height={80} 
          className="mx-auto drop-shadow-sm"
          priority
        />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-3 text-fd-foreground">
        Coming Soon
      </h1>
      
      <p className="max-w-md text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
        fxManager is soon available,<br/>docs won't be of any use
      </p>

      <Link 
        href="/docs" 
        className="inline-flex h-10 items-center justify-center rounded-md bg-fd-primary px-6 font-medium text-fd-primary-foreground shadow transition-colors hover:bg-fd-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring"
      >
        Explore Documentation →
      </Link>
    </div>
  );
}
