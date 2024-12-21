import { Clients } from "@/components/Clients";
import { Discounts } from "@/components/Discounts";
import { Finance } from "@/components/Fincance";
import { FinPay } from "@/components/FinPay";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Perks } from "@/components/Perks";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Services />
      <Finance />
      <Discounts />
      <FinPay />
      <Perks />
      <Clients />
      <Footer />
    </div>
  );
}
