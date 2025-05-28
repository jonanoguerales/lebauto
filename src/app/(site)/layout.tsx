import Footer from "@/components/Footer";
import GlobalChatButton from "@/components/GlobalChatButton";
import Navbar from "@/features/header/components/Nvbar";
import "@/styles/global.css";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
      <GlobalChatButton /> 
    </>
  );
}
