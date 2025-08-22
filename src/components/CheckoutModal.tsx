import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";
import { CheckoutModalProps } from "@/types";
import { CustomButton } from "./CustomButton";
import { useCheckout } from "@/hooks/useCheckout";

export const CheckoutModal = ({
  visible,
  product,
  onClose,
}: CheckoutModalProps) => {
  const {
    isProcessing,
    validationError,
    purchaseResult,
    handleCardChange,
    handlePurchase,
    handleContinue,
  } = useCheckout(visible);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price * 1000);
  };

  if (!product) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Finalizar Compra</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {!purchaseResult ? (
              <>
                <View style={styles.productSection}>
                  <Text style={styles.sectionTitle}>Producto</Text>
                  <View style={styles.productCard}>
                    <Image
                      source={{ uri: product.image }}
                      style={styles.productImage}
                      resizeMode="contain"
                    />
                    <View style={styles.productInfo}>
                      <Text style={styles.productTitle} numberOfLines={2}>
                        {product.title}
                      </Text>
                      <Text style={styles.productPrice}>
                        {formatPrice(product.price)}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.cardSection}>
                  <Text style={styles.sectionTitle}>Datos de la Tarjeta</Text>
                  <View style={styles.cardInputContainer}>
                    <CreditCardInput
                      autoFocus={false}
                      labelStyle={styles.cardLabel}
                      inputStyle={styles.cardInput}
                      placeholderColor={colors.textSecondary}
                      onChange={handleCardChange}
                      labels={{
                        number: "NÚMERO DE TARJETA",
                        expiry: "VENCIMIENTO",
                        cvc: "CVC",
                      }}
                      placeholders={{
                        number: "1234 5678 9012 3456",
                        expiry: "MM/YY",
                        cvc: "CVC",
                      }}
                    />

                    {validationError ? (
                      <View style={styles.errorContainer}>
                        <Ionicons
                          name="alert-circle"
                          size={16}
                          color={colors.error}
                        />
                        <Text style={styles.errorText}>{validationError}</Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              </>
            ) : (
              <View style={styles.resultSection}>
                <View style={styles.resultIconContainer}>
                  <Ionicons
                    name={
                      purchaseResult.success
                        ? "checkmark-circle"
                        : "close-circle"
                    }
                    size={64}
                    color={
                      purchaseResult.success ? colors.success : colors.error
                    }
                  />
                </View>
                <Text style={styles.resultTitle}>
                  {purchaseResult.success
                    ? "¡Compra Exitosa!"
                    : purchaseResult.message}
                </Text>
              </View>
            )}
          </ScrollView>

          <View style={styles.footer}>
            {!purchaseResult ? (
              <>
                <View style={styles.totalSection}>
                  <Text style={styles.totalLabel}>Total a pagar:</Text>
                  <Text style={styles.totalAmount}>
                    {formatPrice(product.price)}
                  </Text>
                </View>

                <CustomButton
                  title="Confirmar Compra"
                  onPress={handlePurchase}
                  isLoading={isProcessing}
                  disabled={isProcessing}
                  style={styles.purchaseButton}
                />
              </>
            ) : (
              <CustomButton
                title={
                  purchaseResult.success ? "Continuar" : "Intentar de Nuevo"
                }
                onPress={() => handleContinue(onClose)}
                style={[
                  styles.purchaseButton,
                  purchaseResult.success && styles.successButton,
                ]}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: height * 0.85,
    maxHeight: 700,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  closeButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  productSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  productImage: {
    width: 80,
    height: 80,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  cardSection: {
    marginBottom: 20,
  },
  cardInputContainer: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    minHeight: 200,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 6,
    marginTop: 4,
  },
  cardInput: {
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 16,
    minHeight: 48,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  purchaseButton: {
    marginTop: 8,
  },
  resultSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  resultIconContainer: {
    marginBottom: 24,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: 0,
    paddingHorizontal: 20,
    lineHeight: 32,
  },
  successButton: {
    backgroundColor: colors.success,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -10,
    paddingHorizontal: 4,
  },
  errorText: {
    fontSize: 14,
    color: colors.error,
    marginLeft: 6,
    flex: 1,
  },
});
