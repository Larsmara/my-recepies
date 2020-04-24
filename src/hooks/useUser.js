import { useFirestoreDocData, useFirestore, useAuth } from "reactfire";

export const UserType = {
  name: String,
  uid: String,
};

export const useUserRef = () => {
  const authUser = useAuth().currentUser?.uid;
  return useFirestore().collection("users").doc(authUser);
};

export const useUser = () => {
  const userRef = useUserRef();
  const { filledOut, ...dbUser } = useFirestoreDocData(userRef);
  return filledOut ? dbUser : null;
};

export const useUserById = (id) => {
  const user = useFirestoreDocData(
    useFirestore()
      .collection("users")
      .doc(id || "Not a valid id")
  );
  return id ? user : null;
};
