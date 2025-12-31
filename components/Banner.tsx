import Link from "next/link";

export default function Banner() {
  return (
    <div 
      className="w-full md:h-[50px] h-[40px] flex flex-col items-center justify-center sticky top-0 z-50 px-4 gap-[30px]"
      style={{
        background: 'linear-gradient(var(--primary-green) 0%, #00ff8800 149%)',
        overflow: 'clip',
        flex: 'none',
        order: -1000,
      }}
    >
      <div className="text-center">
        <p className="text-sm md:text-base font-medium flex items-center justify-center flex-wrap gap-1" style={{ color: 'var(--banner-text)' }}>
          <span className="md:block hidden">The Future is Conversational. Are you ready to lead?</span>

          <span className="inline-flex items-center whitespace-nowrap">
            🚀
            <Link 
              href="#contact" 
              className="underline font-semibold ml-1"
              style={{ color: 'var(--banner-text)' }}
            >
              Start Building Readiness
            </Link>
            <span className="ml-1">→</span>
          </span>
        </p>
      </div>
    </div>
  );
}
