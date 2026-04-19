import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-32">
        <h1 className="mb-2 font-serif text-4xl">Dashboard</h1>
        <p className="text-muted-foreground">
          Your API key, credits balance, and usage charts land here (Week 4). Sign-in (email OTP)
          is coming in Week 2.
        </p>
      </main>
      <Footer />
    </div>
  );
}
