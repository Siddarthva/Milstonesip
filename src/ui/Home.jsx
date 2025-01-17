import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="font-semibold text-xl md:text-3xl mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu">Continue ordering, {userName}</Button>
      )}
    </div>
  );
}

export default Home;
