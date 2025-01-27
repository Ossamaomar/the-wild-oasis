import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBookingMutateFn } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Booking succesfully deleted !!!");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteBookingMutateFn };
}
