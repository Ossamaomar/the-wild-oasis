/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const {checkoutMutationFn, isCheckingOut} = useCheckout();

  return (
    <Button variation="primary" size="small" disabled={isCheckingOut} onClick={() => checkoutMutationFn(bookingId)}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
