import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUserData } from "../../services/apiAuth";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUserMutateFn, isLoading: isUpdating } = useMutation({
    mutationFn: ({ fullname, password,avatar }) => updateUserData({ fullname, password,avatar }),
    onSuccess: () => {
      toast.success("User data succuesfully updated");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return {isUpdating, updateUserMutateFn}
}

export default useUpdateUser;
