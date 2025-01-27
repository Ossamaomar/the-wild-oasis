/* eslint-disable react/prop-types */
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";


function Stats({ bookings, confirmedStays, numOfDays, numOfCabins }) {
  
  const numOfBookings = bookings?.length;

  const sales = formatCurrency(
    bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0)
  );
  
  const checkIns = confirmedStays?.length

  const occupancy = Math.round((confirmedStays?.reduce((acc, cur) => acc+ cur.numNights,0) / (numOfDays * numOfCabins) * 100)) + '%';
  console.log(occupancy)
  return (
    <>
      <Stat
        title={"Bookings"}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
        value={numOfBookings}
      />

      <Stat
        title={"Sales"}
        color={"green"}
        icon={<HiOutlineBanknotes />}
        value={sales}
      />

      <Stat
        title={"Check ins"}
        color={"indigo"}
        icon={<HiOutlineCalendar />}
        value={checkIns}
      />

      <Stat
        title={"Occupancy Rate"}
        color={"yellow"}
        icon={<HiOutlineChartBar />}
        value={occupancy}
      />
    </>
  );
}

export default Stats;
