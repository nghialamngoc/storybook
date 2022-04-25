module.exports = componentName => ({
  content: `
  export { default } from './${componentName}';
  export { ${componentName}Props } from './${componentName}.types';
`,
  extension: `.ts`
});
