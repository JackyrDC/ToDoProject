import { StickyNavbar } from "@/components/StickyNavbar";
import { CarouselDefault } from "@/components/homeCarrousel";
import { User } from "@/interfaces/index";

const UserPage = (user: User | boolean) => {
  if (!user) {
    return (
      <div>
        <StickyNavbar />
        <CarouselDefault />
      </div>
    );
  } else {
    console.log(user);
    return (
      <div>
        <StickyNavbar />
      </div>
    );
  }
};

export default UserPage; 
