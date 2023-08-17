import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AlertMessage {
  name: string;
  message: string;
  state: boolean;
}

interface AlertState {
  isVisible: boolean;
  messages: Map<string, AlertMessage>;
}

interface AlertAction {
  toggleVisible(): void;
  setMessage(payload: AlertMessage): void;
}

export const useAlertStore = create(
  immer<AlertState & AlertAction>((set, _g) => {
    const toggleVisible = (): void => {
      return set(state => {
        state.isVisible = !state.isVisible;
        return state;
      });
    };
    const setMessage = (payload: AlertMessage): void => {
      return set(state => {
        state.messages.set(payload.name, payload);
        return state;
      });
    };

    return {
      isVisible: false,
      messages: new Map<string, AlertMessage>(),
      toggleVisible,
      setMessage,
    };
  }),
);
