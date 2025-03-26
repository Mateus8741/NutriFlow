import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    Text,
    TouchableOpacity,
    View,
    type ViewToken,
} from 'react-native';

const { width } = Dimensions.get('window');

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface Slide {
  id: string;
  title: string;
  description: string;
  icon?: string;
  color?: string;
  features?: Feature[];
  benefits?: Benefit[];
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'DietFlow',
    description:
      'Um sistema minimalista e elegante para acompanhamento de dietas, feito para tornar sua jornada nutricional mais simples e eficiente.',
    icon: 'food-apple',
    color: '#22C55E',
  },
  {
    id: '2',
    title: 'Funcionalidades principais',
    description:
      'Tudo o que você precisa para manter uma dieta equilibrada e atingir seus objetivos.',
    features: [
      {
        icon: '🎯',
        title: 'Dieta personalizada',
        description:
          'Planos alimentares adaptados aos seus objetivos, preferências e necessidades.',
      },
      {
        icon: '📊',
        title: 'Acompanhamento simples',
        description:
          'Registre suas refeições e acompanhe seu progresso com uma interface intuitiva.',
      },
      {
        icon: '📱',
        title: 'Acesso em qualquer lugar',
        description:
          'Use no celular ou computador, com ou sem internet, para nunca perder o controle.',
      },
    ],
  },
  {
    id: '3',
    title: 'Por que escolher o DietFlow?',
    description: 'Descubra as vantagens de usar nossa plataforma.',
    benefits: [
      {
        title: 'Design minimalista',
        description: 'Interface limpa e intuitiva, sem distrações desnecessárias.',
      },
      {
        title: 'Foco em eficiência',
        description:
          'Registre suas refeições rapidamente e acompanhe seu progresso sem complicações.',
      },
      {
        title: 'Base científica',
        description: 'Cálculos nutricionais baseados em métodos comprovados e atualizados.',
      },
      {
        title: 'Personalização completa',
        description: 'Adapte sua dieta de acordo com suas necessidades e preferências.',
      },
    ],
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<Slide>>(null);
  const textOpacity = useRef(new Animated.Value(1)).current;
  const buttonWidth = useRef(new Animated.Value(140)).current;
  const buttonTextOpacity = useRef(new Animated.Value(1)).current;

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken<Slide>[] }) => {
      const index = viewableItems[0]?.index;
      if (typeof index === 'number') {
        // Fade out atual texto
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setCurrentIndex(index);
          // Fade in novo texto
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();

          // Hide button text
          Animated.timing(buttonTextOpacity, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }).start();

          // Animar a largura do botão
          Animated.spring(buttonWidth, {
            toValue: index === slides.length - 1 ? 180 : 140,
            friction: 8,
            tension: 40,
            useNativeDriver: false,
          }).start(() => {
            // Show button text after width animation
            Animated.timing(buttonTextOpacity, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }).start();
          });
        });
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1 && slidesRef.current) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1">
        <FlatList
          data={slides}
          renderItem={({ item }: { item: Slide }) => (
            <View style={{ width }}>
              {item.id === '1' ? (
                <View className="flex-1 items-center justify-center p-8">
                  <View className="mb-6 h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <MaterialCommunityIcons
                      name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap}
                      size={32}
                      color={item.color}
                    />
                  </View>
                  <Text className="mb-4 text-center text-4xl font-bold text-gray-900">
                    {item.title}
                  </Text>
                  <Text className="text-center text-lg text-gray-600">{item.description}</Text>
                </View>
              ) : item.id === '2' ? (
                <View className="flex-1 p-8">
                  <Text className="mb-8 text-center text-3xl font-bold text-gray-900">
                    {item.title}
                  </Text>
                  <Text className="mb-8 text-center text-base text-gray-600">
                    {item.description}
                  </Text>
                  <View className="space-y-4">
                    {item.features?.map((feature: Feature) => (
                      <View
                        key={feature.title}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <View className="mb-4 h-12 w-12 items-center justify-center rounded-full bg-green-50">
                          <Text className="text-2xl">{feature.icon}</Text>
                        </View>
                        <Text className="mb-2 text-xl font-medium">{feature.title}</Text>
                        <Text className="text-gray-600">{feature.description}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ) : (
                <View className="flex-1 p-8">
                  <Text className="mb-8 text-center text-3xl font-bold text-gray-900">
                    {item.title}
                  </Text>
                  <Text className="mb-8 text-center text-base text-gray-600">
                    {item.description}
                  </Text>
                  <View className="space-y-6">
                    {item.benefits?.map((benefit: Benefit) => (
                      <View key={benefit.title} className="flex-row gap-3">
                        <View className="mt-1 h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Feather name="check" size={14} color="#22C55E" />
                        </View>
                        <View className="flex-1">
                          <Text className="mb-1 text-lg font-medium">{benefit.title}</Text>
                          <Text className="text-gray-600">{benefit.description}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item: Slide) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View className="h-24 items-center justify-center px-4">
        <View className="mb-4 flex-row">
          {slides.map((_, index) => {
            const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={`dot-${index.toString()}`}
                style={{
                  width: dotWidth,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#22C55E',
                  marginHorizontal: 4,
                  opacity,
                }}
              />
            );
          })}
        </View>
        <View className="items-center">
          <Animated.View style={{ width: buttonWidth }}>
            <TouchableOpacity
              className="flex-row items-center justify-center rounded-full bg-green-500 py-4"
              onPress={() => {
                scrollTo();
              }}>
              <Text className="mr-2 text-center text-lg font-semibold text-white">
                {currentIndex === slides.length - 1 ? 'Começar agora' : 'Próximo'}
              </Text>
              <Feather name="arrow-right" size={16} color="white" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
