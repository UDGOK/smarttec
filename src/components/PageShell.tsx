import Navigation from "./sections/Navigation";
import Footer from "./sections/Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-[6.5rem] sm:pt-[6.75rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageShell;