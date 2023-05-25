import { Modal,Card } from "./style";

export function RenderModal({children}) {
  return (
    <Modal>
      <Card>
        {children}
      </Card>
    </Modal>
  );
}

