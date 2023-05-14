import { create } from 'zustand';

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModel = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: true })),
  onClose: () => set((state) => ({ isOpen: false }))
}));

export default useRegisterModel;