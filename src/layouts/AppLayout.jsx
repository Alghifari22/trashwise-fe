import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

function AppLayout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      <main className="flex-1">
        <Header title={title} />

        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
