import { useParams } from "react-router-dom";

function ResponsiveComponent() {
  let { userId } = useParams();
  return (
    <>
      <h1 className="text-7xl">Your user id is : {userId}</h1>
    </>
  );
}

export default ResponsiveComponent;
