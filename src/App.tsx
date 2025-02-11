import EditableMessage from "./components/EditableMessage";
import type { FrmDirMedicalProps } from "./types/FrmOptions.types";

export default function App({
  initialMessage,
}: FrmDirMedicalProps) {
  return (
      <EditableMessage initialMessage={initialMessage} />
  );
}