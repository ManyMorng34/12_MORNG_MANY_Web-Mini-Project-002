import CardComponent from "@/components/card";
import Sidebar from "@/components/sidebar";
import Favorite from "@/components/ui/favorite";
import NavBar from "@/components/ui/navbar";

export default async function TodoLayout({ children }) {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="flex mt-5">
          <NavBar />
        </div>
        {/* <h2 className="mt-10">HRD Design</h2> */}

        <div className="flex items-center justify-between text-xs font-semibold text-gray-400 uppercase">
          <span>Nextjs</span>
          <Favorite />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
