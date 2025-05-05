import Sidebar from "@/app/services/components/Sidebar";

export default function ServicesLayout({ children }) {
  return (
    <div className="relative my-10 flex">
      <Sidebar />
      <main className="flex-1 px-6 py-8">{children}</main>
    </div>
  );
}
