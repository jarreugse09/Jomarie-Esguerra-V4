import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-10 w-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
