import { useState, useEffect } from 'react';
import UserPage from "./layouts/MainPage";
import getCurrentUser from "@/firebase/activeUser";
import { User as FirebaseUser } from "@/interfaces/index";

const App = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getCurrentUser();
        setUserData((prevUserData) => {
          if (prevUserData) {
            // Si prevUserData es un array, hagamos una copia
            if (Array.isArray(prevUserData)) {
              return [...prevUserData, user];
            }
            // Si prevUserData es un objeto, combinemos las propiedades
            return { ...prevUserData, ...user };
          } else {
            return user;
          }
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      }
    };

    fetchUserData();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="my-6">
      {/* Corrigiendo el error de tipo al pasar la prop 'user' */}
      <UserPage user={userData} />
    </div>
  );
};

export default App;
