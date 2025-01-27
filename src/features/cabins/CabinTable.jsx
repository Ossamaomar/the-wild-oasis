import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "./../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router";

function CabinTable() {
  const { cabins } = useCabins();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('discount') || 'all';

  // Filtering
  let filteredCabins;
  if(filterValue === 'all') filteredCabins = cabins;
  if(filterValue === 'no-discount') filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  if(filterValue === 'with-discount') filteredCabins = cabins.filter(cabin => cabin.discount !== 0);
  

  // Sorting
  const sortBy = searchParams.get('sortBy') || 'name-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins?.sort((a, b) => modifier*(a[field] - b[field]));

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div>Img</div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Delete</div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
