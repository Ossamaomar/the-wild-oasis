import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "../../services/apiAuth"
import { useNavigate } from "react-router"
import toast from "react-hot-toast";


export function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const {mutate: loginMutationFn, isLoading} = useMutation({
        mutationFn: ({email, password}) => login({email, password}),
        onSuccess: (user) => {
            console.log(user)
            queryClient.setQueryData(['user'], user.user)
            toast.success(`Welcome ${user.user.email}`)
            navigate("/", {replace: true})
        },
        onError: (err) => {
            toast.error("Provided email or password are not correct");
            console.log(err.message);
        }

    })


    return {loginMutationFn, isLoading}
}

export default useLogin
