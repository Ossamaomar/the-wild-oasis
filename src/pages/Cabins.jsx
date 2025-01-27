import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import useCabins from "../features/cabins/useCabins";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  const {isLoading} = useCabins();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <CabinTable />
            <AddCabin />
          </>
        )}
      </Row>
    </>
  );
}

export default Cabins;
