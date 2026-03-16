import { useCalories } from '@/context/CalorieContext';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const { totalCalories } = useCalories();
  const caloriesLogged = totalCalories;
  const calorieGoal = 2000;
  const progressPercent = Math.min(caloriesLogged / calorieGoal, 1);

  const getPandaMood = () => {
    if (progressPercent < 0.8) return { emoji: '🐼', mood: 'Happy!', color: '#4CAF50' };
    if (progressPercent < 1.0) return { emoji: '😐', mood: 'Getting full...', color: '#FF9800' };
    return { emoji: '😢', mood: 'I am full! Stop feeding me!', color: '#F44336' };
  };

  const panda = getPandaMood();

  return (
    <View style={styles.container}>

      {/* Panda */}
      <View style={styles.pandaContainer}>
        <Text style={styles.pandaEmoji}>{panda.emoji}</Text>
        <Text style={[styles.pandaMood, { color: panda.color }]}>{panda.mood}</Text>
      </View>

      {/* Calorie display */}
      <View style={styles.calorieCard}>
        <Text style={styles.calorieNumber}>{caloriesLogged}</Text>
        <Text style={styles.calorieLabel}>/ {calorieGoal} kcal</Text>

        {/* Progress bar */}
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, {
            width: `${progressPercent * 100}%`,
            backgroundColor: panda.color
          }]} />
        </View>
      </View>

      {/* Log meal button */}
      <TouchableOpacity
        style={styles.logButton}
        onPress={() => router.push('/log-meal')}
      >
        <Text style={styles.logButtonText}>+ Log a Meal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton}> {/* add // TODO: add onPress for reset function */}
  <Text style={styles.resetButtonText}>Reset</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  pandaContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  pandaEmoji: {
    fontSize: 100,
  },
  pandaMood: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
  },
  calorieCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    marginBottom: 32,
  },
  calorieNumber: {
    fontSize: 48,
    fontWeight: '700',
    color: '#222',
  },
  calorieLabel: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  logButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
  },
  logButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButton: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  resetButtonText: {
    color: '#888',
    fontSize: 15,
  },
});