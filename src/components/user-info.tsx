import { useEffect } from "react";
import useUser from "../hooks/use-user";

export function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser();

  useEffect(() => {
    getUser("luis");
  }, [getUser]);

  if (userRequestStatus === "loading") {
    return <div>Carregando usuário...</div>;
  }

  return (
    <ul>
      <li>Nome: {user?.name}</li>
      <li>Username (id): {user?.id}</li>
    </ul>
  );
}
