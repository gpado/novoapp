import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function TaxiScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/images/onibus-eletricos.jpg')} // Substitua pelo caminho correto da imagem
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Ônibus Elétricos em São Paulo</Text>
      <Text style={styles.text}>
        Em São Paulo, os ônibus elétricos estão emergindo como uma parte crucial do sistema de mobilidade urbana, oferecendo uma alternativa sustentável e inovadora ao transporte público tradicional. Com a crescente necessidade de soluções que promovam a sustentabilidade e reduzam as emissões de carbono, esses veículos se tornaram uma escolha estratégica para a cidade.
        {'\n\n'}
        Os ônibus elétricos em São Paulo operam em rotas específicas e estão sendo integrados gradualmente à frota de transporte público. Além de serem mais silenciosos e menos poluentes, esses ônibus oferecem uma experiência de viagem mais confortável, contribuindo para a melhoria da qualidade do ar e para a saúde pública.
        {'\n\n'}
        A adoção de ônibus elétricos faz parte do compromisso de São Paulo em promover a mobilidade sustentável, alinhando-se às metas globais de combate às mudanças climáticas e aprimorando a qualidade de vida dos seus habitantes.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Adicione uma cor de fundo se necessário
  },
  image: {
    width: '100%', // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Ajuste o espaçamento entre linhas para melhor leitura
  },
});
