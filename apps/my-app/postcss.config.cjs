module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {
      configPath:
        process.env.NX_TASK_TARGET_TARGET === 'storybook'
          ? './libs/styled-system/panda.config.ts'
          : '../../libs/styled-system/panda.config.ts',
    },
  },
};
