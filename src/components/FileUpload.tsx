import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

function FileUpload({ children, handleFileSelection }: any) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
    if (handleFileSelection) handleFileSelection(selectedFile);
  };

  return (
    <Box>
      <form>
        <input
          type="file"
          accept=".zip"
          id="upload"
          onChange={handleFileChange}
          hidden
        />
        <label
          htmlFor="upload"
          onClick={() => {
            document.getElementById('upload')!.click();
          }}
        >
          {children}
        </label>
      </form>
    </Box>
  );
}

export default FileUpload;
