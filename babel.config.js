module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
  };
};

/*importar npm install react-native-dotenv, esse modulo deixa importar as variaveis de ambiente do arquivo .env*/