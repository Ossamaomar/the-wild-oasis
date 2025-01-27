import { HiArrowRightOnRectangle } from "react-icons/hi2"
import ButtonIcon from "../../ui/ButtonIcon"
import useLogout from "./useLogout"

function Logout() {
    const {logoutMutateFn, isLoading} = useLogout()


    return (
        <ButtonIcon disabled={isLoading} onClick={logoutMutateFn}>
            <HiArrowRightOnRectangle />
        </ButtonIcon>
    )
}

export default Logout
