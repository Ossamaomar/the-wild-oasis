import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate: signupMutationFn, isLoading} = useMutation({
        mutationFn: ({fullname, email, password}) => signup({fullname, email, password}),
        onSuccess: () => {
            toast.success("Account successfully created!. Please verify the new accountfrom the user's email address")
        },
        onError: (err) => {
            toast.error("Invalid credentials to signup");
            console.log(err.message)
        }
    })

    return {signupMutationFn, isLoading};
}

