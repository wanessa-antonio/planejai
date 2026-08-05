import { useEffect, useState } from 'react';

const STORAGE_KEY = 'planejai:simulation';

export function useSimulationStorage() {
  const [data, setData] = useState<Record<string, string>>(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
      return JSON.parse(storedData);
    }

    return {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  function updateField(field: string, value: string) {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function clearData() {
    setData({});
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    data,
    updateField,
    clearData,
  };
}