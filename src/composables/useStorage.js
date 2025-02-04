// src/composables/useStorage.js

import { ref } from 'vue';

// Хук для роботи з localStorage або sessionStorage
export const useStorage = (key, initialValue = null, useSession = false) => {
  const storage = useSession ? sessionStorage : localStorage; // Вибираємо тип сховища
  const storedValue = ref(storage.getItem(key) || initialValue); // Реактивне значення

  // Оновлюємо значення у сховищі
  const setValue = (value) => {
    storedValue.value = value;
    if (value === null) {
      storage.removeItem(key);
    } else {
      storage.setItem(key, value);
    }
  };

  // Видаляємо значення зі сховища
  const removeValue = () => {
    storedValue.value = null;
    storage.removeItem(key);
  };

  return {
    storedValue,
    setValue,
    removeValue,
  };
};
