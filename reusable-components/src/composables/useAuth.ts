import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "@/firebase";

// Global singleton state so all components share the same user session
const user: Ref<User | null> = ref(null);
const initialLoading: Ref<boolean> = ref(true);
const actionLoading: Ref<boolean> = ref(false);
const error: Ref<string | null> = ref(null);

// Listen to auth state changes
onAuthStateChanged(auth, (currentUser: User | null) => {
  user.value = currentUser;
  initialLoading.value = false;
});

function formatAuthError(err: any): string {
  if (!err) return "";
  const code = err.code || "";
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Please sign in instead.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "The password is too weak. Please use at least 6 characters.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Invalid email or password. Please try again.";
    case "auth/user-disabled":
      return "This user account has been disabled.";
    case "auth/operation-not-allowed":
      return "Email/Password sign-in is not enabled in the Firebase Console (Authentication > Sign-in method).";
    case "auth/popup-closed-by-user":
      return "Sign-in popup was closed before completing.";
    case "auth/unauthorized-domain":
      return "Unauthorized domain. Add 'localhost' to Authorized Domains in Firebase Console > Authentication > Settings.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Access has been temporarily restricted. Please try again later.";
    default:
      return err.message || "An authentication error occurred. Please try again.";
  }
}

export interface UseAuthReturn {
  user: Ref<User | null>;
  loading: ComputedRef<boolean>;
  error: Ref<string | null>;
  isAuthenticated: ComputedRef<boolean>;
  clearError: () => void;
  login: (email: string, password: string) => Promise<User>;
  register: (email: string, password: string, displayName?: string) => Promise<User>;
  loginWithGoogle: () => Promise<User>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const isAuthenticated = computed(() => !!user.value);
  const loading = computed(() => initialLoading.value || actionLoading.value);

  const clearError = () => {
    error.value = null;
  };

  const login = async (email: string, password: string): Promise<User> => {
    clearError();
    actionLoading.value = true;
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      user.value = cred.user;
      return cred.user;
    } catch (err: any) {
      error.value = formatAuthError(err);
      throw err;
    } finally {
      actionLoading.value = false;
    }
  };

  const register = async (email: string, password: string, displayName = ""): Promise<User> => {
    clearError();
    actionLoading.value = true;
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      if (displayName && displayName.trim()) {
        await updateProfile(cred.user, { displayName: displayName.trim() });
      }
      user.value = auth.currentUser;
      return cred.user;
    } catch (err: any) {
      error.value = formatAuthError(err);
      throw err;
    } finally {
      actionLoading.value = false;
    }
  };

  const loginWithGoogle = async (): Promise<User> => {
    clearError();
    actionLoading.value = true;
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      user.value = cred.user;
      return cred.user;
    } catch (err: any) {
      error.value = formatAuthError(err);
      throw err;
    } finally {
      actionLoading.value = false;
    }
  };

  const logout = async (): Promise<void> => {
    clearError();
    actionLoading.value = true;
    try {
      await signOut(auth);
      user.value = null;
    } catch (err: any) {
      error.value = formatAuthError(err);
      throw err;
    } finally {
      actionLoading.value = false;
    }
  };

  return {
    user,
    loading,
    error,
    isAuthenticated,
    clearError,
    login,
    register,
    loginWithGoogle,
    logout,
  };
}
