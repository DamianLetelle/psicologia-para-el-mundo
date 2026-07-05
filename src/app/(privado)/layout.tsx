import AuthProvider from "@/components/auth/AuthProvider";

// Área privada: el contexto de sesión vive solo acá. El sitio público no carga nada de esto
// (límites claros entre las partes, P9).
export default function PrivadoLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
