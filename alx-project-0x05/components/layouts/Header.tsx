import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <Link href="/" className="text-xl font-bold">
        Splash App
      </Link>
      {/* Button Group */}
      <div className="flex gap-4">
        {!["/counter-app"].includes(pathname) ? (
          <>
            <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
            <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
          </>
        ) : (
          <p className="font-semibold text-lg">Current count : {count}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
