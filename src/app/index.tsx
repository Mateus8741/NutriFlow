import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center p-8 pt-20">
        <View className="mb-6 h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <MaterialCommunityIcons name="food-apple" size={32} color="#22C55E" />
        </View>

        <Text className="mb-4 text-center text-4xl font-bold text-gray-900">DietFlow</Text>

        <Text className="mb-8 text-center text-lg text-gray-600">
          Um sistema minimalista e elegante para acompanhamento de dietas, feito para tornar sua
          jornada nutricional mais simples e eficiente.
        </Text>

        <View className="w-full space-y-4">
          <TouchableOpacity
            className="rounded-full bg-green-500 px-6 py-4"
            onPress={() => router.replace('/(tabs)')}>
            <Text className="text-center text-lg font-semibold text-white">Começar agora</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-full bg-gray-100 px-6 py-4"
            onPress={() => router.push('/(tabs)/two')}>
            <Text className="text-center text-lg font-semibold text-gray-900">Saiba mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
