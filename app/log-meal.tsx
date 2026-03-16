import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LogMealScreen() {
  const router = useRouter();

  // TODO: add useState for mealName and calories
  // TODO: pull addMeal from useCalories()
  // TODO: write handleSave function

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Log a Meal</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Meal name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Hattie B's"
          // TODO: add value and onChangeText
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Calories</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 450"
          keyboardType="numeric"
          // TODO: add value and onChangeText
        />
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        // TODO: add onPress={handleSave}
      >
        <Text style={styles.saveButtonText}>Save Meal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 32,
    color: '#222',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: '#222',
    backgroundColor: '#fafafa',
  },
  saveButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonDisabled: {
    backgroundColor: '#ffb89a',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  cancelText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
    color: '#888',
  },
});