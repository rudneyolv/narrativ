import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "max-len": [
        "warn", // ou "error" se preferir gerar erro
        {
          code: 300, // ajuste para o limite de caracteres por linha (aqui está 120)
          ignoreUrls: true, // se você quiser ignorar URLs longas
          ignoreComments: false, // se você quiser manter o limite de caracteres para comentários
          ignoreStrings: false, // se você quiser ignorar a verificação para strings
        },
      ],
    },
  },
];

export default eslintConfig;
