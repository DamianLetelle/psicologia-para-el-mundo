import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/sections/Hero";
import ComoTrabajo from "@/components/sections/ComoTrabajo";
import Psicoeducacion from "@/components/sections/Psicoeducacion";
import Herramientas from "@/components/sections/Herramientas";
import Inversion from "@/components/sections/Inversion";
import SobreCecilia from "@/components/sections/SobreCecilia";
import LlamadoFinal from "@/components/sections/LlamadoFinal";
import SiteFooter from "@/components/SiteFooter";

// La home solo compone las piezas. Cada sección vive en su propio archivo.
export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ComoTrabajo />
      <Psicoeducacion />
      <Herramientas />
      <Inversion />
      <SobreCecilia />
      <LlamadoFinal />
      <SiteFooter />
    </main>
  );
}
