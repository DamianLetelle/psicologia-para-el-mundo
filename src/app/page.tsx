import Hero from "@/components/sections/Hero";
import ComoTrabajo from "@/components/sections/ComoTrabajo";
import Psicoeducacion from "@/components/sections/Psicoeducacion";
import Herramientas from "@/components/sections/Herramientas";
import Inversion from "@/components/sections/Inversion";
import SobreCecilia from "@/components/sections/SobreCecilia";
import LlamadoFinal from "@/components/sections/LlamadoFinal";

// La home solo compone las piezas. El menú y el pie viven en el layout global.
export default function Home() {
  return (
    <main>
      <Hero />
      <ComoTrabajo />
      <Psicoeducacion />
      <Herramientas />
      <Inversion />
      <SobreCecilia />
      <LlamadoFinal />
    </main>
  );
}
