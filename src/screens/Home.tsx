import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, SafeAreaView } from "react-native";

import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

import { AppNavigationRoutesProp } from "@routes/app.routes";

import { gluestackUIConfig as theme } from "../../config/gluestack-ui.config";

export function Home() {
  const [exercises, setExercises] = useState([
    "Puxada frontal", "Remada curvada", "Remada unilateral", "Levantamento terra"]);

  const [groups, setGroups] = useState(["costas", "ombro", "triceps", "biceps"]);
  const [groupSelected, setGroupSelected] = useState("costas");

  const navigation = useNavigation<AppNavigationRoutesProp>()

  function handleExerciseDetails() {
    navigation.navigate("exercise")
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.tokens.colors.gray600 }}>
      <VStack flex={1} bg="$gray700">
        <HomeHeader />

        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={groupSelected.toLowerCase() === item.toLowerCase()}
              onPress={() => setGroupSelected(item)}
            />
          )}
          contentContainerStyle={{ paddingHorizontal: 32 }}
          style={{
            marginVertical: 20,
            maxHeight: 44,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <VStack flex={1} px="$8">
          <HStack justifyContent="space-between" alignItems="center" mb="$4">
            <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
              Exercícios
            </Heading>
            <Text color="$gray200" fontSize="$sm" fontFamily="$body">
              {exercises.length}
            </Text>
          </HStack>

          <FlatList
            data={exercises}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <ExerciseCard
              name={item}
              onPress={handleExerciseDetails}
              />
            )}
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
