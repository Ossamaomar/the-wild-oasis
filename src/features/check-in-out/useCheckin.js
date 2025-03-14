import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


export function useCheckin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate: checkinMutationFn, isLoading:isCheckingIn} = useMutation({
        mutationFn: ({bookingId, breakfast}) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true,
            ...breakfast
        }),
        onSuccess: (data) => {
            toast.success(`Booking ${data.id} succuesfully checked in`)
            queryClient.invalidateQueries({active: true})
            navigate('/');
        },
        onError: (err) => toast.error(err.message),
    })

    return {checkinMutationFn, isCheckingIn}
}