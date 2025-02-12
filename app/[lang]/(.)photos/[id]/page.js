import { Modal } from "@/components/Modal/Modal";
import { PhotoDetails } from "@/components/PhotoDetails/PhotoDetails";
import React from "react";

export default function PhotoModalPage({ params: { id, lang } }) {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
}
