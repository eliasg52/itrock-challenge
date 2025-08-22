import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants";
import { useLogin } from "@/hooks/useLogin";
import { CustomInput, PasswordInput, CustomButton } from "@/components";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    showPassword,
    error,
    handleLogin,
    togglePasswordVisibility,
  } = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/itrock-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Iniciar Sesión</Text>

          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Usuario"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputContainer}>
            <PasswordInput
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              showPassword={showPassword}
              onTogglePassword={togglePasswordVisibility}
            />
          </View>

          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <CustomButton
            title="Ingresar"
            onPress={handleLogin}
            isLoading={isLoading}
            style={styles.loginButton}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 48,
  },
  logo: {
    width: 120,
    height: 120,
  },
  formContainer: {
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  errorContainer: {
    backgroundColor: colors.error,
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  errorText: {
    color: colors.secondary,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
  loginButton: {
    marginTop: 24,
  },
});
export default Login;
