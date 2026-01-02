// вставь свой Public API Key
// builderConfig.js или в любом месте, где инициализируешь Builder
import { Builder } from '@builder.io/react';
import Button from './Button'; // путь к твоему компоненту

Builder.registerComponent(Button, {
  name: 'Button', // имя компонента в редакторе
  inputs: [
    {
      name: 'children',
      type: 'text',
      defaultValue: 'Нажми меня',
      required: true,
    },
    {
      name: 'bold',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Сделать текст жирным',
    },
    {
      name: 'className',
      type: 'text',
      defaultValue: '',
      helperText: 'Дополнительные классы CSS',
    },
  ],
});
