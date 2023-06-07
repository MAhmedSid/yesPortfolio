module.exports = {
    pluginSearchDirs: false,
    plugins: [require('prettier-plugin-tailwindcss')],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
    
  };