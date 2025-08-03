// app/file_upload.tsx
"use client";

import React, { useState } from "react";
import { uploadData } from "@aws-amplify/storage";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const uploadFile = async () => {
    if (!file) return;
    try {
      await uploadData({
        key: file.name,
        data: file,
        options: { contentType: file.type },
      }).result;
      alert("Upload successful!");
    } catch (err: any) {
      alert("Error uploading file: " + err.message);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".epub"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button onClick={uploadFile} disabled={!file}>
        Upload EPUB
      </button>
    </div>
  );
}
