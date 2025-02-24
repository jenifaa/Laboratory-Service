import Navbar from "./Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavbarWrapper = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return <Navbar user={user} />;
};

export default NavbarWrapper;
