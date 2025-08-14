import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      // Ошибка, если точка с запятой отсутствует
      semi: ['error'],
      // Ошибка, если для строк используются не одинарные кавычки
      quotes: ['error', 'single'],
      // Ошибка, если используется конкатенация вместо шаблонных строк
      'prefer-template': ['error'],
      // Ошибка, если коллбэк — не стрелочная функция
      'prefer-arrow-callback': ['error'],
      // Ошибка, если в одной ветке есть return, а в другой нет
      'consistent-return': 'error',
      // Ошибка, если интерфейс пустой (кроме случаев с extends)
      '@typescript-eslint/no-empty-interface': [
        'error',
        { allowSingleExtends: true },
      ],
      // Ошибка, если импорт типа без `type`
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
    },
  }),
];

export default eslintConfig;
