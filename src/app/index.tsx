import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim1, fadeAnim2]);

  useEffect(() => {
    router.replace('/onboarding');
  }, []);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Hero Section */}
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

      {/* Features Section */}
      <Animated.View style={{ opacity: fadeAnim1 }} className="px-4 py-16">
        <View className="mb-12">
          <Text className="mb-4 text-center text-3xl font-bold text-gray-900">
            Funcionalidades principais
          </Text>
          <Text className="mx-4 text-center text-base text-gray-600">
            Tudo o que você precisa para manter uma dieta equilibrada e atingir seus objetivos.
          </Text>
        </View>

        <View className="space-y-4">
          <View className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <View className="mb-4 h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <Text className="text-2xl">🎯</Text>
            </View>
            <Text className="mb-2 text-xl font-medium">Dieta personalizada</Text>
            <Text className="text-gray-600">
              Planos alimentares adaptados aos seus objetivos, preferências e necessidades.
            </Text>
          </View>

          <View className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <View className="mb-4 h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <Text className="text-2xl">📊</Text>
            </View>
            <Text className="mb-2 text-xl font-medium">Acompanhamento simples</Text>
            <Text className="text-gray-600">
              Registre suas refeições e acompanhe seu progresso com uma interface intuitiva.
            </Text>
          </View>

          <View className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <View className="mb-4 h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <Text className="text-2xl">📱</Text>
            </View>
            <Text className="mb-2 text-xl font-medium">Acesso em qualquer lugar</Text>
            <Text className="text-gray-600">
              Use no celular ou computador, com ou sem internet, para nunca perder o controle.
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Why Choose Section */}
      <Animated.View style={{ opacity: fadeAnim2 }} className="px-4 py-16">
        <View className="mb-12">
          <Text className="mb-4 text-center text-3xl font-bold text-gray-900">
            Por que escolher o DietFlow?
          </Text>
        </View>

        <View className="space-y-6">
          <View className="flex-row gap-3">
            <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Feather name="check" size={14} color="#22C55E" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-medium">Design minimalista</Text>
              <Text className="text-gray-600">
                Interface limpa e intuitiva, sem distrações desnecessárias.
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Feather name="check" size={14} color="#22C55E" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-medium">Foco em eficiência</Text>
              <Text className="text-gray-600">
                Registre suas refeições rapidamente e acompanhe seu progresso sem complicações.
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Feather name="check" size={14} color="#22C55E" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-medium">Base científica</Text>
              <Text className="text-gray-600">
                Cálculos nutricionais baseados em métodos comprovados e atualizados.
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Feather name="check" size={14} color="#22C55E" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-medium">Personalização completa</Text>
              <Text className="text-gray-600">
                Adapte sua dieta de acordo com suas necessidades e preferências.
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Feather name="check" size={14} color="#22C55E" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-medium">Modo escuro e claro</Text>
              <Text className="text-gray-600">
                Use o aplicativo com o tema que preferir, para conforto visual em qualquer ambiente.
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Feather name="check" size={14} color="#22C55E" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-medium">Privacidade em primeiro lugar</Text>
              <Text className="text-gray-600">
                Seus dados são seus e permanecerão assim. Sem compartilhamento ou venda de
                informações.
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-12 items-center">
          <TouchableOpacity
            className="flex-row items-center rounded-full bg-green-500 px-8 py-4"
            onPress={() => router.replace('/(tabs)')}>
            <Text className="mr-2 text-center text-lg font-semibold text-white">
              Experimentar agora
            </Text>
            <Feather name="arrow-right" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ScrollView>
  );
}
