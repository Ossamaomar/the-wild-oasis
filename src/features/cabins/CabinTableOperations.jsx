import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All cabins" },
          { value: "no-discount", label: "Cabins with no discount" },
          { value: "with-discount", label: "Cabins with discount" },
        ]}
      />

      <SortBy options={[
        {
            value: "name-asc",
            label: "Sort by name (A-Z)"
        },
        {
            value: "name-desc",
            label: "Sort by name (Z-A)"
        },
        {
            value: "regularPrice-asc",
            label: "Sort by price (low first)"
        },
        {
            value: "regularPrice-desc",
            label: "Sort by price (high first)"
        },
        {
            value: "maxCapacity-asc",
            label: "Sort by max. capacity (low first)"
        },
        {
            value: "maxCapacity-desc",
            label: "Sort by max. capacity (high first)"
        },
      ]} />
    </TableOperations>
  );
}

export default CabinTableOperations;
