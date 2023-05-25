import { Modal, Card } from "./style";

export function RenderModal({ children }: any) {
  return (
    <Modal>
      <Card>{children}</Card>
    </Modal>
  );
}
