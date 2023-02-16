import { useUser } from "../../hooks/useUser";

const Home = () => {
  const user = useUser();

  return (
    <div>
      <h1>Este es el home</h1>
    </div>
  );
};

export default Home;
