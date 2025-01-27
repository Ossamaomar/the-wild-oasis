import Button from "./../../ui/Button";
import Modal from "./../../ui/Modal";

import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>

        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open opens="cabin-table">
          <Button>Open cabins table</Button>
        </Modal.Open>

        <Modal.Window name="cabin-table">
          <CabinTable  />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isModal, setIsModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsModal((show) => !show)}>Add new cabin</Button>
//       {isModal && (
//         <Modal onCloseModal={() => setIsModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddCabin;
