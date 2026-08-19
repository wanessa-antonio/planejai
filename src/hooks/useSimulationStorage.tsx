import { useEffect, useState } from 'react';

export interface SimulationFormData {
  [key: string]: string;
}

export type SimulationRecord = SimulationFormData & {
  id: string;
};

const STORAGE_KEY = 'planejai:simulation';

export function useSimulationStorage() {
  const [data, setData] = useState<SimulationFormData>(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) {
      return {};
    }

    try {
      return JSON.parse(storedData) as SimulationFormData;
    } catch {
      return {};
    }
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

  /**
   * Salva uma nova simulação e retorna seu ID.
   */
  function saveFormData(formData: SimulationFormData): string {
    const id = crypto.randomUUID();

    const record: SimulationRecord = {
      ...formData,
      id,
    };

    const storage = localStorage.getItem(STORAGE_KEY);

    let savedData: SimulationRecord[] = [];

    if (storage) {
      try {
        const parsed = JSON.parse(storage);

        if (Array.isArray(parsed)) {
          savedData = parsed as SimulationRecord[];
        } else if (parsed && typeof parsed === 'object') {
          // Compatibilidade com o formato antigo.
          savedData = [
            {
              ...(parsed as SimulationFormData),
              id: crypto.randomUUID(),
            },
          ];
        }
      } catch {
        savedData = [];
      }
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...savedData, record]),
    );

    setData(record);

    return id;
  }

  /**
   * Recupera uma simulação pelo ID.
   */
  function getFormData(id: string): SimulationRecord | null {
    const storage = localStorage.getItem(STORAGE_KEY);

    if (!storage) {
      return null;
    }

    try {
      const parsed = JSON.parse(storage);

      if (!Array.isArray(parsed)) {
        return null;
      }

      const savedData = parsed as SimulationRecord[];

      return (
        savedData.find((record) => record.id === id) ?? null
      );
    } catch {
      return null;
    }
  }

  /**
   * Atualiza uma simulação existente.
   */
  function updateSimulation(
    id: string,
    updatedData: SimulationRecord,
  ) {
    const storage = localStorage.getItem(STORAGE_KEY);

    if (!storage) {
      return;
    }

    try {
      const parsed = JSON.parse(storage);

      if (!Array.isArray(parsed)) {
        return;
      }

      const savedData = parsed as SimulationRecord[];

      const updated = savedData.map((record) =>
        record.id === id ? updatedData : record,
      );

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated),
      );

      setData(updatedData);
    } catch {
      return;
    }
  }

  return {
    data,
    updateField,
    clearData,
    saveFormData,
    getFormData,
    updateSimulation,
  };
}