import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 p-4">
        <Text className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Welcome to Dietify Flow
        </Text>

        <View className="space-y-4">
          <TouchableOpacity className="rounded-lg bg-blue-500 p-4" onPress={() => {}}>
            <Text className="text-center font-semibold text-white">Start Your Journey</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"
            onPress={() => {}}>
            <Text className="text-center font-semibold text-gray-900 dark:text-white">
              View Your Progress
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
