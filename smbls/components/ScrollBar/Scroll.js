export const ScrollbarStyles = {
  Tag: 'style',
  textContent: `
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: rgb(190, 190, 190);
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 40px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgb(107, 107, 107);
    }

    ::-webkit-scrollbar-button {
      background: #555;
      height: 20px;
      width: 12px;
    }

    /* Up*/
    ::-webkit-scrollbar-button:vertical:start {
      background: url(https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fidfec9c6a/20a055e6-c6db-49a3-bc73-f147e987c443-ab008b53-faf3-46df-afa1-6241b5b2b792-30cf3bab-115d-4615-8b62-063de20b9ba7.svg) center no-repeat;
      background-size: contain;
    }

    /* Down*/
    ::-webkit-scrollbar-button:vertical:end {
      background: url(https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/fi4d9bc720/81379a7f-7231-4c2d-8b92-15eec8991a72-38f61ef4-3216-4b7e-bda5-17ac3cac765d-e426a835-850a-4565-bd3c-0530382d1846.svg) center no-repeat;
      background-size: contain;
    }

    /* Responsive */
    @media (max-width: 1600px) {
      body::-webkit-scrollbar {
        width: 12px;
      }
    }  

    @media (max-width: 1024px) {
      body::-webkit-scrollbar {
        width: 6px;
      }
    }

    @media (max-width: 768px) {
      body::-webkit-scrollbar {
        width: 3px;
      }
    }
  `,
};