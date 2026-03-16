import { createContext, useContext, useState } from 'react';

type Meal = {
  name: string;
  calories: number;
};

type CalorieContextType = {
  meals: Meal[];
  addMeal: (meal: Meal) => void;
  totalCalories: number;
  resetMeals: () => void;
};

const CalorieContext = createContext<CalorieContextType | null>(null);

export function CalorieProvider({ children }: { children: React.ReactNode }) {
  const [meals, setMeals] = useState<Meal[]>([]);

  const addMeal = (meal: Meal) => {
    setMeals(previous => [...previous, meal]);
  };

  const resetMeals = () => setMeals([]);

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <CalorieContext.Provider value={{ meals, addMeal, totalCalories, resetMeals }}>
      {children}
    </CalorieContext.Provider>
  );
}

export function useCalories() {
  const context = useContext(CalorieContext);
  if (!context) throw new Error('useCalories must be used inside CalorieProvider');
  return context;
}