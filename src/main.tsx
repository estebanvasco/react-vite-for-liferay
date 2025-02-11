import r2wc from "@r2wc/react-to-web-component";
import EditableMessage from "./components/EditableMessage";

customElements.define(
  'frm-dir-medical',
  r2wc(EditableMessage, {
    props: {
      initialMessage: "string",
    },
  })
);
