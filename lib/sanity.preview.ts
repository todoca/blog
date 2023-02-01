"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(
    `no se puede visualizar una preview sino has iniciado sesión`
  );
}

if (!projectId || !dataset) {
  throw new Error(
    `No existe el project Id o el dataset. Revisa tu sanity.json o tu .env`
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
