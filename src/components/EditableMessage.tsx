import React, { useState } from "react";

interface EditableMessageProps {
  initialMessage?: string;
}

const EditableMessage: React.FC<EditableMessageProps> = ({ initialMessage = "" }) => {
  const [message, setMessage] = useState(initialMessage);

  return (
    <div>
      <h1>{message}</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a new message"
      />
    </div>
  );
};

export default EditableMessage;
