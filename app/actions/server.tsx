"use server";

import { Text } from "@/components/ui/text";

// this page completely runs on the server ! - this is a server action - a component renderered on the server with dynamic data.

export async function renderGender(name: string) {
  const response = await fetch(`https://api.genderize.io?name=${name}`);
  const predictionData = await response.json();
  console.log(predictionData);
  return (
    <Text className="text-lg font-semibold text-warning-600 mt-2 capitalize">
      {predictionData?.gender ?? "Male"}
    </Text>
  );
}
export async function renderAge(name: string) {
  const response = await fetch(`https://api.agify.io?name=${name}`);
  const predictionData = await response.json();
  return (
    <Text className="text-lg font-semibold text-warning-600 mt-2 capitalize">
      {predictionData?.age ?? "23"}
    </Text>
  );
}
export async function renderNationality(name: string) {
  const response = await fetch(`https://api.nationalize.io?name=${name}`);
  const predictionData = await response.json();
  return (
    <Text className="text-lg font-semibold text-warning-600 mt-2 capitalize">
      {predictionData?.country?.length
        ? predictionData?.country[0]?.country_id
        : "IN"}
    </Text>
  );
}
