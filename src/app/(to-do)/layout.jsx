import Logo from "@/components/logo";
import Sidebar from "@/components/sidebar";
import NavBar from "@/components/ui/navbar";

export default function todoLayout({ children }) {
  return (
    <div className="text-charcoal">
      <div className="container mx-auto my-12">
        <Logo />
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
