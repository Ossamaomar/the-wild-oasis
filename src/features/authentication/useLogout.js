import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout } from "../../services/apiAuth"
import toast from "react-hot-toast"
import { replace, useNavigate } from "react-router"

function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate: logoutMutateFn, isLoading} = useMutation({
        mutationFn: logout,
        onSuccess: () => { 
            toast.success("User successfully logged out")
            queryClient.removeQueries();
            navigate("/login", {replace: true});
        },
        onError: () => {
            toast.error("Error during logout!!!")
        }
    })

    return { logoutMutateFn, isLoading}
}

export default useLogout
