const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/,  // Selecione os tipos de arquivos que você quer copiar
        type: 'asset/resource',  // Copia o arquivo para o diretório de saída
        generator: {
          filename: 'assets/[name][ext][query]',  // Define o caminho final para os arquivos
        },
      },
    ],
  },
};