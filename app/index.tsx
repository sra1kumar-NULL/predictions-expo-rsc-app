/// <reference types="react/canary" />
import React from "react";
import { VStack } from "@/components/ui/vstack";
import { renderAge, renderGender, renderNationality } from "./actions/server";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { InputField, Input } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [attributes, setAttributes] = React.useState({
    name: "",
    showPredictions: false,
  });
  const handlePredict = () => {
    if (attributes.name?.length) {
      setAttributes({
        ...attributes,
        showPredictions: true,
      });
    }
  };
  return (
    <VStack className="flex-1  md:items-center md:justify-center">
      <Card className="w-[600px]">
        {/* client */}
        <HStack className="items-center justify-between mt-3">
          <Input variant="outline" size="md" className="w-4/5">
            <InputField
              placeholder="Enter your name to predict..."
              value={attributes.name}
              autoFocus
              onChangeText={(text) =>
                setAttributes({ ...attributes, name: text })
              }
              onSubmitEditing={handlePredict}
            />
          </Input>
          <Button variant="solid" size="md" onPress={handlePredict}>
            <ButtonText>Predict</ButtonText>
          </Button>
        </HStack>
        {/* server */}
        <VStack className="gap-2 mt-6">
          <HStack className="items-center gap-2">
            <Text className="text-lg font-semibold from-neutral-900 mt-2 ">
              Gender :{" "}
            </Text>
            <React.Suspense fallback={<Text>....</Text>}>
              {attributes.showPredictions
                ? renderGender(attributes.name)
                : null}
            </React.Suspense>
          </HStack>
          <HStack className="items-center gap-2">
            <Text className="text-lg font-semibold from-neutral-900 mt-2 ">
              Age :{" "}
            </Text>
            <React.Suspense fallback={<Text>....</Text>}>
              {attributes.showPredictions ? renderAge(attributes.name) : null}
            </React.Suspense>
          </HStack>
          <HStack className="items-center gap-2">
            <Text className="text-lg font-semibold from-neutral-900 mt-2 ">
              Nationality Code :{" "}
            </Text>
            <React.Suspense fallback={<Text>....</Text>}>
              {attributes.showPredictions
                ? renderNationality(attributes.name)
                : null}
            </React.Suspense>
          </HStack>
        </VStack>
      </Card>
    </VStack>
  );
}
