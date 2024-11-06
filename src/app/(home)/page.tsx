import "./styles.scss";
import { HeroBanner } from "@/app/(home)/_components/HeroBanner";
import { Footer } from "@/components/Footer";

export default async function Home() {
  return (
    <div className={"container mx-auto"}>
      <HeroBanner />
      <h1>Home page</h1>
      <Footer />
    </div>
  );
}
