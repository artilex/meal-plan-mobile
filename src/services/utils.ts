export const calculate = (weight: number, height: number, age: number) => {
  const kWeight = 9.99;
  const kHeight = 6.25;
  const kAge = 4.92;
  const kBLM = 161;
  const kActivity = 1.3;
  const kDecrease = 0.2;
  const kProtein = 1.8; // till 2
  const kFats = 1;
  const proteinCalories = 4;
  const carbsCalories = 4;
  const fatsCalories = 9;

  //  Basic level of metabolism
  const BLM = kWeight * weight + kHeight * height - kAge * age - kBLM;
  const BLMWithActivity = BLM * kActivity;
  const calories = BLMWithActivity - BLMWithActivity * kDecrease;

  const protein = weight * kProtein;
  const fats = weight * kFats;
  const carbs =
    (calories - protein * proteinCalories - fats * fatsCalories) /
    carbsCalories;

  return {calories, protein, fats, carbs};
};

export enum PhysicalActivityLevel {
  Inactive = 1.2,
  LowActivity = 1.4,
  NormalActivity = 1.6,
  HighActivity = 1.8,
  ExtraHighActivity = 2,
}

export const calculateNew = (
  weight: number,
  height: number,
  age: number,
  sex: number,
  activity: PhysicalActivityLevel,
) => {
  const kWeight = 9.99;
  const kHeight = 6.25;
  const kAge = 4.92;
  const kMan = 5;
  const kWoman = -161;
  const kSex = sex === 1 ? kWoman : kMan;
  const weightLossPercentageMin = 0.2;
  const weightLossPercentageMax = 0.15;

  // Basal Metabolic Rate
  const BMR = kWeight * weight + kHeight * height - kAge * age + kSex;
  // Daily Calorie Intake
  const DCI = BMR * activity;

  const minMacros = getMacronutrients(DCI, weightLossPercentageMin);
  const maxMacros = getMacronutrients(DCI, weightLossPercentageMax);

  return {
    minimal: minMacros,
    maximum: maxMacros,
    regular: {
      calories: Math.round((maxMacros.calories + minMacros.calories) / 2),
      protein: Math.round((maxMacros.protein + minMacros.protein) / 2),
      fats: Math.round((maxMacros.fats + minMacros.fats) / 2),
      carbs: Math.round((maxMacros.carbs + minMacros.carbs) / 2),
    },
  };
};

const getMacronutrients = (DCI: number, weightLossPercentage: number) => {
  const proteinPercentage = 0.3;
  const fatsPercentage = 0.25;
  const carbsPercentage = 0.45;
  const proteinCalories = 4;
  const carbsCalories = 4;
  const fatsCalories = 9;

  const calories = Math.round(DCI - DCI * weightLossPercentage);

  return {
    calories,
    protein: Math.round((calories * proteinPercentage) / proteinCalories),
    fats: Math.round((calories * fatsPercentage) / fatsCalories),
    carbs: Math.round((calories * carbsPercentage) / carbsCalories),
  };
};
