import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router"
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
    const [searchParams] = useSearchParams();
    const numOfDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));

    const queryDate = subDays(new Date(), numOfDays).toISOString();

    const {data:stays, isLoading} = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ['stays', `last-${numOfDays}`]
    })

    const confirmedStays = stays?.filter(stay => stay.status === 'checked-in' || stay.status === 'checked-out');

    return {stays, confirmedStays, isLoading, numOfDays};
}