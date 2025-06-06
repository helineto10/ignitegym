import { useState } from "react";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Text, VStack } from "@gluestack-ui/themed";
import { SafeAreaView, SectionList } from "react-native";
import { gluestackUIConfig as theme } from "../../config/gluestack-ui.config";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "03/06/2025",
      data: ["Puxada frontal", "Remada curvada"]
    },
    {
      title: "04/06/2025",
      data: ["Puxada frontal"]
    }
  ])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.tokens.colors.gray600 }}>
      <ScreenHeader title="Histórico de Exercícios" />

      <VStack flex={1} bg="$gray700" px="$8" pt="$2">
        <SectionList
          sections={exercises}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <HistoryCard name={item} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <VStack mt="$8" mb="$4">
              <Text color="$gray200" fontSize="$md" fontFamily="$heading">
                {title}
              </Text>
            </VStack>
          )}
          contentContainerStyle={
            exercises.length === 0 && { flex: 1, justifyContent: "center" }
          }
          ListEmptyComponent={() => (
            <Center>
              <Text textAlign="center" color="$gray100" fontSize="$md" fontFamily="$body">
                Nenhum exercício registrado ainda.{"\n"} Vamos fazer exercício hoje?
              </Text>
            </Center>
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
        />
      </VStack>
    </SafeAreaView>
  );
}