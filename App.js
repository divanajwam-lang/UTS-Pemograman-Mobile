import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import InfoCard from './src/components/InfoCard';
import DirektoriMahasiswa from './src/screens/DirektoriMahasiswa';

export default function App() {
  return (
    <View style={styles.container}>
      <InfoCard
        title="Tugas Jobsheet 04"
        status="selesai"
        onPress={() => Alert.alert('Detail', 'Tugas Jobsheet 04 sudah selesai')}
      />
      <InfoCard
        title="Laporan Praktikum"
        status="proses"
        onPress={() => Alert.alert('Detail', 'Laporan masih dikerjakan')}
      />

      <DirektoriMahasiswa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
    paddingTop: 50,
  },
});