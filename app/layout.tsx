import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Using shadcn!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
